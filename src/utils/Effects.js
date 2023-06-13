import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300}
      />
    </EffectComposer>
  );
};

export default Effects;
