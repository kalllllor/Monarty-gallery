import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.5}
        luminanceSmoothing={1.5}
      />
    </EffectComposer>
  );
};

export default Effects;
