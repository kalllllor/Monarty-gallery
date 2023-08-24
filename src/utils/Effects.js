import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={1.5} luminanceSmoothing={0.5} />
    </EffectComposer>
  );
};

export default Effects;
