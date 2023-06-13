import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lights() {
  const light = useRef();

  return (
    <>
      <directionalLight
        ref={light}
        position={[0, 1, 0]}
        intensity={0.3}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={0.2} />
    </>
  );
}
