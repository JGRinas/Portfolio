// src/hooks/useSpaceBackground.ts
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Points,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Color,
} from "three";

const useSpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: Scene;
    let camera: PerspectiveCamera;
    let renderer: WebGLRenderer;
    let stars: Points;
    const currentContainerRef = containerRef;

    const init = () => {
      //Initialize the scene
      scene = new Scene();
      scene.background = new Color("#06000a");

      //create camera
      camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      //Create the renderer
      renderer = new WebGLRenderer();
      updateRendererSize();
      window.addEventListener("resize", updateRendererSize);

      //Add the renderer to the container
      if (currentContainerRef.current)
        currentContainerRef.current.appendChild(renderer.domElement);

      //create stars
      const starsGeometry = new BufferGeometry();
      const starsMaterial = new PointsMaterial({
        color: 0xffffff,
        size: 0.01,
        sizeAttenuation: false,
      });

      const starsVertices = [];
      for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(starsVertices, 3)
      );
      stars = new Points(starsGeometry, starsMaterial);
      scene.add(stars);

      //Animation
      const animate = () => {
        requestAnimationFrame(animate);

        //Rotate the stars
        if (stars.rotation) {
          stars.rotation.x += 0.0001;
          stars.rotation.y += 0.0001;
        }

        renderer.render(scene, camera);
      };

      animate();
    };

    const updateRendererSize = () => {
      if (renderer && camera) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    init();

    //Clean up when unmounting the component
    return () => {
      window.removeEventListener("resize", updateRendererSize);

      if (currentContainerRef.current)
        currentContainerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return containerRef;
};

export default useSpaceBackground;
