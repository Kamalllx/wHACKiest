"use client";

import * as THREE from "three";
import React, {
  Suspense,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";

// Slow Particles Component (very minimal and slow)
function SlowParticles({ count = 50 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      // Very slow speed - 10x slower than original
      const speed = 0.0003 + Math.random() / 3000;
      const xFactor = -40 + Math.random() * 80;
      const yFactor = -30 + Math.random() * 60;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      // Very slow animation
      t = particle.t += speed;
      const s = Math.max(0.3, Math.cos(t) * 0.5 + 0.5);

      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) * 0.3,
        yFactor + Math.sin((t / 10) * factor) * 0.3,
        zFactor + Math.cos((t / 10) * factor) * 0.2
      );
      dummy.scale.set(s * 0.2, s * 0.2, s * 0.2);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight
        ref={light}
        position={[0, 0, 20]}
        distance={60}
        intensity={2}
        color="#6366f1"
      />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.12, 0]} />
        <meshPhongMaterial color="#1e1b4b" opacity={0.4} transparent />
      </instancedMesh>
    </>
  );
}

// Main Text with mouse follow
function MainText({ hover }: { hover: (h: boolean) => void }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Subtle mouse follow
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        state.mouse.x * 1.5,
        0.03
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.mouse.y / 6,
        0.03
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        state.mouse.x / 8,
        0.03
      );
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group ref={ref}>
        <Text
          font="/fonts/Satoshi-Bold.woff"
          fontSize={4}
          color="#818cf8"
          anchorX="center"
          anchorY="middle"
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          wHACKiest
          <meshStandardMaterial
            color="#818cf8"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Text>
      </group>
    </Float>
  );
}

// Main WordEffect Component
export default function WordEffect() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = hovered ? "pointer" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.cursor = "auto";
      }
    };
  }, [hovered]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "250px",
        background: "transparent",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 75, position: [0, 0, 15] }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <fog attach="fog" args={["#0c0a1a", 30, 100]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#818cf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#c084fc" />
        <Suspense fallback={null}>
          <MainText hover={setHovered} />
        </Suspense>
        {/* Very few particles, super slow */}
        <SlowParticles count={isMobile ? 20 : 40} />
      </Canvas>
    </div>
  );
}
