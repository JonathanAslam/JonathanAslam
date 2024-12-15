
// // working on importing a 3D model into the scene

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import './RenderModel.css';

// const RenderModelOne = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       50,
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       1,
//       1000
//     );
//     camera.position.z = 96;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     ambientLight.castShadow = true;
//     scene.add(ambientLight);

//     const spotLight = new THREE.SpotLight(0xffffff, 1);
//     spotLight.castShadow = true;
//     spotLight.position.set(0, 64, 32);
//     scene.add(spotLight);

//     // Load the model
//     const loader = new GLTFLoader();
//     loader.load(
//       '/assets/emileModel/emile-scene.gltf', // Correct path to .gltf model
//       (gltf) => {
//         scene.add(gltf.scene);
//       },
//       undefined,
//       (error) => {
//         console.error('Error loading .gltf model:', error);
//       }
//     );

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     // Resize handler
//     const handleResize = () => {
//       const width = canvasRef.current.clientWidth;
//       const height = canvasRef.current.clientHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     // Animation loop
//     const animate = () => {
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       controls.dispose();
//       renderer.dispose();
//       canvasRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div className='three-js-scene-nested' ref={canvasRef}></div>;
// };

// export default RenderModelOne;
