import { CameraControls, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Vector3 } from "three";
import animationData from "../assets/data/position.json";

//W PRZYPADKU ZMIANY JUŻ NA PRODUKCJE PRZEŁĄCZYĆ NA PERSPECTIVE CAMERA!!!!!!!!!!!!!!!!

const deg2rad = (degrees) => degrees * (Math.PI / 180);

const Camera = ({ handleFinishAnimation }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const cameraRef = useRef(null);

  useEffect(() => {
    camera.up = new Vector3(0, 1, 0);
    camera.position.set(-25.84, 6.19, 0.1);
    camera.rotation.set(0, -1.5, 0);
    let ctx = gsap.context(() => {
      const tlPosition = gsap.timeline({
        repeat: 0,
      });
      const tlRotation = gsap.timeline({
        repeat: 0,
        onComplete: completedFun,
      });
      if (camera) {
        animationData.newData.forEach((element) => {
          tlPosition.to(camera.position, {
            duration: element.time,
            repeat: 0,
            x: element.position.x,
            y: element.position.y,
            z: element.position.z,
            ease: "none",
          });
        });
        tlRotation.to(camera.rotation, {
          duration: 4.5,
          repeat: 0,
          x: 0,
          y: -2.6,
          z: 0,
          ease: "none",
        });
      }
      return () => ctx.revert();
    });
  }, []);

  const completedFun = () => {
    handleFinishAnimation();
  };

  const runAnimation = (camera) => {};

  return (
    <PerspectiveCamera
      ref={cameraRef}
      fov={90}
      near={0.1}
      rotation={[0, -1.06, 0]}
      position={[-25.84, 6.19, 0.1]}
      far={70}
      args={[camera, domElement]}
    />
  );
};

export default Camera;
