"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2
      meshRef.current.rotation.x = time * 0.1
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -time * 0.3
      wireframeRef.current.rotation.x = -time * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5
      ringRef.current.rotation.x = Math.PI / 3
    }
  })

  return (
    <group>
      {/* Core Glow */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#D9FF66"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#D9FF66"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Wireframe Shell */}
      <Sphere ref={wireframeRef} args={[1.3, 32, 32]}>
        <meshStandardMaterial
          color="#D9FF66"
          wireframe
          transparent
          opacity={0.1}
          emissive="#D9FF66"
          emissiveIntensity={1}
        />
      </Sphere>

      {/* Engineering Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#D9FF66" emissive="#D9FF66" emissiveIntensity={2} />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.005, 16, 100]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>

      <pointLight position={[0, 0, 0]} intensity={2} color="#D9FF66" />
    </group>
  )
}

export function CyberOrb() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00E5FF" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Orb />
        </Float>
      </Canvas>
      
      {/* Background Radial Glow to blend with the scene */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,255,102,0.1),transparent_70%)] pointer-events-none" />
    </div>
  )
}
