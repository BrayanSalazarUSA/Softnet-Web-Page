'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  vec4,
  pass,
  mix,
  add,
  max
} from 'three/tsl';

// Original image assets for the blob shape
const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

// PostProcessing removed to fix WebGPU transparent background issue

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Показываем изображение после загрузки текстур
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));
    const redDots = dot.mul(flow);

    // Invert the original image so the white blob becomes dark gray
    const invertedMap = vec3(1.0).sub(tMap.rgb);
    
    // Calculate alpha: pure black in original image becomes transparent, blob becomes opaque
    const luminance = tMap.r.mul(0.299).add(tMap.g.mul(0.587)).add(tMap.b.mul(0.114));
    const baseAlpha = smoothstep(0.05, 0.15, luminance); // Crop the black background smoothly

    // Restrict the red dots scanner strictly to the shape of the blob so it doesn't draw a square
    const activeRedDots = redDots.mul(baseAlpha).mul(4.0); // Boosted red illumination

    // Mix the dark blob with the red scanner dots
    const rgb = mix(invertedMap, vec3(1.0, 0.0, 0.0), activeRedDots);

    // Only draw where the blob is
    const finalAlpha = baseAlpha;

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: vec4(rgb, finalAlpha),
      transparent: true,
      opacity: 0,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    // Плавное появление
    if (meshRef.current && 'material' in meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(
          mat.opacity,
          visible ? 1 : 0,
          0.07
        );
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 1.2;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export const HeroFuturistic = () => {
  return (
    <div className="w-full h-[500px] lg:h-full relative overflow-hidden flex items-center justify-center bg-transparent">
      <Canvas
        flat
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer({ ...props, alpha: true } as any);
          await renderer.init();
          return renderer;
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
