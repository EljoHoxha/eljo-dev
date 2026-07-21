import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Mesh, Points } from 'three';
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color } from 'three';

function OrbitCore() {
  const coreRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const outerRef = useRef<Mesh>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    const elapsed = elapsedRef.current;

    if (coreRef.current) {
      coreRef.current.rotation.x = elapsed * 0.18;
      coreRef.current.rotation.y = elapsed * 0.32;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(elapsed * 0.25) * 0.4;
      ringRef.current.rotation.z = elapsed * 0.22;
    }

    if (outerRef.current) {
      outerRef.current.rotation.y = elapsed * -0.16;
      outerRef.current.rotation.z = elapsed * 0.08;
    }
  });

  return (
    <group position={[1.8, -0.2, 0]} rotation={[0.16, -0.38, 0.1]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 3]} />
        <meshStandardMaterial
          color="#65f4ff"
          emissive="#00c8ff"
          emissiveIntensity={1.2}
          metalness={0.82}
          roughness={0.18}
          wireframe
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.82, 0.016, 12, 180]} />
        <meshBasicMaterial color="#f5f0ff" transparent opacity={0.9} />
      </mesh>
      <mesh ref={outerRef} rotation={[1.2, 0.25, 0.7]}>
        <torusGeometry args={[2.42, 0.01, 10, 220]} />
        <meshBasicMaterial color="#9cffd0" transparent opacity={0.58} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const ref = useRef<Points>(null);
  const elapsedRef = useRef(0);
  const geometry = useMemo(() => {
    const count = 760;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const accent = [new Color('#65f4ff'), new Color('#9cffd0'), new Color('#ff6bcb')];

    for (let index = 0; index < count; index += 1) {
      const radius = 3.8 + Math.random() * 5.8;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 5.2;
      const stride = index * 3;
      const color = accent[index % accent.length];

      positions[stride] = Math.cos(angle) * radius;
      positions[stride + 1] = height;
      positions[stride + 2] = Math.sin(angle) * radius - 2;
      colors[stride] = color.r;
      colors[stride + 1] = color.g;
      colors[stride + 2] = color.b;
    }

    const buffer = new BufferGeometry();
    buffer.setAttribute('position', new BufferAttribute(positions, 3));
    buffer.setAttribute('color', new BufferAttribute(colors, 3));
    return buffer;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsedRef.current += delta;
    ref.current.rotation.y = elapsedRef.current * 0.025;
    ref.current.rotation.x = Math.sin(elapsedRef.current * 0.18) * 0.035;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

function LightGrid() {
  const gridRef = useRef<Mesh>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    if (!gridRef.current) return;
    elapsedRef.current += delta;
    gridRef.current.position.z = -1.8 + Math.sin(elapsedRef.current * 0.7) * 0.18;
  });

  return (
    <mesh ref={gridRef} position={[0, -2.2, -2.2]} rotation={[-Math.PI / 2.45, 0, 0]}>
      <planeGeometry args={[18, 18, 24, 24]} />
      <meshBasicMaterial color="#123447" wireframe transparent opacity={0.42} />
    </mesh>
  );
}

export default function FutureScene() {
  return (
    <div className="scene-shell" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.25, 6], fov: 47 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.48} />
        <pointLight position={[3, 2, 4]} intensity={22} color="#65f4ff" />
        <pointLight position={[-4, -1, 2]} intensity={12} color="#ff6bcb" />
        <ParticleField />
        <LightGrid />
        <OrbitCore />
      </Canvas>
    </div>
  );
}
