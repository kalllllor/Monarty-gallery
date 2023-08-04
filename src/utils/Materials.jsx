import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import * as THREE from "three";

const options = {
  enableSwoopingCamera: false,
  enableRotation: false,
  color: 0xffffff,
  metalness: 0,
  roughness: 0.01,
  transmission: 1,
  ior: 1.5,
  reflectivity: 0.1,
  thickness: 1.5,
  envMapIntensity: 2.5,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  normalScale: 0.3,
  clearcoatNormalScale: 0.2,
  normalRepeat: 5,
  bloomThreshold: 0.85,
  bloomStrength: 0.35,
  bloomRadius: 0.33,
};

//DREWNIANA PODLOGA
export const FloorMaterial = () => {
  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_COL_VAR1_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_NRM_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_GLOSS_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_REFL_3K.jpg",
  ]);
  const scale = 1;
  colorMap.repeat.set(scale, scale);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(scale, scale);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(scale, scale);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  aoMap.repeat.set(scale, scale);
  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;

  return <meshStandardMaterial color="#aaaaaa" map={colorMap} normalMap={normalMap} roughnessMap={roughnessMap} aoMap={aoMap} />;
};

//METALOWE CZESCI PODLOGI

export const FloorMetalMaterial = () => {
  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    "/textures/texture_seamless/podloga-metal/MetalCastIron001_REFL_3K_SPECULAR.jpg",
    "/textures/texture_seamless/podloga-metal/MetalCastIron001_NRM_3K_SPECULAR.jpg",
    "/textures/texture_seamless/podloga-metal/MetalStainlessSteelCast002_GLOSS_3K_SPECULAR.jpg",
    "/textures/texture_seamless/podloga-metal/MetalCastIron001_GLOSS_3K_SPECULAR.jpg",
  ]);

  colorMap.repeat.set(2, 2);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(2, 2);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(2, 2);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  aoMap.repeat.set(2, 2);
  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;

  return <meshStandardMaterial color="#888888" map={colorMap} normalMap={normalMap} roughnessMap={roughnessMap} aoMap={aoMap} />;
};

//SCIANY

export const WallMaterial = () => {
  const scale = 0.821;
  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    "/textures/texture_seamless/sciany-zewnetrzne/ConcreteCladdingSemiGlossy001_COL_VAR1_3K_SPECULAR.jpg",
  ]);

  colorMap.repeat.set(scale, scale);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;

  return <meshStandardMaterial color="#ffffff" map={colorMap} />;
};

//DREWNIANE LISTWY
export const BaseboardMaterial = () => {
  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    "/textures/texture_seamless/drewniane-listwy/WoodFine008_COL_3K.jpg",
    "/textures/texture_seamless/drewniane-listwy/WoodFine008_NRM_3K.jpg",
    "/textures/texture_seamless/drewniane-listwy/WoodFine008_GLOSS_3K.jpg",
    "/textures/texture_seamless/drewniane-listwy/WoodFine008_REFL_3K.jpg",
  ]);

  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;

  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;

  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;

  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;

  return <meshStandardMaterial color="#ffffff" map={colorMap} normalMap={normalMap} roughnessMap={roughnessMap} aoMap={aoMap} />;
};

export const StuccoMaterial = ({ index }) => {
  const [colorMap] = useLoader(TextureLoader, [`/textures/baked-textures/stucco_${index}.jpg`]);

  colorMap.flipY = false;
  return <meshStandardMaterial color="#eeeeee" map={colorMap} />;
};

export const AzurMaterial = () => {
  const [colorMap, alphaMap] = useLoader(TextureLoader, [`/textures/baked-textures/azur.png`, `/textures/baked-textures/azur_alphamap.jpg`]);

  colorMap.repeat.set(1, 1);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;

  alphaMap.repeat.set(1, 1);
  alphaMap.wrapS = THREE.RepeatWrapping;
  alphaMap.wrapT = THREE.RepeatWrapping;
  return <meshStandardMaterial map={colorMap} alphaMap={alphaMap} alphaTest={0.5} />;
};

export const GlassMaterial = () => {
  const [normalMap] = useLoader(TextureLoader, ["/textures/others/normal.jpg"]);

  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(options.normalRepeat, options.normalRepeat);

  const normalScale = new THREE.Vector2(options.normalScale);

  const clearcoatNormalScale = new THREE.Vector2(options.clearcoatNormalScale);

  return (
    <meshPhysicalMaterial
      color="#aaaaaa"
      metalness={options.metalness}
      roughness={options.roughness}
      transmission={options.transmission}
      ior={options.ior}
      reflectivity={options.reflectivity}
      envMapIntensity={options.envMapIntensity}
      clearcoat={options.clearcoat}
      clearcoatRoughness={options.clearcoatRoughness}
      normalScale={normalScale}
      normalMap={normalMap}
      clearcoatNormalMap={normalMap}
      clearcoatNormalScale={clearcoatNormalScale}
    />
  );
};

export const FrameMaterial = ({ index }) => {
  const [colorMap] = useLoader(TextureLoader, [`/textures/baked-textures/frame_${index}.jpg`]);

  colorMap.flipY = false;
  return <meshStandardMaterial emissiveIntensity={0.3} map={colorMap} />;
};

export const PaintingMaterial = ({ index }) => {
  const [colorMap] = useLoader(TextureLoader, [`/textures/baked-textures/${index}-painting.jpg`]);

  return <meshStandardMaterial map={colorMap} color="#000000" />;
};

export const EmissiveMaterial = ({ value = 1 }) => {
  const emissiveColor = {
    isColor: true,
    r: value,
    g: value,
    b: value,
  };

  return <meshStandardMaterial emissive={emissiveColor} emissiveIntensity={5} toneMapped={false} />;
};

export const SculptureMaterial = () => {
  const [colorMap] = useLoader(TextureLoader, [`/textures/baked-textures/rzezba.jpg`]);

  colorMap.flipY = false;
  return <meshStandardMaterial map={colorMap} />;
};

export const BackgroundMaterial = () => {
  const [colorMap] = useLoader(TextureLoader, ["/textures/others/greenwich-park-03-4k-min.jpg"]);
  colorMap.flipY = false;
  return <meshStandardMaterial map={colorMap} color="#ffffff" />;
};

export const HalfInfinityFloor = () => {
  const [alphaMap, colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    `/textures/baked-textures/infinity-floor_3_alphamap.jpg`,
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_COL_VAR1_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_NRM_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_GLOSS_3K.jpg",
    "/textures/texture_seamless/podloga_jodelka/WoodFlooring037_REFL_3K.jpg",
  ]);

  alphaMap.flipY = false;
  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;
  aoMap.flipY = false;

  return (
    <meshStandardMaterial
      alphaMap={alphaMap}
      alphaTest={0.5}
      color="#aaaaaa"
      map={colorMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={aoMap}
    />
  );
};

export const InfinityWallMaterial = () => {
  const [colorMap] = useLoader(TextureLoader, [`/textures/baked-textures/infinity-walls-baked.jpg`]);
  colorMap.flipY = false;
  return <meshStandardMaterial color="#aaaaaa" map={colorMap} />;
};
