import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import Creative3D from "./Creative3D.json";
import React, { Suspense, useRef, useState } from "react";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import GeoBox from "../components/GeoBox";
import GeoText3d from "../components/GeoText3D";
import { useSpring, animated } from "@react-spring/three";
import GeoParticles from "../components/GeoParticles";

export default function App() {
  const sheet = getProject("Fly Through", { state: Creative3D }).sheet(
    "Scene"
  );
  
  function Click() {
    const {height} = useThree((state) => state.viewport)
    const group = useRef()
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      setClicked(!clicked);
    }
    const {scale} = useSpring({
      scale: clicked ? 10: 3,
    })
  
  
    return (
      <group ref={group} >
      <animated.mesh ref={group} onClick={handleClick} scale={scale} position={[0,0,0]} >
        <GeoText3d scale={[1, height, 1]} />
        <meshStandardMaterial />
      </animated.mesh>
      <animated.mesh ref={group} scale={scale} position={[0,0,0]}>
        <GeoParticles />
        <meshStandardMaterial />
      </animated.mesh>
      </group>
    )
  }

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
      <ScrollControls pages={10} damping={1}>
        <SheetProvider sheet={sheet}>
          <Scene />
          <GeoBox />
          <Click />
        </SheetProvider>
        <Scroll html>
            <h1 style={{ position: "absolute", top: "20vh", left: "50vw", }}>
              Be
            </h1>
            <h1 style={{ position: "absolute", top: "50vh", left: "60vw" }}>
              Creative
            </h1>
            <h1 style={{ position: "fixed", top: "200vh", left: "10vw", }}>
            Explore boundless
            </h1>
            <h1 style={{ position: "fixed", top: "240vh", left: "0vw" }}>
            creativity in 3D
            </h1>
            <h1 style={{ position: "fixed", top: "400vh", left: "10vw", }}>
            Immerse yourself in a
            </h1>
            <h1 style={{ position: "fixed", top: "440vh", left: "0vw" }}>
            digital dreamscape
            </h1>
            <h1 style={{ position: "fixed", top: "600vh", left: "10vw", }}>
            Where pixels paint a
            </h1>
            <h1 style={{ position: "fixed", top: "640vh", left: "0vw" }}>
            world of wonder
            </h1>
            <h1 style={{ position: "fixed", top: "800vh", left: "10vw", }}>
            Journey through art
            </h1>
            <h1 style={{ position: "fixed", top: "840vh", left: "0vw" }}>
            and tech fusion
            </h1>
            <h1 style={{ position: "fixed", top: "920vh", left: "20vw", }}>
              Be
            </h1>
            <h1 style={{ position: "fixed", top: "970vh", left: "50vw" }}>
              Creative
            </h1>
          </Scroll>
      </ScrollControls>
      </Suspense>
    </Canvas>
  );
}


function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  

  return (
    <>
    <color />
      <fog attach="fog" near={-4} far={10} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 5, 10]} castShadow /> 
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  );
}