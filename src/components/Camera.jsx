import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import animationData from "../assets/data/position.json";

//W PRZYPADKU ZMIANY JUŻ NA PRODUKCJE PRZEŁĄCZYĆ NA PERSPECTIVE CAMERA!!!!!!!!!!!!!!!!

const deg2rad = (degrees) =>
  degrees * (Math.PI / 180);

const Camera = ({ handleFinishAnimation }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const cameraRef = useRef(null);

  useEffect(() => {
    camera.up = new Vector3(0, 1, 0);
    camera.position.set(-10.628, 1.159, -1.913);
    runAnimation(camera);
  }, []);

  const completedFun = () => {
    handleFinishAnimation();
  };

  const runAnimation = (camera) => {
    const tlPosition = gsap.timeline({
      repeat: 0,
    });
    const tlRotation = gsap.timeline({
      repeat: 0,
      onComplete: completedFun,
    });
    if (camera) {
      animationData.data.forEach((element) => {
        tlPosition.to(camera.position, {
          duration: element.time,
          repeat: 0,
          x: element.position.x,
          y: element.position.y,
          z: element.position.z,
          ease: "none",
        });

        tlRotation.to(camera.rotation, {
          duration: element.time,
          repeat: 0,
          x: element.rotation.x,
          y: element.rotation.y,
          z: element.rotation.z,
          ease: "none",
        });
      });
    }
  };

  return (
    <PerspectiveCamera
      ref={cameraRef}
      fov={90}
      near={0.1}
      position={[-10.628, 1.159, -1.913]}
      far={70}
      args={[camera, domElement]}
    />
  );
};

export default Camera;
