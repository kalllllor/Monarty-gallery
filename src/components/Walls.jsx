import {
  useBox,
  usePlane,
} from "@react-three/cannon";

const Walls = ({
  scale = 0.9,
  transparent = true,
}) => {
  return (
    <>
      <Floor />
      <Cube
        position={[0, 1, 0]}
        scale={[0.3, 2, 2 * scale]}
      />
      <Cube
        position={[0, 1, -7.5]}
        scale={[0.3, 2, 9 * scale]}
      />
      <Cube
        position={[0, 1, 7.5]}
        scale={[0.3, 2, 9 * scale]}
      />
      <Cube
        position={[-1.5, 1, 0]}
        scale={[0.3, 2, 7 * scale]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cube
        position={[-5.5, 1, -4]}
        scale={[0.3, 2, 20 * scale]}
        rotation={[0, Math.PI / 21, 0]}
      />
      <Cube
        position={[4.5, 1, 0]}
        scale={[0.3, 2, 1 * scale]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cube
        position={[5, 1, 0]}
        scale={[0.3, 2, 14 * scale]}
      />
      <Cube
        position={[8.8, 1, -7]}
        scale={[0.3, 2, 14 * scale]}
      />
      <Cube
        position={[7.8, 1, 6.6]}
        scale={[0.3, 2, 15 * scale]}
        rotation={[0, -Math.PI / 25, 0]}
      />
      <Cube
        position={[-1, 1, 13.9]}
        scale={[0.3, 2, 16 * scale]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cube
        position={[-9, 1, 6.5]}
        scale={[0.3, 2, 15 * scale]}
        rotation={[0, -0.01, 0]}
      />
      <Cube
        position={[0, 1, -13.8]}
        scale={[0.3, 2, 20 * scale]}
        rotation={[0, 1.57, 0]}
      />
      <Cube
        position={[-12.5, 1, -0.6]}
        scale={[0.3, 2, 7.3 * scale]}
        rotation={[0, 1.57, 0]}
      />
      <Cube
        position={[-13, 1, -7.3]}
        scale={[0.3, 2, 15 * scale]}
        rotation={[0, -0.44, 0]}
      />
      <Cube
        position={[-6.3, 1, 11.3]}
        scale={[1.2, 2, 1.2 * scale]}
        rotation={[0, -0.45, 0]}
      />
    </>
  );
};

const Cube = ({ position, scale, rotation }) => {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 0,
    rotation: rotation,
    position: position,
    args: scale,
  }));

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial
        transparent
        opacity={0}
      />
    </mesh>
  );
};

const Floor = ({
  scale = 100,
  position = [0, 0, 0],
}) => {
  const [ref] = usePlane((index) => ({
    type: "Static",
    mass: 0,
    rotation: [Math.PI / -2, 0, 0],
    position: position,
    scale: scale,
  }));

  return (
    <mesh ref={ref} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial
        transparent
        opacity={0}
      />
    </mesh>
  );
};

export default Walls;
