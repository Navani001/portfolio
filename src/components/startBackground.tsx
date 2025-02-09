import { useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";

const createStarField = (starCount: number) => {
    const vertices = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        vertices[i3] = (Math.random() - 0.5) * 1000;
        vertices[i3 + 1] = (Math.random() - 0.5) * 1000;
        vertices[i3 + 2] = (Math.random() - 0.5) * 1000;
        starSizes[i] = Math.random() * 2 + 1;
    }

    return { vertices, starSizes };
};

const StarBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        starField: THREE.Points;
        animationFrameId?: number;
        mouseX: number;
        mouseY: number;
        targetX: number;
        targetY: number;
    }>();

    // Memoize shader materials
    const shaderMaterials = useMemo(() => ({
        vertexShader: `
            attribute float size;
            uniform float time;
            uniform float pixelRatio;
            
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5));
                if (distance > 0.5) discard;
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - distance * 2.0);
            }
        `
    }), []);

    // Memoize star field data
    const starFieldData = useMemo(() => createStarField(2000), []);

    // Memoize geometry creation
    const createGeometry = useCallback(() => {
        const starsGeometry = new THREE.BufferGeometry();
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starFieldData.vertices, 3));
        starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starFieldData.starSizes, 1));
        return starsGeometry;
    }, [starFieldData]);

    // Memoize material creation
    const createMaterial = useCallback((pixelRatio: number) => {
        return new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pixelRatio: { value: pixelRatio }
            },
            vertexShader: shaderMaterials.vertexShader,
            fragmentShader: shaderMaterials.fragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
    }, [shaderMaterials]);

    // Memoize resize handler
    const handleResize = useCallback(() => {
        if (!sceneRef.current) return;
        const { renderer, camera } = sceneRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }, []);

    // Memoize mouse move handler
    const handleMouseMove = useCallback((event: MouseEvent) => {
        if (!sceneRef.current) return;
        sceneRef.current.mouseX = (event.clientX - window.innerWidth / 2) * 0.02;
        sceneRef.current.mouseY = (event.clientY - window.innerHeight / 2) * 0.02;
    }, []);

    // Memoize animation function
    const animate = useCallback(() => {
        if (!sceneRef.current) return;
        const { renderer, scene, camera, starField } = sceneRef.current;

        sceneRef.current.animationFrameId = requestAnimationFrame(animate);

        // Update positions with memoized values
        sceneRef.current.targetX += (sceneRef.current.mouseX - sceneRef.current.targetX) * 0.02;
        sceneRef.current.targetY += (-sceneRef.current.mouseY - sceneRef.current.targetY) * 0.02;
        camera.position.x += (sceneRef.current.targetX - camera.position.x) * 0.1;
        camera.position.y += (sceneRef.current.targetY - camera.position.y) * 0.1;
        camera.lookAt(scene.position);

        starField.rotation.y += 0.0002;
        (starField.material as THREE.ShaderMaterial).uniforms.time.value += 0.01;

        renderer.render(scene, camera);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 400;

        // Create renderer with memoized settings
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            precision: "mediump",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        // Create star field with memoized geometry and material
        const geometry = createGeometry();
        const material = createMaterial(renderer.getPixelRatio());
        const starField = new THREE.Points(geometry, material);
        scene.add(starField);

        // Initialize scene ref with memoized values
        sceneRef.current = {
            renderer,
            scene,
            camera,
            starField,
            mouseX: 0,
            mouseY: 0,
            targetX: 0,
            targetY: 0
        };

        // Add event listeners
        let resizeTimeout: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 100);
        };

        window.addEventListener("resize", debouncedResize);
        document.addEventListener("mousemove", handleMouseMove);

        // Start animation
        animate();

        // Cleanup
        return () => {
            if (sceneRef.current) {
                const { renderer, scene, starField, animationFrameId } = sceneRef.current;
                if (animationFrameId) cancelAnimationFrame(animationFrameId);

                window.removeEventListener("resize", debouncedResize);
                document.removeEventListener("mousemove", handleMouseMove);

                starField.geometry.dispose();
                (starField.material as THREE.ShaderMaterial).dispose();
                scene.remove(starField);
                renderer.dispose();

                containerRef.current?.removeChild(renderer.domElement);
                sceneRef.current = undefined;
            }
        };
    }, [animate, createGeometry, createMaterial, handleMouseMove, handleResize]);

    // Memoize the container styles
    const containerStyles = useMemo(() => ({
        position: "fixed" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
    }), []);

    const backgroundStyles = useMemo(() => ({
        ...containerStyles,
        zIndex: -2,
        backgroundColor: "#000000",
    }), [containerStyles]);

    return (
        <div>
            <div style={backgroundStyles} />
            <div ref={containerRef} style={containerStyles} />
        </div>
    );
};

export default StarBackground;