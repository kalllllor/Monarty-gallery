import {
  SSR,
  DepthOfField,
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.8}
        luminanceSmoothing={0}
      />
    </EffectComposer>
  );
}
