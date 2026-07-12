import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Line, OrbitControls, Sparkles } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { LocaleContent } from '@/content/schema';
import type { Section } from '@/data/site';

interface Props {
  locale: LocaleContent;
  links: Record<Section, string>;
  contactUrl: string;
}

const nodePalette: Record<Section, { color: string; emissive: string; metalness: number; roughness: number }> = {
  about: { color: '#5fae9f', emissive: '#153f3a', metalness: .08, roughness: .38 },
  research: { color: '#3f9186', emissive: '#0c3936', metalness: .05, roughness: .24 },
  publications: { color: '#a9c7bd', emissive: '#1c3431', metalness: .18, roughness: .52 },
  ventures: { color: '#8d846a', emissive: '#3c3220', metalness: .54, roughness: .31 },
  honors: { color: '#c9a967', emissive: '#493612', metalness: .38, roughness: .28 },
  global: { color: '#326b7a', emissive: '#102b35', metalness: .15, roughness: .34 },
  life: { color: '#8aa59c', emissive: '#263932', metalness: .04, roughness: .48 },
  contact: { color: '#77e0cb', emissive: '#1b6259', metalness: .12, roughness: .18 },
};

const sections = Object.keys(nodePalette) as Section[];

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}

function Portrait({ locale }: { locale: LocaleContent }) {
  return (
    <Html center transform={false} zIndexRange={[20, 0]}>
      <div className="portrait-core" aria-label="Yihao Bian portrait placeholder">
        <div className="portrait-rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="portrait-initials" aria-hidden="true">YB</div>
        <div className="portrait-copy">
          <strong>Yihao Bian</strong><span>卞逸豪</span>
          <small>{locale.home.subtitle}</small>
        </div>
      </div>
    </Html>
  );
}

interface OrbitNodeProps {
  section: Section;
  label: string;
  position: [number, number, number];
  index: number;
  dimmed: boolean;
  selected: boolean;
  onSelect: (section: Section, index: number) => void;
}

function OrbitNode({ section, label, position, index, dimmed, selected, onSelect }: OrbitNodeProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const palette = nodePalette[section];

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const target = hovered || selected ? 1.22 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(target, target, target), 1 - Math.pow(.001, delta));
    mesh.current.rotation.y += delta * (.13 + index * .007);
    mesh.current.rotation.x += delta * .04;
  });

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        onPointerEnter={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = ''; }}
        onClick={(event) => { event.stopPropagation(); onSelect(section, index); }}
      >
        <icosahedronGeometry args={[section === 'contact' ? .5 : .42, 4]} />
        <meshPhysicalMaterial
          color={palette.color}
          emissive={palette.emissive}
          emissiveIntensity={hovered || selected ? .85 : .35}
          metalness={palette.metalness}
          roughness={palette.roughness}
          transmission={section === 'about' ? .22 : .05}
          thickness={.8}
          transparent
          opacity={dimmed ? .38 : .94}
        />
      </mesh>
      {section === 'research' && <Sparkles count={10} scale={.7} size={1.4} speed={.15} color="#bceee2" />}
      {section === 'honors' && <mesh rotation-x={Math.PI / 2}><torusGeometry args={[.62, .012, 6, 64]} /><meshBasicMaterial color="#c9a967" transparent opacity={.6} /></mesh>}
      {section === 'global' && <mesh rotation-x={Math.PI / 2}><torusGeometry args={[.48, .008, 6, 48]} /><meshBasicMaterial color="#6eacb9" transparent opacity={.42} /></mesh>}
      <Html center position={[0, -.74, 0]} zIndexRange={[18, 0]}>
        <button
          className="node-label"
          data-active={hovered || selected ? 'true' : 'false'}
          data-dimmed={dimmed ? 'true' : 'false'}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onClick={() => onSelect(section, index)}
          aria-label={label}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>{label}
        </button>
      </Html>
    </group>
  );
}

const orbitPositions: Record<Section, [number, number, number]> = {
  about: [-3.2, 1.5, -.3], research: [-1.4, 2.35, -.9], publications: [1.45, 2.2, -.4], ventures: [3.25, 1.05, -.7],
  honors: [3.15, -1.35, -.2], global: [1.25, -2.2, -.8], life: [-1.4, -2.25, -.35], contact: [-3.2, -1.1, -.75],
};

function CameraRig({ introDone, selected }: { introDone: boolean; selected: number | null }) {
  const { camera, size } = useThree();
  const start = useRef(performance.now());

  useFrame(() => {
    const elapsed = (performance.now() - start.current) / 1000;
    const introT = introDone ? 1 : Math.min(elapsed / 2.5, 1);
    const eased = 1 - Math.pow(1 - introT, 3);
    const finalZ = size.width < 760 ? 14.5 : size.width < 1180 ? 11.8 : 9.8;
    const targetZ = finalZ + 9 - eased * 9;
    const selectedSection = selected === null ? null : sections[selected];
    const selectedPos = selectedSection ? orbitPositions[selectedSection] : null;
    const selectedZ = size.width < 760 ? 13 : size.width < 1180 ? 9.8 : 7.2;
    const goal = selectedPos ? new THREE.Vector3(selectedPos[0] * .35, selectedPos[1] * .35, selectedZ) : new THREE.Vector3(0, 0, targetZ);
    camera.position.lerp(goal, selectedPos ? .075 : .12);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Tunnel({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current || !active) return;
    group.current.children.forEach((child, index) => {
      child.position.z += delta * (5.3 - index * .18);
      if (child.position.z > 7) child.position.z -= 28;
    });
  });
  return (
    <group ref={group}>
      {Array.from({ length: 7 }, (_, index) => <mesh key={index} position={[0, 0, -18 + index * 3.7]} rotation={[0, 0, index * .21]}><torusGeometry args={[2.2 + index * .08, .018, 8, 96]} /><meshBasicMaterial color={index % 3 === 0 ? '#c9a967' : '#5ac9b6'} transparent opacity={active ? .28 : .04} /></mesh>)}
    </group>
  );
}

function ParticleField({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      data[index * 3] = (Math.random() - .5) * 24;
      data[index * 3 + 1] = (Math.random() - .5) * 16;
      data[index * 3 + 2] = (Math.random() - .5) * 28;
    }
    return data;
  }, [count]);
  useFrame((_, delta) => { if (ref.current && !reduced) ref.current.rotation.z += delta * .003; });
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#a1d9cf" size={.025} transparent opacity={.46} sizeAttenuation /></points>;
}

function NexusScene({ locale, reduced, introDone, selected, onSelect }: { locale: LocaleContent; reduced: boolean; introDone: boolean; selected: number | null; onSelect: (section: Section, index: number) => void }) {
  const orbit = useRef<THREE.Group>(null);
  const { size } = useThree();
  const quality = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency ?? 8) <= 4 ? 'low' : 'high';
  const particleCount = quality === 'low' ? 140 : 520;

  useFrame((state, delta) => {
    if (orbit.current && !reduced && introDone) orbit.current.rotation.z += delta * .012;
    if (!reduced && introDone) state.camera.position.x += Math.sin(state.clock.elapsedTime * .11) * .0008;
  });

  return (
    <>
      <color attach="background" args={['#061014']} />
      <fog attach="fog" args={['#061014', 8, 28]} />
      <ambientLight intensity={.45} />
      <pointLight position={[2, 4, 6]} color="#91ead8" intensity={22} distance={18} />
      <pointLight position={[-5, -2, 3]} color="#2e6e79" intensity={13} distance={16} />
      <Tunnel active={!introDone && !reduced} />
      <ParticleField count={particleCount} reduced={reduced} />
      <group ref={orbit} visible={introDone || reduced} scale={size.width < 760 ? [.72, .78, 1] : size.width < 1180 ? [.9, .94, 1] : [1, 1, 1]}>
        <mesh rotation={[1.03, .1, .18]}><torusGeometry args={[3.3, .007, 4, 160]} /><meshBasicMaterial color="#5da99d" transparent opacity={.18} /></mesh>
        <mesh rotation={[1.22, -.25, -.28]}><torusGeometry args={[3.48, .005, 4, 160]} /><meshBasicMaterial color="#b79b62" transparent opacity={.1} /></mesh>
        {sections.map((section, index) => <Line key={`line-${section}`} points={[[0, 0, 0], orbitPositions[section]]} color={selected === index ? '#85e9d5' : '#315f5b'} lineWidth={selected === index ? 1.2 : .45} transparent opacity={selected === null || selected === index ? .42 : .12} />)}
        {sections.map((section, index) => <OrbitNode key={section} section={section} label={locale.nav[section]} position={orbitPositions[section]} index={index} selected={selected === index} dimmed={selected !== null && selected !== index} onSelect={onSelect} />)}
        <Portrait locale={locale} />
      </group>
      <CameraRig introDone={introDone || reduced} selected={selected} />
      <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={.08} rotateSpeed={.16} minPolarAngle={Math.PI * .43} maxPolarAngle={Math.PI * .57} />
    </>
  );
}

export default function NexusExperience({ locale, links, contactUrl }: Props) {
  const [mounted, setMounted] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('yihao-reduced-motion');
    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowMode = new URLSearchParams(window.location.search).get('mode') === '2d';
    const canUseWebgl = webglAvailable() && !lowMode;
    setReduced(stored === 'true' || prefers);
    setWebgl(canUseWebgl);
    setMounted(true);
    if (canUseWebgl) document.documentElement.classList.add('experience-mounted');
    const onVisibility = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    return () => { document.documentElement.classList.remove('experience-mounted'); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  useEffect(() => {
    if (!mounted || !webgl) return;
    if (reduced) { setProgress(100); setLoadingDone(true); setIntroDone(true); return; }
    const started = performance.now();
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - started;
      setProgress(Math.min(100, Math.round(elapsed / 7)));
      if (elapsed > 700) window.clearInterval(timer);
    }, 35);
    const done = window.setTimeout(() => { setProgress(100); setLoadingDone(true); window.setTimeout(() => setIntroDone(true), 1800); }, 720);
    return () => { clearInterval(timer); clearTimeout(done); };
  }, [mounted, webgl, reduced]);

  useEffect(() => {
    if (selected === null) return;
    const section = sections[selected];
    const timer = window.setTimeout(() => { window.location.assign(links[section]); }, reduced ? 80 : 620);
    return () => clearTimeout(timer);
  }, [selected, links, reduced]);

  const selectNode = (section: Section, index: number) => {
    if (selected !== null) return;
    setSelected(index);
    window.history.replaceState({ section }, '', window.location.href);
  };

  const toggleReduced = () => {
    const value = !reduced;
    setReduced(value);
    localStorage.setItem('yihao-reduced-motion', String(value));
    if (value) setIntroDone(true);
  };

  const switchTo2D = () => {
    document.documentElement.classList.remove('experience-mounted');
    setWebgl(false);
    const url = new URL(window.location.href);
    url.searchParams.set('mode', '2d');
    window.history.replaceState({}, '', url);
  };

  if (!mounted || !webgl) return null;

  return (
    <div className="experience-layer" aria-label={locale.home.canvasLabel}>
      {!loadingDone && <div className="loading-screen" role="status" aria-live="polite"><div className="loading-wordmark"><span>YIHAO</span><strong>NEXUS</strong></div><div className="loading-track"><span style={{ width: `${progress}%` }} /></div><div className="loading-meta"><span>{locale.home.loading}</span><b>{progress}%</b></div><button className="skip-button" onClick={() => { setProgress(100); setLoadingDone(true); setIntroDone(true); }}>{locale.home.skip}</button></div>}
      <Canvas
        dpr={typeof window !== 'undefined' && window.innerWidth < 760 ? [1, 1.35] : [1, 1.75]}
        camera={{ position: [0, 0, 18], fov: 48, near: .1, far: 60 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        frameloop={visible ? 'always' : 'never'}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (event) => { event.preventDefault(); document.documentElement.classList.remove('experience-mounted'); setWebgl(false); }, { once: true });
        }}
      >
        <Suspense fallback={null}><NexusScene locale={locale} reduced={reduced} introDone={introDone} selected={selected} onSelect={selectNode} /></Suspense>
      </Canvas>
      {introDone && <div className="experience-instruction">{locale.home.explore}</div>}
      <div className="experience-controls"><button onClick={toggleReduced}>{reduced ? locale.home.restoreMotion : locale.home.reduceMotion}</button><button onClick={switchTo2D}>{locale.home.twoD}</button><a href={contactUrl}>{locale.home.quickContact}</a></div>
    </div>
  );
}
