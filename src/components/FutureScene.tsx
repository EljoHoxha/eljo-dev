import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Group, Mesh, Points } from 'three';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  NormalBlending,
} from 'three';

type Theme = 'dark' | 'light';

type ScenePalette = {
  accent: string;
  grid: string;
  magenta: string;
  mint: string;
  panel: string;
  panelEdge: string;
};

const palettes: Record<Theme, ScenePalette> = {
  dark: {
    accent: '#65f4ff',
    grid: '#123447',
    magenta: '#ff6bcb',
    mint: '#9cffd0',
    panel: '#07111f',
    panelEdge: '#d8fbff',
  },
  light: {
    accent: '#087f8c',
    grid: '#8ba5b5',
    magenta: '#be185d',
    mint: '#0f766e',
    panel: '#e9f2f7',
    panelEdge: '#164e63',
  },
};

const architectureNodes: [number, number, number][] = [
  [-2.2, 1.2, 0.08],
  [0, 1.82, -0.12],
  [2.22, 1.05, 0.08],
  [-2.28, -1.25, 0.08],
  [0, -1.82, -0.12],
  [2.3, -1.2, 0.08],
];

function useScenePreferences() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  return { palette: palettes[theme], reduceMotion, theme };
}

function Monogram({ palette }: { palette: ScenePalette }) {
  const barMaterial = (
    <meshStandardMaterial
      color={palette.accent}
      emissive={palette.accent}
      emissiveIntensity={0.42}
      metalness={0.35}
      roughness={0.28}
    />
  );

  return (
    <group position={[0, -0.08, 0.115]}>
      <group position={[-0.38, 0, 0]}>
        <mesh position={[-0.15, 0, 0]}><boxGeometry args={[0.1, 0.7, 0.06]} />{barMaterial}</mesh>
        <mesh position={[0.02, 0.3, 0]}><boxGeometry args={[0.44, 0.1, 0.06]} />{barMaterial}</mesh>
        <mesh position={[-0.01, 0, 0]}><boxGeometry args={[0.38, 0.1, 0.06]} />{barMaterial}</mesh>
        <mesh position={[0.02, -0.3, 0]}><boxGeometry args={[0.44, 0.1, 0.06]} />{barMaterial}</mesh>
      </group>
      <group position={[0.38, 0, 0]}>
        <mesh position={[-0.18, 0, 0]}><boxGeometry args={[0.1, 0.7, 0.06]} />{barMaterial}</mesh>
        <mesh position={[0.18, 0, 0]}><boxGeometry args={[0.1, 0.7, 0.06]} />{barMaterial}</mesh>
        <mesh><boxGeometry args={[0.42, 0.1, 0.06]} />{barMaterial}</mesh>
      </group>
    </group>
  );
}

function BrowserCore({ palette }: { palette: ScenePalette }) {
  return (
    <group>
      {[0.18, 0.1, 0.02].map((depth, index) => (
        <mesh key={depth} position={[-index * 0.11, index * 0.1, -0.2 - index * 0.08]}>
          <boxGeometry args={[2.9, 1.72, depth]} />
          <meshStandardMaterial
            color={index === 0 ? palette.panel : palette.mint}
            transparent
            opacity={index === 0 ? 0.9 : 0.12}
            metalness={0.18}
            roughness={0.35}
          />
        </mesh>
      ))}

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.82, 0.12]} />
        <meshStandardMaterial
          color={palette.panel}
          emissive={palette.accent}
          emissiveIntensity={0.04}
          metalness={0.34}
          roughness={0.22}
          transparent
          opacity={0.94}
        />
      </mesh>
      <mesh position={[0, 0.68, 0.075]}>
        <boxGeometry args={[2.82, 0.28, 0.025]} />
        <meshBasicMaterial color={palette.panelEdge} transparent opacity={0.12} />
      </mesh>

      {[-1.16, -0.98, -0.8].map((x, index) => (
        <mesh key={x} position={[x, 0.69, 0.105]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color={[palette.magenta, palette.mint, palette.accent][index]} />
        </mesh>
      ))}

      <mesh position={[0.62, 0.69, 0.102]}>
        <boxGeometry args={[1.2, 0.07, 0.025]} />
        <meshBasicMaterial color={palette.accent} transparent opacity={0.35} />
      </mesh>

      <Monogram palette={palette} />

      <mesh position={[0, -0.62, 0.102]}>
        <boxGeometry args={[1.35, 0.045, 0.025]} />
        <meshBasicMaterial color={palette.mint} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, -0.73, 0.102]}>
        <boxGeometry args={[0.82, 0.035, 0.025]} />
        <meshBasicMaterial color={palette.magenta} transparent opacity={0.48} />
      </mesh>
    </group>
  );
}

function DeviceFrame({
  palette,
  position,
  rotation,
  type,
}: {
  palette: ScenePalette;
  position: [number, number, number];
  rotation: [number, number, number];
  type: 'desktop' | 'mobile';
}) {
  const isMobile = type === 'mobile';
  const width = isMobile ? 0.7 : 1.35;
  const height = isMobile ? 1.24 : 0.86;

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[width, height, 0.08]} />
        <meshStandardMaterial
          color={palette.panel}
          emissive={palette.accent}
          emissiveIntensity={0.05}
          metalness={0.26}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[0, 0.12, 0.052]}>
        <boxGeometry args={[width * 0.72, height * 0.4, 0.018]} />
        <meshBasicMaterial color={palette.accent} transparent opacity={0.22} />
      </mesh>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[-width * 0.18, -height * (0.17 + index * 0.1), 0.055]}>
          <boxGeometry args={[width * (0.38 + index * 0.08), 0.035, 0.018]} />
          <meshBasicMaterial color={index === 2 ? palette.magenta : palette.mint} transparent opacity={0.58} />
        </mesh>
      ))}
      {!isMobile && (
        <>
          <mesh position={[0, -height * 0.58, 0]}><boxGeometry args={[0.08, 0.22, 0.06]} /><meshBasicMaterial color={palette.panelEdge} /></mesh>
          <mesh position={[0, -height * 0.72, 0]}><boxGeometry args={[0.54, 0.05, 0.08]} /><meshBasicMaterial color={palette.panelEdge} /></mesh>
        </>
      )}
    </group>
  );
}

function ConnectionGraph({ palette }: { palette: ScenePalette }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(
      architectureNodes.flatMap(([x, y, z]) => [0, 0, 0.02, x, y, z]),
    );
    const buffer = new BufferGeometry();
    buffer.setAttribute('position', new BufferAttribute(positions, 3));
    return buffer;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={palette.accent} transparent opacity={0.3} />
    </lineSegments>
  );
}

function ArchitectureNode({
  index,
  palette,
  position,
}: {
  index: number;
  palette: ScenePalette;
  position: [number, number, number];
}) {
  const colors = [palette.accent, palette.mint, palette.magenta];
  const color = colors[index % colors.length];

  return (
    <group position={position}>
      <mesh rotation={[0.4, index * 0.7, 0.25]}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.42}
          metalness={0.55}
          roughness={0.2}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[0.34, 0.012, 8, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.52} />
      </mesh>
    </group>
  );
}

function DataPulse({
  delay,
  end,
  palette,
  reduceMotion,
}: {
  delay: number;
  end: [number, number, number];
  palette: ScenePalette;
  reduceMotion: boolean;
}) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current || reduceMotion) return;
    const progress = (clock.elapsedTime * 0.22 + delay) % 1;
    ref.current.position.set(end[0] * progress, end[1] * progress, end[2] * progress + 0.08);
    const scale = 0.7 + Math.sin(progress * Math.PI) * 0.5;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref} position={[end[0] * delay, end[1] * delay, end[2] * delay + 0.08]}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshBasicMaterial color={palette.mint} />
    </mesh>
  );
}

function SystemsCore({ palette, reduceMotion }: { palette: ScenePalette; reduceMotion: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current || reduceMotion) return;
    const targetX = pointer.y * 0.1;
    const targetY = pointer.x * 0.16;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * Math.min(delta * 2.4, 1);
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * Math.min(delta * 2.4, 1);
  });

  return (
    <group ref={groupRef} position={[1.7, -0.08, 0]} rotation={[0.05, -0.14, 0.02]} scale={0.92}>
      <ConnectionGraph palette={palette} />
      {architectureNodes.map((position, index) => (
        <ArchitectureNode index={index} key={position.join('-')} palette={palette} position={position} />
      ))}
      {architectureNodes.map((position, index) => (
        <DataPulse
          delay={index / architectureNodes.length}
          end={position}
          key={`pulse-${position.join('-')}`}
          palette={palette}
          reduceMotion={reduceMotion}
        />
      ))}
      <BrowserCore palette={palette} />
      <DeviceFrame
        palette={palette}
        position={[-2.52, -0.18, -0.26]}
        rotation={[0.02, 0.36, -0.06]}
        type="mobile"
      />
      <DeviceFrame
        palette={palette}
        position={[2.55, -0.08, -0.32]}
        rotation={[0.02, -0.34, 0.05]}
        type="desktop"
      />
    </group>
  );
}

function ParticleField({ palette, reduceMotion, theme }: { palette: ScenePalette; reduceMotion: boolean; theme: Theme }) {
  const ref = useRef<Points>(null);
  const geometry = useMemo(() => {
    const count = window.innerWidth < 640 ? 180 : 420;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const accents = [new Color(palette.accent), new Color(palette.mint), new Color(palette.magenta)];

    for (let index = 0; index < count; index += 1) {
      const radius = 3.5 + Math.random() * 5.5;
      const angle = Math.random() * Math.PI * 2;
      const stride = index * 3;
      const color = accents[index % accents.length];
      positions[stride] = Math.cos(angle) * radius;
      positions[stride + 1] = (Math.random() - 0.5) * 5;
      positions[stride + 2] = Math.sin(angle) * radius - 2;
      colors[stride] = color.r;
      colors[stride + 1] = color.g;
      colors[stride + 2] = color.b;
    }

    const buffer = new BufferGeometry();
    buffer.setAttribute('position', new BufferAttribute(positions, 3));
    buffer.setAttribute('color', new BufferAttribute(colors, 3));
    return buffer;
  }, [palette, theme]);

  useFrame(({ clock }) => {
    if (!ref.current || reduceMotion) return;
    ref.current.rotation.y = clock.elapsedTime * 0.018;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.16) * 0.025;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        blending={theme === 'dark' ? AdditiveBlending : NormalBlending}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.7 : 0.42}
        size={theme === 'dark' ? 0.025 : 0.03}
        transparent
        vertexColors
      />
    </points>
  );
}

function LightGrid({ palette, reduceMotion }: { palette: ScenePalette; reduceMotion: boolean }) {
  const gridRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!gridRef.current || reduceMotion) return;
    gridRef.current.position.z = -1.8 + Math.sin(clock.elapsedTime * 0.55) * 0.14;
  });

  return (
    <mesh ref={gridRef} position={[0, -2.25, -2.2]} rotation={[-Math.PI / 2.45, 0, 0]}>
      <planeGeometry args={[18, 18, 22, 22]} />
      <meshBasicMaterial color={palette.grid} wireframe transparent opacity={0.36} />
    </mesh>
  );
}

function SceneContent() {
  const { palette, reduceMotion, theme } = useScenePreferences();

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.55 : 1.35} />
      <pointLight position={[3, 2, 4]} intensity={theme === 'dark' ? 20 : 8} color={palette.accent} />
      <pointLight position={[-4, -1, 2]} intensity={theme === 'dark' ? 10 : 5} color={palette.magenta} />
      <ParticleField palette={palette} reduceMotion={reduceMotion} theme={theme} />
      <LightGrid palette={palette} reduceMotion={reduceMotion} />
      <SystemsCore palette={palette} reduceMotion={reduceMotion} />
    </>
  );
}

export default function FutureScene() {
  return (
    <div className="scene-shell" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.2, 7], fov: 47 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
