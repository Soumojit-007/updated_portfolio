
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generates random particles with significantly reduced particle count for better performance
const ParticleField = ({ count = 500 }) => {
  // Use a more general ref type that works with @react-three/drei Points
  const points = useRef(null);
  
  // Generate random positions for the particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);
  
  // Rotate the particle field much more slowly to reduce CPU usage
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.005;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.002;
    }
  });
  
  return (
    <Points ref={points} positions={particles} stride={3}>
      <PointMaterial 
        transparent
        color="#4cc9f0"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[0.5, 1]} // Lower DPR for much better performance
        performance={{ min: 0.2 }} // Allow ThreeJS to scale down quality more aggressively
        gl={{ 
          powerPreference: 'low-power',
          antialias: false, // Disable antialiasing for performance
          alpha: true,
          depth: false, // Disable depth testing since we're just rendering particles
        }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
