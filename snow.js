// snow.js
import * as THREE from 'three';

export function addSnowToScene(scene) {
    console.log('❄️ СНЕГ НА ВЕТКАХ — ПОВТОРЯЕТ ФОРМУ КОРЫ ❄️');

    const snowMaterial = new THREE.MeshStandardMaterial({
        color: 0xf0f4fa,
        roughness: 0.35,
        metalness: 0.01,
        emissive: 0xaaccff,
        emissiveIntensity: 0.02
    });

    import('./branches.js').then(module => {
        const branchData = module.branchData;
        if (!branchData || branchData.length === 0) return;
        
        console.log(`❄️ Снег на ветках...`);
        
        let snowCount = 0;
        
        for (const branch of branchData) {
            const points = branch.points;
            if (!points || points.length < 2) continue;
            
            const baseRadius = branch.radius || 0.012;
            
            for (let i = 0; i < points.length - 1; i++) {
                const p0 = points[i];
                const p1 = points[i + 1];
                const t = i / points.length;
                
                if (t < 0.2) continue;
                
                const dx = p1.x - p0.x;
                const dy = p1.y - p0.y;
                const dz = p1.z - p0.z;
                const length = Math.hypot(dx, dy, dz);
                if (length < 0.008) continue;
                
                const cx = (p0.x + p1.x) / 2;
                const cy = (p0.y + p1.y) / 2;
                const cz = (p0.z + p1.z) / 2;
                
                const dirX = dx / length;
                const dirY = dy / length;
                const dirZ = dz / length;
                
                const radius = baseRadius * (1 - t * 0.5);
                const snowRadius = radius * 0.35;
                const snowWidth = radius * 1.1;
                
                // ОДИН ПРОСТОЙ ПРЯМОУГОЛЬНИК СВЕРХУ ВЕТКИ
                const snowGeo = new THREE.BoxGeometry(length, snowRadius, snowWidth);
                const snow = new THREE.Mesh(snowGeo, snowMaterial);
                
                snow.position.set(cx, cy + radius * 0.2, cz);
                
                const quat = new THREE.Quaternion().setFromUnitVectors(
                    new THREE.Vector3(1, 0, 0),
                    new THREE.Vector3(dirX, dirY, dirZ)
                );
                snow.quaternion.copy(quat);
                
                snow.castShadow = true;
                scene.add(snow);
                snowCount++;
            }
        }
        
        console.log(`❄️ Снег: ${snowCount} элементов`);
    });
}
