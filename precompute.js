// precompute.js — БЫСТРАЯ ВЕРСИЯ (один рендерер, одна сцена)
import * as THREE from 'three';

export class PrecomputedTree {
    constructor() {
        this.anglesCount = 24;
        this.textureSize = 256;
        this.db = null;
        this.scene = null;
        this.renderer = null;
        this.camera = null;
        this.light = null;
        this.ambient = null;
        this.ground = null;
    }
    
    async initDB() {
        return new Promise((resolve) => {
            const request = indexedDB.open('PrecomputedTreeDB', 1);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('frames')) {
                    db.createObjectStore('frames', { keyPath: 'index' });
                }
            };
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            request.onerror = () => resolve();
        });
    }
    
    async saveFrame(index, blob) {
        return new Promise((resolve) => {
            const tx = this.db.transaction(['frames'], 'readwrite');
            tx.objectStore('frames').put({ index: index, blob: blob });
            tx.oncomplete = () => resolve();
        });
    }
    
    async loadFrame(index) {
        return new Promise((resolve) => {
            const tx = this.db.transaction(['frames'], 'readonly');
            const req = tx.objectStore('frames').get(index);
            req.onsuccess = () => resolve(req.result?.blob);
        });
    }
    
    // СОЗДАЁМ СЦЕНУ ОДИН РАЗ
    setupScene(createTreeFunction) {
        console.log('🌲 Настройка сцены для рендера текстур...');
        
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a1a0a);
        
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.3, 20);
        
        this.renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
        this.renderer.setSize(this.textureSize, this.textureSize);
        this.renderer.shadowMap.enabled = false;
        
        this.ambient = new THREE.AmbientLight(0x5a5a5a, 0.8);
        this.scene.add(this.ambient);
        
        this.light = new THREE.DirectionalLight(0xfff5e8, 1.0);
        this.light.position.set(2, 3, 1.5);
        this.scene.add(this.light);
        
        this.ground = new THREE.Mesh(new THREE.CircleGeometry(5, 8), new THREE.MeshStandardMaterial({ color: 0x2a4a2a }));
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.12;
        this.scene.add(this.ground);
        
        // СОЗДАЁМ ЁЛКУ ОДИН РАЗ
        this.treeGroup = createTreeFunction();
        this.scene.add(this.treeGroup);
        
        console.log('✅ Сцена готова');
    }
    
    async renderFrame(angle, size) {
        // Меняем позицию камеры
        const radius = 3.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        this.camera.position.set(x, 2.3, z);
        this.camera.lookAt(0, 2.0, 0);
        
        // Рендерим
        this.renderer.render(this.scene, this.camera);
        
        // Читаем пиксели
        const gl = this.renderer.domElement.getContext('webgl2') || this.renderer.domElement.getContext('webgl');
        const pixels = new Uint8Array(size * size * 4);
        gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        
        // Создаём canvas
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(size, size);
        
        for (let y = 0; y < size; y++) {
            const srcY = size - 1 - y;
            for (let x = 0; x < size; x++) {
                const srcIdx = (srcY * size + x) * 4;
                const dstIdx = (y * size + x) * 4;
                imageData.data[dstIdx] = pixels[srcIdx];
                imageData.data[dstIdx+1] = pixels[srcIdx+1];
                imageData.data[dstIdx+2] = pixels[srcIdx+2];
                imageData.data[dstIdx+3] = 255;
            }
        }
        ctx.putImageData(imageData, 0, 0);
        
        // Сжимаем в JPEG
        const blob = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.8));
        
        return blob;
    }
    
    async captureAllFrames(createTreeFunction, onProgress) {
        await this.initDB();
        
        // Очищаем старые кадры
        const tx = this.db.transaction(['frames'], 'readwrite');
        tx.objectStore('frames').clear();
        await new Promise(r => tx.oncomplete = r);
        
        // Настраиваем сцену один раз
        this.setupScene(createTreeFunction);
        
        for (let i = 0; i < this.anglesCount; i++) {
            const angle = (i / this.anglesCount) * Math.PI * 2;
            const blob = await this.renderFrame(angle, this.textureSize);
            await this.saveFrame(i, blob);
            if (onProgress) onProgress(i + 1, this.anglesCount);
        }
        
        // Очищаем
        this.renderer.dispose();
        
        return true;
    }
    
    async loadAllTextures() {
        await this.initDB();
        const textures = [];
        for (let i = 0; i < this.anglesCount; i++) {
            const blob = await this.loadFrame(i);
            if (blob) {
                const url = URL.createObjectURL(blob);
                const texture = await new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = this.textureSize;
                        canvas.height = this.textureSize;
                        canvas.getContext('2d').drawImage(img, 0, 0);
                        const tex = new THREE.CanvasTexture(canvas);
                        URL.revokeObjectURL(url);
                        resolve(tex);
                    };
                    img.src = url;
                });
                textures.push(texture);
            }
        }
        return textures;
    }
}
