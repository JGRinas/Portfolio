/* eslint-disable react-hooks/exhaustive-deps */
// src/providers/SpaceBackgroundProvider.tsx
import React, {
  createContext,
  useEffect,
  useRef,
  FC,
  ReactNode,
  useMemo,
  useCallback,
} from "react";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Points,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Color,
  Vector3,
} from "three";

export interface SpaceBackgroundContextProps {
  containerRef: React.RefObject<HTMLDivElement>;
  travelToSection: (number: number) => void;
}

export const SpaceBackgroundContext = createContext<
  SpaceBackgroundContextProps | undefined
>(undefined);

interface SpaceBackgroundProviderProps {
  children: ReactNode;
}

export const SpaceBackgroundProvider: FC<SpaceBackgroundProviderProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  let scene: Scene;
  let camera: PerspectiveCamera;
  let renderer: WebGLRenderer;
  let stars: Points;

  const init = useCallback(() => {
    // Initialize the scene
    scene = new Scene();
    scene.background = new Color("#06000a");

    // Create camera
    camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create the renderer
    renderer = new WebGLRenderer();
    updateRendererSize();
    window.addEventListener("resize", updateRendererSize);

    // Add the renderer to the container
    if (containerRef.current)
      containerRef.current.appendChild(renderer.domElement);

    // Create stars
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

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars
      if (stars.rotation) {
        stars.rotation.x += 0.00005;
        stars.rotation.y += 0.00005;
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const updateRendererSize = useCallback(() => {
    if (renderer && camera) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
  }, []);

  const travelToSection = useCallback((position: number = 0) => {
    const targetPosition = new Vector3(position, 0, 0);
    const startPosition = camera.position.clone();
    const startRotation = camera.rotation.clone();
    const duration = 5000; // Adjust duration as needed
    const startTime = Date.now();

    const updateCamera = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;

        // Exponential factor to simulate the speed of light
        const easedProgress = Math.pow(progress, 0.5);

        // Calculate new position
        const newPosition = new Vector3().lerpVectors(
          startPosition,
          targetPosition,
          easedProgress
        );
        camera.position.copy(newPosition);

        // Calculate new rotation
        const newRotationX =
          startRotation.x +
          (targetPosition.clone().normalize().x - startRotation.x) *
            easedProgress;
        const newRotationY =
          startRotation.y +
          (targetPosition.clone().normalize().y - startRotation.y) *
            easedProgress;
        const newRotationZ =
          startRotation.z +
          (targetPosition.clone().normalize().z - startRotation.z) *
            easedProgress;

        camera.rotation.set(newRotationX, newRotationY, newRotationZ);

        requestAnimationFrame(updateCamera);
      }
      renderer.render(scene, camera);
    };

    updateCamera();
  }, []);

  useEffect(() => {
    init();

    // Clean up when unmounting the component
    return () => {
      window.removeEventListener("resize", updateRendererSize);

      if (containerRef?.current?.firstChild)
        containerRef.current.removeChild(containerRef.current.firstChild);
    };
  });

  const contextValue = useMemo(
    () => ({ containerRef, travelToSection }),
    [containerRef, travelToSection]
  );

  return (
    <SpaceBackgroundContext.Provider value={contextValue}>
      {children}
    </SpaceBackgroundContext.Provider>
  );
};
