import React, { useRef, useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import {
  FloorMaterial,
  FloorMetalMaterial,
  WallMaterial,
  BakedWallMaterial,
  BaseboardMaterial,
  StuccoMaterial,
  AzurMaterial,
  GlassMaterial,
  FrameMaterial,
  PaintingMaterial,
  EmissiveMaterial,
  SculptureMaterial,
  BackgroundMaterial,
  InfinityWallMaterial,
} from "../../utils/Materials";
import { RaycasterHelper } from "../../utils/Raycaster";

function useArrayRef() {
  const refs = [];
  return [refs, (el) => el && refs.push(el)];
}

const emissiveColor = {
  highlight: {
    isColor: true,
    r: 1.2,
    g: 1.2,
    b: 1.2,
  },
  normal: {
    isColor: true,
    r: 0,
    g: 0,
    b: 0,
  },
};

export function Gallery({ getActivePainting, clickActivePainting, isActivePainting }) {
  const { nodes } = useGLTF("/gallery.glb");
  const [paintings, setPaintings] = useState([]);
  const [frames, setFrames] = useState([]);
  const [elements, ref] = useArrayRef();
  const groupRef = useRef();

  useEffect(() => {
    groupRef.current.children &&
      groupRef.current.traverse(function (child) {
        if (child.name.includes("obraz") || child.name.includes("rzezba")) {
          paintings.push(child);
        } else if (child.name.includes("ramka")) {
          frames.push(child);
        }
      });
    setPaintings(paintings);
  }, []);

  const getActivePaintingCallback = (painting) => {
    getActivePainting(painting);
    if (painting) {
      if (painting.name !== "rzezba") {
        const paintingNumber = painting.name.replace(/\D/g, "");

        const activeFrame = frames.find((frame) => frame.name.replace(/\D/g, "") === paintingNumber);
        activeFrame.material.emissive = emissiveColor.highlight;
      }

      for (const element of elements) {
        element.style.display = "none";
        if (element.parentElement.className === painting.name) element.style.display = "block";
      }
    }
  };

  const noActivePaintingCallback = () => {
    getActivePainting(null);
    for (const element of elements) {
      element.style.display = "none";
    }

    for (const element of frames) {
      element.material.emissive = emissiveColor.normal;
    }
  };

  const clickActivePaintingCallback = () => {
    for (const element of elements) {
      element.style.display = "none";
    }
    clickActivePainting();
  };

  return (
    <>
      <RaycasterHelper
        paintings={paintings}
        getActivePainting={getActivePaintingCallback}
        noActivePainting={noActivePaintingCallback}
        clickActivePainting={clickActivePaintingCallback}
      />
      <group ref={groupRef} dispose={null}>
        <mesh geometry={nodes.stucco_4.geometry} name="stucco_4" position={[0.947, 2.016, 0.002]}>
          <StuccoMaterial index={4} />
        </mesh>
        <mesh geometry={nodes.stucco_1.geometry} name="stucco_1" position={[-0.057, 2.027, -3.5]}>
          <StuccoMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.stucco_3.geometry} name="stucco_3" position={[5.047, 1.857, 0.002]}>
          <StuccoMaterial index={3} />
        </mesh>
        <mesh geometry={nodes.stucco_2.geometry} name="stucco_2" position={[-0.056, 1.995, 3.445]}>
          <StuccoMaterial index={2} />
        </mesh>
        <mesh
          geometry={nodes.rzezba.geometry}
          name="rzezba"
          position={[-6.27, 0.92, 11.3]}
          rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
          scale={0.001}
        >
          <Html
            wrapperClass="rzezba"
            position={[0, 0, 0]}
            rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Sculpture no. 1</h3>
            <p>Author</p>
          </Html>
          <SculptureMaterial />
        </mesh>
        <mesh geometry={nodes.obraz19.geometry} name="obraz19" position={[-0.118, 1.42, 10.438]}>
          <Html
            wrapperClass="obraz19"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 19</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.obraz22.geometry} name="obraz22" position={[-0.118, 1.42, 4.027]}>
          <Html
            wrapperClass="obraz22"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 22</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.obraz23.geometry} name="obraz23" position={[-0.118, 1.42, -3.981]}>
          <PaintingMaterial index="green" />
          <Html
            wrapperClass="obraz23"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 23</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz26.geometry} name="obraz26" position={[-0.118, 1.42, -10.21]}>
          <PaintingMaterial index="green" />
          <Html
            wrapperClass="obraz26"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 26</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz1.geometry} name="obraz1" position={[5.121, 1.42, 5.499]} rotation={[Math.PI, 0, Math.PI]}>
          <PaintingMaterial index="green" />
          <Html
            wrapperClass="obraz1"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 1</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz15.geometry}
          name="obraz15"
          position={[0.002, 1.444, -4.049]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz15"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 15</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz18.geometry}
          name="obraz18"
          position={[0.002, 1.444, 9.742]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz18"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 18</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz8.geometry} name="obraz8" position={[4.996, 1.42, -4.867]}>
          <Html
            wrapperClass="obraz8"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 8</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.obraz11.geometry} name="obraz11" position={[4.996, 1.42, 2.759]}>
          <Html
            wrapperClass="obraz11"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 11</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.obraz4.geometry} name="obraz4" position={[5.119, 1.42, -0.427]} rotation={[-Math.PI, 0, -Math.PI]}>
          <Html
            wrapperClass="obraz4"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 4</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.obraz7.geometry} name="obraz7" position={[5.119, 1.42, -5.863]} rotation={[-Math.PI, 0, -Math.PI]}>
          <Html
            wrapperClass="obraz7"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 7</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="green" />
        </mesh>
        <mesh geometry={nodes.ramka19.geometry} name="ramka19" position={[-0.125, 1.42, 10.438]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka22.geometry} name="ramka22" position={[-0.125, 1.42, 4.027]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka23.geometry} name="ramka23" position={[-0.125, 1.42, -3.98]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka26.geometry} name="ramka26" position={[-0.125, 1.42, -10.21]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka1.geometry}
          name="ramka1"
          position={[5.128, 1.42, 5.499]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka15.geometry}
          name="ramka15"
          position={[0.002, 1.444, -4.049]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={2} />
        </mesh>
        <mesh
          geometry={nodes.ramka18.geometry}
          name="ramka18"
          position={[0.002, 1.444, 9.742]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={2} />
        </mesh>
        <mesh geometry={nodes.ramka8.geometry} name="ramka8" position={[4.989, 1.42, -4.867]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka11.geometry} name="ramka11" position={[4.989, 1.42, 2.759]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka4.geometry}
          name="ramka4"
          position={[5.126, 1.42, -0.428]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka7.geometry}
          name="ramka7"
          position={[5.126, 1.42, -5.863]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka21.geometry} name="ramka21" position={[-0.116, 1.444, 5.888]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={2} />
        </mesh>
        <mesh geometry={nodes.ramka10.geometry} name="ramka10" position={[4.991, 1.42, -1.663]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka25.geometry} name="ramka25" position={[-0.108, 1.42, -8.37]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={2} />
        </mesh>
        <mesh
          geometry={nodes.ramka17.geometry}
          name="ramka17"
          position={[0.008, 1.42, 6.704]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka14.geometry}
          name="ramka14"
          position={[0.008, 1.42, -5.93]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka3.geometry}
          name="ramka3"
          position={[5.124, 1.42, 1.416]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka6.geometry}
          name="ramka6"
          position={[5.124, 1.42, -4.03]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.obraz20.geometry} name="obraz20" position={[-0.123, 1.42, 7.955]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz20"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 20</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz24.geometry} name="obraz24" position={[-0.123, 1.42, -5.717]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz24"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 24</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz13.geometry} name="obraz13" position={[0.003, 1.42, -7.99]} rotation={[-Math.PI, 0, -Math.PI]}>
          <PaintingMaterial index="green" />
          <Html
            wrapperClass="obraz13"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 13</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz16.geometry} name="obraz16" position={[0.003, 1.42, 4.338]} rotation={[Math.PI, 0, Math.PI]}>
          <PaintingMaterial index="green" />
          <Html
            wrapperClass="obraz16"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 16</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz9.geometry}
          name="obraz9"
          position={[4.998, 1.444, -3.368]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz9"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 9</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz5.geometry}
          name="obraz5"
          position={[5.118, 1.444, -1.967]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz5"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 5</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz2.geometry}
          name="obraz2"
          position={[5.118, 1.444, 3.955]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz2"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 2</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz21.geometry}
          name="obraz21"
          position={[-0.116, 1.444, 5.888]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz21"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 21</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz25.geometry}
          name="obraz25"
          position={[-0.116, 1.444, -8.374]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <PaintingMaterial index="black" />
          <Html
            wrapperClass="obraz25"
            position={[0, 0, 70]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 25</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz14.geometry} name="obraz14" position={[0.008, 1.42, -5.93]} rotation={[-Math.PI, 0, -Math.PI]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz14"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 14</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz17.geometry} name="obraz17" position={[0.008, 1.42, 6.704]} rotation={[Math.PI, 0, Math.PI]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz17"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 17</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz10.geometry} name="obraz10" position={[4.991, 1.42, -1.663]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz10"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 10</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz6.geometry} name="obraz6" position={[5.124, 1.42, -4.03]} rotation={[-Math.PI, 0, -Math.PI]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz6"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 6</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh geometry={nodes.obraz3.geometry} name="obraz3" position={[5.124, 1.42, 1.416]} rotation={[-Math.PI, 0, -Math.PI]}>
          <PaintingMaterial index="pink" />
          <Html
            wrapperClass="obraz3"
            position={[0, 0, 0.5]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 3</h3>
            <p>Author</p>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.obraz12.geometry}
          name="obraz12"
          position={[4.998, 1.444, 5.489]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.009, 0.01, 0.008]}
        >
          <Html
            wrapperClass="obraz12"
            position={[0, 0, 70]}
            rotation={[0, 0, Math.PI / 2]}
            ref={ref}
            style={{
              display: "none",
              whiteSpace: "no-break",
              color: "white",
            }}
          >
            <h3>Painting no. 12</h3>
            <p>Author</p>
          </Html>
          <PaintingMaterial index="black" />
        </mesh>
        <mesh geometry={nodes.background.geometry} name="background" position={[0.048, 2.97, -0.539]} scale={39.411}>
          <BackgroundMaterial />
        </mesh>
        <mesh geometry={nodes.ramka20.geometry} name="ramka20" position={[-0.123, 1.42, 7.955]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh geometry={nodes.ramka9.geometry} name="ramka9" position={[4.998, 1.444, -3.368]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={2} />
        </mesh>
        <mesh geometry={nodes.ramka12.geometry} name="ramka12" position={[4.998, 1.444, 5.489]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={2} />
        </mesh>
        <mesh geometry={nodes.ramka24.geometry} name="ramka24" position={[-0.123, 1.42, -5.717]} scale={[0.2, 0.45, 0.321]}>
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka16.geometry}
          name="ramka16"
          position={[0.01, 1.42, 4.338]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka13.geometry}
          name="ramka13"
          position={[0.01, 1.42, -7.99]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={1} />
        </mesh>
        <mesh
          geometry={nodes.ramka2.geometry}
          name="ramka2"
          position={[5.118, 1.444, 3.955]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={2} />
        </mesh>
        <mesh
          geometry={nodes.ramka5.geometry}
          name="ramka5"
          position={[5.118, 1.444, -1.967]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.2, 0.45, 0.321]}
        >
          <FrameMaterial index={2} />
        </mesh>
        <mesh geometry={nodes.azur.geometry} name="azur" position={[9.78, 6, -6.08]}>
          <AzurMaterial />
        </mesh>
        <mesh geometry={nodes["szyba-okno"].geometry} name="szyba-okno" position={[9.63, 6, -6.11]}>
          <GlassMaterial />
        </mesh>
        <mesh geometry={nodes["metalowe-listwy"].geometry} position={[0, 0, 3.98]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes["lampy-stojace"].geometry} name="lampy-stojace" position={[-6.17, 2.02, 11.17]}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa.geometry} name="Lampa" position={[5.61, 2.89, 5.5]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa002.geometry} name="Lampa002" position={[5.61, 2.89, 1.43]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa004.geometry} name="Lampa004" position={[5.61, 2.89, -0.42]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa006.geometry} name="Lampa006" position={[5.61, 2.89, -4.03]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa008.geometry} name="Lampa008" position={[0.49, 2.89, -8]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa010.geometry} name="Lampa010" position={[-0.62, 2.89, 7.95]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa012.geometry} name="Lampa012" position={[-0.62, 2.89, 10.43]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa014.geometry} name="Lampa014" position={[0.5, 2.89, 4.34]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa024.geometry} name="Lampa024" position={[-0.62, 2.89, 7.95]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa030.geometry} name="Lampa030" position={[-0.62, 2.89, 7.95]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa036.geometry} name="Lampa036" position={[-0.62, 2.89, -10.16]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa052.geometry} name="Lampa052" position={[-0.62, 2.89, -4.13]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa054.geometry} name="Lampa054" position={[-0.62, 2.89, 4.03]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa016.geometry} name="Lampa016" position={[5.61, 2.89, 3.96]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa018.geometry} name="Lampa018" position={[0.5, 2.89, -4.05]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa020.geometry} name="Lampa020" position={[0.5, 2.89, 9.74]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.emisyjny002.geometry} name="emisyjny002" position={[0.5, 2.9, 9.74]} rotation={[0, Math.PI, 0]} scale={1}>
          <EmissiveMaterial value={0.2} />
        </mesh>
        <mesh geometry={nodes.Lampa038.geometry} name="Lampa038" position={[-0.62, 2.89, -8.25]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa040.geometry} name="Lampa040" position={[-0.62, 2.89, 5.89]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa042.geometry} name="Lampa042" position={[0.49, 2.89, 6.71]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa022.geometry} name="Lampa022" position={[5.61, 2.89, -1.96]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa026.geometry} name="Lampa026" position={[5.61, 2.89, -5.87]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa028.geometry} name="Lampa028" position={[4.52, 2.89, 5.49]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa032.geometry} name="Lampa032" position={[4.52, 2.89, -1.67]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa034.geometry} name="Lampa034" position={[4.52, 2.89, 2.77]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa044.geometry} name="Lampa044" position={[0.5, 2.89, -5.93]} rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa046.geometry} name="Lampa046" position={[-0.62, 2.89, -5.81]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa048.geometry} name="Lampa048" position={[4.52, 2.89, -3.37]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.Lampa050.geometry} name="Lampa050" position={[4.52, 2.89, -4.88]} scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes["rama-okienna"].geometry} name="rama-okienna" position={[0.01, 0, 0]} scale={0.01}>
          <BaseboardMaterial />
        </mesh>
        <mesh geometry={nodes["listwy-przypodlogowe"].geometry} position={[-0.11, 0.03, 12]} rotation={[-Math.PI, 0, 0]} scale={-0.01}>
          <BaseboardMaterial />
        </mesh>
        <mesh geometry={nodes.emisyjny003.geometry} name="emisyjny003" position={[0.53, 15.72, 1.22]} rotation={[0, 0, Math.PI]} scale={0.01}>
          <EmissiveMaterial value={0.1} />
        </mesh>
        <mesh geometry={nodes.emisyjny.geometry} name="emisyjny" position={[-7.75, 6.54, -8.82]} rotation={[0, -0.15708, 0]} scale={0.005}>
          <EmissiveMaterial value={0.3} />
        </mesh>
        <mesh geometry={nodes.emisyjny001.geometry} name="emisyjny001" position={[-6.17, 2.02, 11.17]}>
          <EmissiveMaterial value={0.1} />
        </mesh>
        <mesh geometry={nodes["podloga-jodelka"].geometry}>
          <FloorMaterial />
        </mesh>
        <mesh geometry={nodes["podloga-metal"].geometry} name="podloga-metal" scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.sciezka.geometry} name="sciezka" scale={0.01}>
          <FloorMetalMaterial />
        </mesh>
        <mesh geometry={nodes.sufit.geometry} name="sufit" material={nodes.sufit.material} position={[1.03691, 12, -0.410466]} scale={0.01}>
          <WallMaterial />
        </mesh>
        <mesh geometry={nodes.sciana_infinity.geometry} position={[3.31, -1.341, -6.232]}>
          <InfinityWallMaterial />
        </mesh>
        <mesh geometry={nodes.sciana_zewn.geometry} position={[9, 2.668, -8.707]}>
          <BakedWallMaterial />
        </mesh>
        <mesh geometry={nodes.grubosc001.geometry} position={[6.466, -0.34, -4.482]}></mesh>
      </group>
    </>
  );
}

useGLTF.preload("/gallery.glb");
