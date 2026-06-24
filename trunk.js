import * as THREE from 'three';

export function addTrunkToScene(scene, totalHeight = 4.0) {
    // ТЕКСТУРА КОРЫ (из tree_detail.html)
    const barkCanvas = document.createElement('canvas');
    barkCanvas.width = 4096;
    barkCanvas.height = 4096;
    const ctx = barkCanvas.getContext('2d');
    
    ctx.fillStyle = '#5a3a28';
    ctx.fillRect(0, 0, barkCanvas.width, barkCanvas.height);
    
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * barkCanvas.width;
        const wiggle = 20 + Math.random() * 80;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.quadraticCurveTo(x + wiggle, barkCanvas.height/2, x - wiggle*0.5, barkCanvas.height);
        ctx.lineWidth = 8 + Math.random() * 20;
        ctx.strokeStyle = `rgba(30, 18, 10, ${0.5 + Math.random() * 0.4})`;
        ctx.stroke();
    }
    
    for (let i = 0; i < 8000; i++) {
        const x = Math.random() * barkCanvas.width;
        const y = Math.random() * barkCanvas.height;
        const w = 10 + Math.random() * 30;
        const h = 6 + Math.random() * 20;
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 28, 18, ${0.3 + Math.random() * 0.5})`;
        ctx.fill();
    }
    
    for (let i = 0; i < 20000; i++) {
        const x = Math.random() * barkCanvas.width;
        const y = Math.random() * barkCanvas.height;
        const rad = 1 + Math.random() * 4;
        ctx.beginPath();
        ctx.ellipse(x, y, rad, rad * 0.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 10, 5, ${0.3 + Math.random() * 0.5})`;
        ctx.fill();
    }
    
    const barkTexture = new THREE.CanvasTexture(barkCanvas);
    barkTexture.wrapS = THREE.RepeatWrapping;
    barkTexture.wrapT = THREE.RepeatWrapping;
    barkTexture.repeat.set(1.5, 4.0);
    barkTexture.anisotropy = 16;
    
    const bumpCanvas = document.createElement('canvas');
    bumpCanvas.width = 2048;
    bumpCanvas.height = 2048;
    const bumpCtx = bumpCanvas.getContext('2d');
    bumpCtx.fillStyle = '#808080';
    bumpCtx.fillRect(0, 0, bumpCanvas.width, bumpCanvas.height);
    
    for (let i = 0; i < 3000; i++) {
        const x = Math.random() * bumpCanvas.width;
        const y = Math.random() * bumpCanvas.height;
        const rad = 3 + Math.random() * 25;
        const bright = 60 + Math.random() * 120;
        bumpCtx.beginPath();
        bumpCtx.ellipse(x, y, rad, rad * 0.5, Math.random() * Math.PI, 0, Math.PI * 2);
        bumpCtx.fillStyle = `rgb(${bright}, ${bright - 30}, ${bright - 50})`;
        bumpCtx.fill();
    }
    
    const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
    bumpTexture.wrapS = THREE.RepeatWrapping;
    bumpTexture.wrapT = THREE.RepeatWrapping;
    bumpTexture.repeat.set(1.5, 4.0);
    
    const barkMaterial = new THREE.MeshStandardMaterial({
        map: barkTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.55,
        roughness: 0.7,
        metalness: 0.02,
        color: 0xffffff
    });
    
    // ГЕОМЕТРИЯ СТВОЛА
    const bottomRadius = 0.28;
    const topRadius = 0.008;
    
    const trunkGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, totalHeight, 32, 48);
    const positions = trunkGeometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i+2];
        let y = positions[i+1];
        y = y + totalHeight/2;
        
        const angle = Math.atan2(z, x);
        let r = Math.sqrt(x*x + z*z);
        
        const irregularity = Math.sin(angle * 6 + y * 12) * 0.006 + Math.cos(angle * 4 - y * 8) * 0.005;
        
        const newR = Math.max(0.003, r + irregularity);
        const factor = newR / r;
        positions[i] = x * factor;
        positions[i+2] = z * factor;
    }
    
    trunkGeometry.computeVertexNormals();
    
    const trunk = new THREE.Mesh(trunkGeometry, barkMaterial);
    trunk.position.y = totalHeight/2;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    scene.add(trunk);
    
    return { trunk, barkMaterial };
}
