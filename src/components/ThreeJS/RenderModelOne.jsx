import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './RenderModel.css';


// refrenced from https://www.youtube.com/watch?v=d63N4g8p_wI&ab_channel=SuboptimalEngineer
const RenderModelOne = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    const backgroundColor= getComputedStyle(container).getPropertyValue('--section-bg-color');


    const scene = new THREE.Scene();
    scene.background = new THREE.Color( backgroundColor );

    const camera = new THREE.PerspectiveCamera(
      50,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    //apply the rendered element to the canvasRef, since that will be nested in the DIV on the PageContent.jsx later on 
    canvasRef.current.appendChild(renderer.domElement);

    //create lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const hemiLight = new THREE.HemisphereLight(0xBB86FC, 0x03DAC6);
    scene.add(hemiLight);

    //add a cube to the scene 
    const geometry = new THREE.IcosahedronGeometry(30, 2); //(radius, detail). larger detail = more faces, more rounded
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    mesh.add(new THREE.Mesh(geometry, wireMaterial));

    //add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    
    // Resize handler
    const handleResize = () => {
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Background color handler
    const handleBackgroundColorChange = () => {
      scene.background = getComputedStyle(container.current).getPropertyValue('--section-bg-color');
      renderer.setClearColor(scene.background);
    };
    
    window.addEventListener('change', handleBackgroundColorChange);

    //animate the scene
    const animate = () => {
      //rotate box rotate animation
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='three-js-scene-nested' ref={canvasRef}> 
    </div>
  )
}

export default RenderModelOne
