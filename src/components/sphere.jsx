import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Sphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer;
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      mountRef.current.appendChild(renderer.domElement);

      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load('/images/skill-logo.png'), // Ensure the path is correct
        })
      );

      scene.add(sphere);
      camera.position.z = 15;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose(); // Clean up WebGL context
      };
    } catch (e) {
      console.error("WebGL context creation failed:", e);
    }
  }, []);

  return <div ref={mountRef}></div>;
};

export default Sphere;
