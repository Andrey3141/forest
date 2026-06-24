import * as THREE from 'three';

export let branchData = [];

export function addBranchesToTrunk(scene, barkMaterial) {
    console.log('🌿 ГЕНЕРАЦИЯ ВЕТОК...');
    
    if (!barkMaterial) {
        console.error('❌ barkMaterial не передан');
        return;
    }
    
    branchData = [];
    
    const BOTTOM_RADIUS = 0.28;
    const TOP_RADIUS = 0.008;
    const TOTAL_HEIGHT = 4.0;
    const MIN_RADIUS = 0.003;
    const MAX_LEVEL = 4; // Уменьшено с 5 для производительности
    const RANDOM = Math.random;
    const SIN = Math.sin;
    const COS = Math.cos;
    const PI = Math.PI;
    
    const getTrunkRadius = (y) => {
        const t = Math.min(1, Math.max(0, y / TOTAL_HEIGHT));
        return BOTTOM_RADIUS * (1 - t) + TOP_RADIUS * t;
    };
    
    // Оптимизированная функция добавления сегмента ветки
    function addBranchSegment(p0, p1, r0, r1) {
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const dz = p1.z - p0.z;
        const length = Math.hypot(dx, dy, dz);
        if (length < 0.005) return null;
        
        const radialSegments = 6; // Уменьшено с 8
        const heightSegments = 4; // Уменьшено с 6
        
        const geometry = new THREE.CylinderGeometry(r1, r0, length, radialSegments, heightSegments);
        const positions = geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const z = positions[i+2];
            const y = positions[i+1];
            
            const angle = Math.atan2(z, x);
            const r = Math.hypot(x, z);
            
            // Оптимизированные деформации (меньше операций)
            const crackNoise = SIN(angle * 6 + y * 20) * 0.008;
            const ringNoise = SIN(y * 30) * 0.006;
            const deformation = crackNoise + ringNoise;
            const newR = Math.max(0.001, r + deformation);
            const factor = newR / r;
            
            positions[i] = x * factor;
            positions[i+2] = z * factor;
        }
        
        geometry.computeVertexNormals();
        
        const mesh = new THREE.Mesh(geometry, barkMaterial);
        mesh.position.set((p0.x + p1.x) / 2, (p0.y + p1.y) / 2, (p0.z + p1.z) / 2);
        
        const dirX = dx / length;
        const dirY = dy / length;
        const dirZ = dz / length;
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dirX, dirY, dirZ));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        
        return mesh;
    }
    
    // Создание ветки
    const createTaperedBranch = (startPoint, direction, length, startR, endR, branchInfo) => {
        const points = [startPoint.clone()];
        const radii = [startR];
        let currentPos = startPoint.clone();
        let currentDir = direction.clone().normalize();
        const stepLen = length / 8; // Уменьшено с 10
        
        for (let i = 1; i <= 8; i++) {
            const t = i / 8;
            const bend = SIN(t * PI) * 0.12;
            const newDir = new THREE.Vector3(
                currentDir.x + (RANDOM() - 0.5) * bend * 0.25,
                currentDir.y + bend * 0.15,
                currentDir.z + (RANDOM() - 0.5) * bend * 0.25
            ).normalize();
            
            currentPos = new THREE.Vector3(
                currentPos.x + newDir.x * stepLen,
                currentPos.y + newDir.y * stepLen,
                currentPos.z + newDir.z * stepLen
            );
            
            const newR = startR * (1 - t) + endR * t;
            points.push(currentPos.clone());
            radii.push(newR);
            currentDir = newDir;
        }
        
        if (branchInfo) {
            branchData.push({
                startPoint: points[0],
                endPoint: points[points.length-1],
                points: points.map(p => p.clone()),
                direction: direction.clone(),
                length, level: branchInfo.level, angle: branchInfo.angle, radius: startR
            });
        }
        
        for (let i = 1; i < points.length; i++) {
            addBranchSegment(points[i-1], points[i], radii[i-1], radii[i]);
        }
        
        return { endPoint: points[points.length-1], endRadius: radii[radii.length-1] };
    };
    
    // Рекурсивное создание веток (упрощённое)
    const createBranchRecursive = (startPoint, direction, length, startR, endR, level, angle, upBias) => {
        if (startR < MIN_RADIUS || length < 0.025) return;
        
        const { endPoint, endRadius } = createTaperedBranch(
            startPoint, direction, length, startR, endR,
            { level, angle, startPoint: startPoint.clone(), direction: direction.clone(), length }
        );
        
        if (endRadius > MIN_RADIUS * 1.3 && level < MAX_LEVEL) {
            const childCount = level === 0 ? 2 + (RANDOM() * 2 | 0) : 1 + (RANDOM() * 2 | 0);
            
            for (let c = 0; c < childCount; c++) {
                const t = 0.5 + RANDOM() * 0.4;
                const childStart = startPoint.clone().lerp(endPoint, t);
                const childR = startR * (1 - t) + endR * t;
                const childLen = length * (0.3 + RANDOM() * 0.3);
                const childEndR = childR * 0.4;
                
                let childDir;
                if (level === 0) {
                    const off = (RANDOM() - 0.5) * 1.2;
                    const childAngle = angle + off;
                    const upComp = 0.3 + upBias * 0.5 + RANDOM() * 0.2;
                    childDir = new THREE.Vector3(COS(childAngle) * 0.7, upComp, SIN(childAngle) * 0.7).normalize();
                } else {
                    childDir = direction.clone();
                    childDir.x += (RANDOM() - 0.5) * 0.6;
                    childDir.z += (RANDOM() - 0.5) * 0.6;
                    childDir.y += 0.3 + upBias * 0.3;
                    childDir.normalize();
                }
                
                createBranchRecursive(childStart, childDir, childLen, childR, childEndR, level + 1, angle + (RANDOM() - 0.5), upBias * 0.8 + 0.05);
            }
        }
    };
    
    // Основные ветки (уменьшено количество)
    const anglesList = [
        [0.20,0.80,1.40,2.00,2.60,3.20,3.80,4.40,5.00,5.60],
        [0.30,0.95,1.60,2.25,2.90,3.55,4.20,4.85,5.50],
        [0.40,1.05,1.70,2.35,3.00,3.65,4.30,4.95,5.60],
        [0.50,1.15,1.80,2.45,3.10,3.75,4.40,5.05,5.70],
        [0.60,1.25,1.90,2.55,3.20,3.85,4.50,5.15,5.80]
    ];
    
    const yValues = [0.48, 0.74, 1.18, 1.72, 2.26, 2.76, 3.20, 3.60, 3.95, 4.00];
    const lenValues = [0.85, 0.87, 0.75, 0.62, 0.50, 0.41, 0.32, 0.22, 0.14, 0.11];
    const radValues = [0.043, 0.045, 0.036, 0.030, 0.024, 0.019, 0.015, 0.012, 0.009, 0.007];
    const upValues = [0.29, 0.38, 0.52, 0.68, 0.86, 1.00, 1.14, 1.28, 1.40, 1.45];
    
    for (let idx = 0; idx < yValues.length; idx++) {
        const anglesArr = anglesList[Math.min(idx, anglesList.length - 1)];
        for (const a of anglesArr) {
            const r = getTrunkRadius(yValues[idx]);
            const start = new THREE.Vector3(COS(a) * r, yValues[idx], SIN(a) * r);
            const dir = new THREE.Vector3(COS(a), upValues[idx], SIN(a)).normalize();
            createBranchRecursive(start, dir, lenValues[idx], radValues[idx], radValues[idx] * 0.2, 0, a, Math.min(0.95, upValues[idx] * 0.7));
        }
    }
    
    // Случайные ветки (уменьшено)
    for (let i = 0; i < 40; i++) {
        const a = RANDOM() * PI * 2;
        const y = 0.5 + RANDOM() * 3.5;
        const r = getTrunkRadius(y);
        const start = new THREE.Vector3(COS(a) * r, y, SIN(a) * r);
        const len = 0.10 + RANDOM() * 0.15;
        const rad = 0.012 + RANDOM() * 0.012;
        const up = 0.3 + RANDOM() * 0.7;
        const dir = new THREE.Vector3(COS(a + (RANDOM() - 0.5) * 0.8), up, SIN(a + (RANDOM() - 0.5) * 0.8)).normalize();
        createBranchRecursive(start, dir, len, rad, rad * 0.25, 0, a, up * 0.7);
    }
    
    console.log(`✅ ВЕТКИ: ${branchData.length} сегментов`);
}

