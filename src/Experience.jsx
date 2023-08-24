import { Gallery } from "./assets/model/Gallery";
import Camera from "./components/Camera";
import Lights from "./components/Lights";
import Walls from "./components/Walls";
import BaseCharacter from "./UI/BaseCharacter";
import * as THREE from "three";
import { useEffect, Suspense, useState, useRef } from "react";
import { Physics, Debug } from "@react-three/cannon";
import { PointerLockControls, Html, Environment, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "./utils/Loader";
import Effects from "./components/Effects";
import Lockscreen from "./components/Lockscreen";

import "./style.css";

export default function Experience() {
  const [isAnimationActive, toggleAnimationActive] = useState(true);
  const pointerRef = useRef();
  const handleFinishAnimationCallback = () => {
    toggleAnimationActive(false);
  };

  const [isActivePainting, setIsActivePainting] = useState(false);

  const [activePainting, _setActivePainting] = useState(null);
  const activePaintingRef = useRef(activePainting);
  const setActivePainting = (data) => {
    activePaintingRef.current = data;
    _setActivePainting(data);
  };
  const getActivePaintingCallBack = (painting) => {
    if (painting) {
      setActivePainting(painting);
    } else {
      setActivePainting(null);
    }
  };

  const clickActivePaintingCallback = () => {
    if (activePaintingRef.current) {
      pointerRef.current.unlock();
      setIsActivePainting(true);
    }
  };

  const deactivePaintingCallback = () => {
    setTimeout(() => {
      setIsActivePainting(false);
      pointerRef.current.lock();
    }, [150]);
  };

  return (
    <>
      <Lockscreen isActivePainting={isActivePainting} deactivePainting={deactivePaintingCallback} activePainting={activePaintingRef.current} />
      <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, toneMapping: THREE.NoToneMapping }} linear>
        <Suspense fallback={<Loader />}>
          <Effects />
          <Physics gravity={[0, -100, 0]}>
            <Walls />
            <Gallery
              getActivePainting={getActivePaintingCallBack}
              clickActivePainting={clickActivePaintingCallback}
              isActivePainting={isActivePainting}
            />
            {/* <Camera isEditing /> */}

            {isAnimationActive ? (
              <Camera handleFinishAnimation={handleFinishAnimationCallback} />
            ) : (
              <>
                <BaseCharacter controls position={[-7.364, 2.159, 5.78]} args={[1, 1]} color="yellow" />
                <PointerLockControls ref={pointerRef} />
              </>
            )}

            {/* <PointerLockControls ref={pointerRef} />

            <BaseCharacter controls position={[-7.364, 2.159, 5.78]} args={[0.5, 16, 16]} color="yellow" /> */}

            <Lights />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}
