import { Vector2, Raycaster } from "three";
import {
  useEffect,
  useState,
  useRef,
} from "react";
import {
  useFrame,
  useThree,
} from "@react-three/fiber";

export const RaycasterHelper = ({
  paintings = [],
  getActivePainting,
  noActivePainting,
  clickActivePainting,
}) => {
  const { scene, camera } = useThree();
  const [activePainting, _setActivePainting] =
    useState(null);
  const myStateRef = useRef(activePainting);
  const setActivePainting = (data) => {
    myStateRef.current = data;
    _setActivePainting(data);
  };
  const [isPaintingActive, setIsPaintingActive] =
    useState(false);
  const raycaster = new Raycaster();
  raycaster.far = 2;

  useFrame((state, delta, xrFrame) => {
    raycaster.setFromCamera(
      new Vector2(),
      camera
    );
    const intersects = raycaster.intersectObjects(
      paintings.length && paintings
    );
    for (let i = 0; i < paintings.length; i++) {
      paintings[i].material.color.set(0xffffff);
    }

    if (intersects.length) {
      setIsPaintingActive(true);
      if (myStateRef.current) {
        if (
          myStateRef.current.name ===
          intersects[0].object.name
        ) {
          return;
        }
      } else {
        setActivePainting(intersects[0].object);
        getActivePainting(intersects[0].object);
      }
    } else {
      isPaintingActive &&
        (noActivePainting(),
        setIsPaintingActive(false),
        setActivePainting(null),
        getActivePainting(null));
    }
  });
  const handleClick = () => {
    clickActivePainting();
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
  }, []);

  return <></>;
};
