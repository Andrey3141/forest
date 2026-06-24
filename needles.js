import * as THREE from 'three';
import { branchData } from './branches.js';

export function addNeedlesToScene(scene) {
    console.log('ИГОЛКИ ОТ СТВОЛА, ТОЛЬКО НА ПОВЕРХНОСТИ ВЕТОК');

    function createNeedleGeometry() {
        const length = 1.0;
        const maxWidth = 0.095;
        const maxThickness = 0.028;
        const lengthSegments = 6;
        const radialSegments = 5;
        
        const vertices = [];
        const indices = [];
        
        function getWidth(t) {
            if (t < 0.05) return maxWidth * 0.3;
            if (t < 0.4) return maxWidth * (0.3 + (t - 0.05) / 0.35 * 0.7);
            if (t < 0.7) return maxWidth;
            return maxWidth * (1 - (t - 0.7) / 0.3 * 0.98);
        }
        
        function getThickness(t) {
            if (t < 0.05) return maxThickness * 0.35;
            if (t < 0.4) return maxThickness * (0.35 + (t - 0.05) / 0.35 * 0.65);
            if (t < 0.7) return maxThickness;
            return maxThickness * (1 - (t - 0.7) / 0.3 * 0.9);
        }
        
        function getBend(t) {
            return Math.sin(t * Math.PI) * 0.035;
        }
        
        for (let i = 0; i <= lengthSegments; i++) {
            const t = i / lengthSegments;
            const y = (t - 0.5) * length;
            const bend = getBend(t);
            const width = getWidth(t);
            const thickness = getThickness(t);
            
            for (let j = 0; j <= radialSegments; j++) {
                const angle = (j / radialSegments) * Math.PI * 2;
                vertices.push(Math.cos(angle) * width, y + bend, Math.sin(angle) * thickness);
            }
        }
        
        for (let i = 0; i < lengthSegments; i++) {
            for (let j = 0; j < radialSegments; j++) {
                const i0 = i * (radialSegments + 1) + j;
                const i1 = i * (radialSegments + 1) + j + 1;
                const i2 = (i + 1) * (radialSegments + 1) + j;
                const i3 = (i + 1) * (radialSegments + 1) + j + 1;
                indices.push(i0, i1, i2, i1, i3, i2);
            }
        }
        
        const tipIdx = vertices.length / 3;
        vertices.push(0, length * 0.505, 0);
        const lastRingStart = lengthSegments * (radialSegments + 1);
        for (let j = 0; j <= radialSegments; j++) {
            const i0 = lastRingStart + j;
            const i1 = lastRingStart + ((j + 1) % (radialSegments + 1));
            indices.push(i0, i1, tipIdx);
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        
        return geometry;
    }
    
    const needleGeometry = createNeedleGeometry();
    
    const materials = {
        young: new THREE.MeshStandardMaterial({ color: 0x5aaa3a, roughness: 0.2, metalness: 0.05, emissive: 0x1a4a0a, emissiveIntensity: 0.03 }),
        main: new THREE.MeshStandardMaterial({ color: 0x3a7a2a, roughness: 0.24, metalness: 0.06, emissive: 0x0a2a05, emissiveIntensity: 0.02 }),
        dark: new THREE.MeshStandardMaterial({ color: 0x2a5a1a, roughness: 0.28, metalness: 0.04, emissive: 0x0a1a05, emissiveIntensity: 0.015 })
    };
    
    const instances = { young: [], main: [], dark: [] };
    const random = Math.random;
    const sin = Math.sin;
    const cos = Math.cos;
    const PI = Math.PI;
    const floor = Math.floor;
    const pow = Math.pow;
    const sqrt = Math.sqrt;
    
    function addNeedle(x, y, z, dirX, dirY, dirZ, length, type, twist) {
        const matrix = new THREE.Matrix4();
        const len = Math.hypot(dirX, dirY, dirZ);
        const ndx = dirX / len;
        const ndy = dirY / len;
        const ndz = dirZ / len;
        
        const quat = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(ndx, ndy, ndz)
        );
        
        const twistQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(ndx, ndy, ndz), twist);
        quat.multiply(twistQuat);
        
        const thickness = 0.0055 + length * 0.11;
        
        matrix.compose(
            new THREE.Vector3(x, y, z),
            quat,
            new THREE.Vector3(thickness, length, thickness)
        );
        
        instances[type].push(matrix);
    }
    
    // =========================================================================
    // ОСНОВНАЯ ЛОГИКА
    // =========================================================================
    
    let totalNeedles = 0;
    
    for (const branch of branchData) {
        const points = branch.points;
        if (!points || points.length < 2) continue;
        
        // Радиус ветки у основания (ствол)
        const baseRadius = branch.radius || 0.025;
        
        // Плотность иголок (постоянная, не зависит от t)
        const needlesPerWhorl = 10;
        
        // Шаг между мутовками (очень плотно)
        const step = 0.007;
        const segmentsCount = Math.max(30, Math.floor(branch.length / step));
        
        for (let i = 0; i <= segmentsCount; i++) {
            const t = i / segmentsCount;
            
            // Интерполяция позиции на ветке
            const pointIndex = Math.min(floor(t * (points.length - 1)), points.length - 2);
            const segT = (t * (points.length - 1)) - pointIndex;
            const p0 = points[pointIndex];
            const p1 = points[pointIndex + 1];
            
            const bx = p0.x + (p1.x - p0.x) * segT;
            const by = p0.y + (p1.y - p0.y) * segT;
            const bz = p0.z + (p1.z - p0.z) * segT;
            
            // Направление ветки
            const dirX = p1.x - p0.x;
            const dirY = p1.y - p0.y;
            const dirZ = p1.z - p0.z;
            const dirLen = Math.hypot(dirX, dirY, dirZ);
            const bdx = dirX / dirLen;
            const bdy = dirY / dirLen;
            const bdz = dirZ / dirLen;
            
            // Текущий радиус ветки (уменьшается к концу)
            const currentRadius = baseRadius * (1 - t * 0.7);
            
            for (let n = 0; n < needlesPerWhorl; n++) {
                // Угол вокруг ветки
                const angle = (n / needlesPerWhorl) * PI * 2 + t * PI * 12 + random() * 0.3;
                const perpX = cos(angle);
                const perpZ = sin(angle);
                
                // Точка на поверхности ветки (откуда растёт иголка)
                const surfaceX = bx + perpX * currentRadius;
                const surfaceY = by;
                const surfaceZ = bz + perpZ * currentRadius;
                
                // Вектор от центра ветки к поверхности (нормаль наружу)
                const normalX = perpX;
                const normalZ = perpZ;
                
                // Направление иголки (наружу + немного вперёд и вверх)
                const forwardAngle = 0.35 + random() * 0.4;
                const upAngle = 0.1 + random() * 0.3;
                
                const ndx = normalX * 0.9 + bdx * forwardAngle;
                const ndz = normalZ * 0.9 + bdz * forwardAngle;
                const ndy = bdy * forwardAngle + upAngle + Math.abs(normalZ) * 0.2;
                const ndLen = Math.hypot(ndx, ndy, ndz);
                
                // Длина иголки (везде одинаковая, немного вариаций)
                const length = 0.032 + random() * 0.012;
                
                // Тип по цвету (на кончиках светлее)
                let type;
                if (t > 0.7) type = 'young';
                else if (t < 0.2) type = 'dark';
                else type = 'main';
                
                const twist = (random() - 0.5) * 2;
                
                addNeedle(surfaceX, surfaceY, surfaceZ, ndx, ndy, ndz, length, type, twist);
                totalNeedles++;
            }
        }
    }
    
    // =========================================================================
    // ВЕРХУШКА
    // =========================================================================
    
    for (let level = 0; level < 10; level++) {
        const levelY = 3.88 + level * 0.018;
        const radius = 0.12 - level * 0.01;
        const needlesCount = 35 - level * 2;
        
        for (let i = 0; i < needlesCount; i++) {
            const angle = random() * PI * 2;
            const r = radius * sqrt(random());
            const x = cos(angle) * r;
            const z = sin(angle) * r;
            const upAngle = 0.2 + random() * 0.6;
            
            const ndx = cos(angle) * sin(upAngle);
            const ndy = cos(upAngle) + 0.35;
            const ndz = sin(angle) * sin(upAngle);
            const ndLen = Math.hypot(ndx, ndy, ndz);
            
            const length = 0.028 + random() * 0.016;
            addNeedle(x, levelY, z, ndx / ndLen, ndy / ndLen, ndz / ndLen, length, 'young', (random() - 0.5) * 2);
            totalNeedles++;
        }
    }
    
    // =========================================================================
    // СТВОЛ (короткие иголки прямо из коры)
    // =========================================================================
    
    for (let i = 0; i < 1500; i++) {
        const angle = random() * PI * 2;
        const y = 0.2 + random() * 3.8;
        const radius = 0.24 - (y / 4.0) * 0.19;
        const x = cos(angle) * radius;
        const z = sin(angle) * radius;
        
        const ndx = cos(angle) * 0.7;
        const ndy = 0.2 + random() * 0.4;
        const ndz = sin(angle) * 0.7;
        const ndLen = Math.hypot(ndx, ndy, ndz);
        const length = 0.012 + random() * 0.012;
        
        addNeedle(x, y, z, ndx / ndLen, ndy / ndLen, ndz / ndLen, length, 'dark', (random() - 0.5) * 1.5);
        totalNeedles++;
    }
    
    // =========================================================================
    // СОЗДАНИЕ МЕШЕЙ
    // =========================================================================
    
    for (const [type, matrices] of Object.entries(instances)) {
        if (matrices.length === 0) continue;
        console.log(`${type}: ${matrices.length.toLocaleString()} иголок`);
        const mesh = new THREE.InstancedMesh(needleGeometry, materials[type], matrices.length);
        for (let i = 0; i < matrices.length; i++) {
            mesh.setMatrixAt(i, matrices[i]);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.castShadow = true;
        scene.add(mesh);
    }
    
    console.log(`ВСЕГО: ${totalNeedles.toLocaleString()} иголок`);
}
