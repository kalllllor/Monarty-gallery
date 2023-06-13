import { Gallery } from "./assets/model/Gallery";
import Camera from "./components/Camera";
import Lights from "./components/Lights";
import Walls from "./components/Walls";
import BaseCharacter from "./UI/BaseCharacter";
import {
  useEffect,
  Suspense,
  useState,
} from "react";
import {
  Physics,
  Debug,
} from "@react-three/cannon";
import {
  PointerLockControls,
  Html,
  Environment,
} from "@react-three/drei";
import {
  Canvas,
  useThree,
} from "@react-three/fiber";
import Loader from "./utils/Loader";
import Effects from "./components/Effects";

import "./style.css";

export default function Experience() {
  const [
    isAnimationActive,
    toggleAnimationActive,
  ] = useState(true);

  const handleFinishAnimationCallback = () => {
    toggleAnimationActive(false);
  };

  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Effects />
          <Physics gravity={[0, -1000, 0]}>
            <Environment preset="city" />
            <Walls />
            <Gallery />
            {isAnimationActive ? (
              <Camera
                handleFinishAnimation={
                  handleFinishAnimationCallback
                }
              />
            ) : (
              <>
                <PointerLockControls />
                <BaseCharacter
                  controls
                  position={[-7.364, 2.159, 5.78]}
                  args={[1, 1]}
                  color="yellow"
                />
              </>
            )}
            {/* <PointerLockControls />
          <BaseCharacter
            controls
            position={[-7.364, 2.159, 5.78]}
            args={[0.5, 1]}
            color="yellow"
          /> */}
            {/* <Camera /> */}
            <Lights />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}
