import { Vector2, Raycaster } from "three";
import { useEffect, useState } from "react";
import {
  useFrame,
  useThree,
} from "@react-three/fiber";
export const RaycasterHelper = ({
  paintings = [],
  getActivePainting,
  noActivePainting,
}) => {
  const { scene, camera } = useThree();
  const [activePainting, setActivePainting] =
    useState(null);
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
      if (activePainting) {
        if (
          activePainting.name ===
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
        setActivePainting(null));
    }
  });
  return <></>;
};
