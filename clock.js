// clock.js — Циферблат в стиле ночного неба с цифрами
import * as THREE from 'three';

export function addClock(scene) {
    console.log('🌙 Добавляю циферблат ночного неба...');

    const clockGroup = new THREE.Group();
    clockGroup.position.y = -0.1;

    // ============================================================
    // 1. ОСНОВА
    // ============================================================
    const dialGeo = new THREE.RingGeometry(2.8, 4.2, 64);
    const dialMat = new THREE.MeshStandardMaterial({
        color: 0x0a0a1a,
        roughness: 0.9,
        metalness: 0.1,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
    });
    const dial = new THREE.Mesh(dialGeo, dialMat);
    dial.rotation.x = -Math.PI / 2;
    clockGroup.add(dial);

    // ============================================================
    // 2. ЗВЁЗДНЫЙ ОРЕОЛ
    // ============================================================
    const starFieldMat = new THREE.PointsMaterial({
        color: 0x88aaff,
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });

    const starPositions = [];
    for (let i = 0; i < 800; i++) {
        const radius = 2.5 + Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        const offset = (Math.random() - 0.5) * 0.3;
        starPositions.push(
            Math.cos(angle) * radius,
            offset,
            Math.sin(angle) * radius
        );
    }
    const starFieldGeo = new THREE.BufferGeometry();
    starFieldGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starField = new THREE.Points(starFieldGeo, starFieldMat);
    clockGroup.add(starField);

    // ============================================================
    // 3. РОМБИКИ (12 штук)
    // ============================================================
    function createDiamondShape(size, concavity) {
        const shape = new THREE.Shape();
        const half = size / 2;
        const c = concavity || 0.2;
        
        const points = [
            { x: 0, y: half },
            { x: half, y: 0 },
            { x: 0, y: -half },
            { x: -half, y: 0 }
        ];
        
        shape.moveTo(points[0].x, points[0].y);
        
        for (let i = 0; i < points.length; i++) {
            const next = points[(i + 1) % points.length];
            const current = points[i];
            
            const midX = (current.x + next.x) / 2;
            const midY = (current.y + next.y) / 2;
            
            const dx = next.x - current.x;
            const dy = next.y - current.y;
            const len = Math.hypot(dx, dy);
            const nx = -dy / len;
            const ny = dx / len;
            
            const concavityOffset = c * half;
            const cpX = midX + nx * concavityOffset;
            const cpY = midY + ny * concavityOffset;
            
            shape.quadraticCurveTo(cpX, cpY, next.x, next.y);
        }
        
        shape.closePath();
        return shape;
    }

    const diamondMat = new THREE.MeshStandardMaterial({
        color: 0xaaccff,
        emissive: 0x4488ff,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
    });

    const diamondGlowMat = new THREE.MeshBasicMaterial({
        color: 0x4488ff,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
    });

    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const radius = 3.6;
        const isMain = i % 3 === 0;
        const size = isMain ? 0.22 : 0.14;
        const concavity = isMain ? 0.3 : 0.2;

        const shape = createDiamondShape(size, concavity);
        const geo = new THREE.ShapeGeometry(shape);
        const mesh = new THREE.Mesh(geo, diamondMat);
        mesh.position.set(
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = -angle;
        clockGroup.add(mesh);

        const glowGeo = new THREE.CircleGeometry(size * 1.8, 16);
        const glow = new THREE.Mesh(glowGeo, diamondGlowMat);
        glow.position.set(
            Math.cos(angle) * radius,
            -0.01,
            Math.sin(angle) * radius
        );
        glow.rotation.x = -Math.PI / 2;
        clockGroup.add(glow);

        // Маленькие звёздочки вокруг
        const starCount = 4 + Math.floor(Math.random() * 4);
        const smallStarMat = new THREE.PointsMaterial({
            color: 0x88ccff,
            size: 0.008 + Math.random() * 0.008,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.4,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true
        });
        const smallPos = [];
        for (let s = 0; s < starCount; s++) {
            const sa = angle + (Math.random() - 0.5) * 0.8;
            const sr = radius + (Math.random() - 0.5) * 0.4;
            smallPos.push(
                Math.cos(sa) * sr,
                (Math.random() - 0.5) * 0.05,
                Math.sin(sa) * sr
            );
        }
        const smallGeo = new THREE.BufferGeometry();
        smallGeo.setAttribute('position', new THREE.Float32BufferAttribute(smallPos, 3));
        const smallStars = new THREE.Points(smallGeo, smallStarMat);
        clockGroup.add(smallStars);
    }

    // ============================================================
    // 4. ЦИФРЫ (12, 3, 6, 9)
    // ============================================================
    function createNumber(text, angle, radius) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = '#88ccff';
        ctx.shadowColor = '#4488ff';
        ctx.shadowBlur = 15;
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        const sprite = new THREE.Sprite(mat);
        const pos = radius || 3.9;
        sprite.position.set(
            Math.cos(angle) * pos,
            0.05,
            Math.sin(angle) * pos
        );
        sprite.scale.set(0.5, 0.5, 1);
        return sprite;
    }

    clockGroup.add(createNumber('12', -Math.PI / 2, 4.0));
    clockGroup.add(createNumber('3', 0, 4.0));
    clockGroup.add(createNumber('6', Math.PI / 2, 4.0));
    clockGroup.add(createNumber('9', Math.PI, 4.0));

    // ============================================================
    // 5. ЦЕНТРАЛЬНАЯ ЗВЕЗДА
    // ============================================================
    const centerStarShape = createDiamondShape(0.25, 0.35);
    const centerStarGeo = new THREE.ShapeGeometry(centerStarShape);
    const centerStarMat = new THREE.MeshStandardMaterial({
        color: 0xffdd88,
        emissive: 0xff8800,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.5,
        side: THREE.DoubleSide
    });
    const centerStar = new THREE.Mesh(centerStarGeo, centerStarMat);
    centerStar.rotation.x = -Math.PI / 2;
    clockGroup.add(centerStar);

    const centerGlowGeo = new THREE.CircleGeometry(0.5, 16);
    const centerGlowMat = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
    });
    const centerGlow = new THREE.Mesh(centerGlowGeo, centerGlowMat);
    centerGlow.rotation.x = -Math.PI / 2;
    clockGroup.add(centerGlow);

    // ============================================================
    // 6. ПЫЛЬ
    // ============================================================
    const dustMat = new THREE.PointsMaterial({
        color: 0x88aadd,
        size: 0.005,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });
    const dustPositions = [];
    for (let i = 0; i < 400; i++) {
        const radius = 0.5 + Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        dustPositions.push(
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 0.05,
            Math.sin(angle) * radius
        );
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.Float32BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(dustGeo, dustMat);
    clockGroup.add(dust);

    scene.add(clockGroup);

    // ============================================================
    // 7. АНИМАЦИЯ
    // ============================================================
    function updateClock(time) {
        const pulse = 0.7 + Math.sin(time * 0.5) * 0.3;
        diamondMat.emissiveIntensity = 0.3 + pulse * 0.4;
        
        centerStarMat.emissiveIntensity = 0.6 + Math.sin(time * 0.7) * 0.4;
        centerGlowMat.opacity = 0.06 + Math.sin(time * 0.5) * 0.04;
        
        starFieldMat.opacity = 0.4 + Math.sin(time * 0.3) * 0.2;
        starField.rotation.z += 0.0001;
        
        dustMat.opacity = 0.2 + Math.sin(time * 0.2 + 1) * 0.15;
    }

    console.log('🌙 Циферблат ночного неба создан!');

    return {
        clockGroup,
        updateClock,
        dispose: () => {
            scene.remove(clockGroup);
        }
    };
}
