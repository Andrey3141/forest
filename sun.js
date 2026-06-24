// sun.js — Солнце (двигается вместе со светом)
import * as THREE from 'three';

export function addSunAndStar(scene) {
    console.log('☀️ Добавляю солнце...');

    const group = new THREE.Group();
    const SUN_SIZE = 3.5;

    const sunGroup = new THREE.Group();

    // --- ТЕКСТУРА ЯДРА ---
    const coreCanvas = document.createElement('canvas');
    coreCanvas.width = 1024;
    coreCanvas.height = 1024;
    const ctx = coreCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.1, '#fffde8');
    grad.addColorStop(0.3, '#ffdd55');
    grad.addColorStop(0.5, '#ffbb33');
    grad.addColorStop(0.7, '#ff9900');
    grad.addColorStop(0.85, '#ee7700');
    grad.addColorStop(1, '#cc5500');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    for (let i = 0; i < 30000; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const r = 1 + Math.random() * 4;
        const bright = 50 + Math.random() * 205;
        const alpha = 0.05 + Math.random() * 0.3;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bright}, ${bright-20}, ${bright-60}, ${alpha})`;
        ctx.fill();
    }

    const coreTexture = new THREE.CanvasTexture(coreCanvas);
    coreTexture.anisotropy = 8;

    // --- ЯДРО СОЛНЦА ---
    const coreGeo = new THREE.SphereGeometry(SUN_SIZE, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({
        map: coreTexture,
        emissive: 0xff8800,
        emissiveIntensity: 2
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.frustumCulled = false;
    sunGroup.add(core);

    // --- СВЕЧЕНИЕ ---
    const glowGeo = new THREE.SphereGeometry(SUN_SIZE * 1.3, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.frustumCulled = false;
    sunGroup.add(glow);

    // --- ВНЕШНЕЕ СВЕЧЕНИЕ ---
    const outerGlowGeo = new THREE.SphereGeometry(SUN_SIZE * 2.0, 32, 32);
    const outerGlowMat = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.06,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const outerGlow = new THREE.Mesh(outerGlowGeo, outerGlowMat);
    outerGlow.frustumCulled = false;
    sunGroup.add(outerGlow);

    group.add(sunGroup);
    scene.add(group);

    // ================================================================
    // ОСВЕЩЕНИЕ ОТ СОЛНЦА (DirectionalLight)
    // ================================================================
    const initialPos = new THREE.Vector3(12, 8, -5);
    group.position.copy(initialPos);

    const shadowLight = new THREE.DirectionalLight(0xffcc77, 2.5);
    shadowLight.position.copy(initialPos);
    shadowLight.castShadow = true;
    shadowLight.shadow.mapSize.width = 4096;
    shadowLight.shadow.mapSize.height = 4096;
    shadowLight.shadow.camera.near = 0.1;
    shadowLight.shadow.camera.far = 60;
    shadowLight.shadow.camera.left = -30;
    shadowLight.shadow.camera.right = 30;
    shadowLight.shadow.camera.top = 30;
    shadowLight.shadow.camera.bottom = -30;
    shadowLight.shadow.bias = -0.0001;
    shadowLight.shadow.normalBias = 0.02;
    shadowLight.shadow.radius = 4;
    scene.add(shadowLight);

    // Target для света (чтобы свет всегда смотрел в центр)
    const target = new THREE.Object3D();
    target.position.set(0, 0, 0);
    scene.add(target);
    shadowLight.target = target;

    const ambientFromSun = new THREE.AmbientLight(0xff6600, 0.15);
    scene.add(ambientFromSun);

    // ================================================================
    // ФУНКЦИЯ ОБНОВЛЕНИЯ ПОЗИЦИИ (двигает солнце И свет)
    // ================================================================
    function updatePosition(x, y, z) {
        const pos = new THREE.Vector3(x, y, z);
        
        // Двигаем группу с солнцем
        group.position.copy(pos);
        
        // Двигаем свет
        shadowLight.position.copy(pos);
        
        // Обновляем target (чтобы свет смотрел на центр)
        shadowLight.target.position.set(0, 0, 0);
        shadowLight.target.updateMatrixWorld();
        
        // Принудительно обновляем матрицы
        shadowLight.updateMatrixWorld();
    }

    // ================================================================
    // АНИМАЦИЯ (вращение)
    // ================================================================
    function update(time) {
        core.rotation.y += 0.0005;
        core.rotation.x += 0.0002;
        
        const pulse = 0.9 + Math.sin(time * 0.2) * 0.1;
        glow.scale.set(pulse, pulse, pulse);
        
        const pulse2 = 0.85 + Math.sin(time * 0.15 + 1) * 0.15;
        outerGlow.scale.set(pulse2, pulse2, pulse2);
    }

    console.log('☀️ Солнце создано!');

    return {
        group,
        sunGroup,
        update,
        updatePosition,
        getShadowLight: () => shadowLight,
        dispose: () => {
            scene.remove(group);
            scene.remove(shadowLight);
            scene.remove(ambientFromSun);
            scene.remove(target);
        }
    };
}
