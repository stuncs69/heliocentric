import { extend, Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Decal, useTexture, Float, Stars, PerspectiveCamera,  } from "@react-three/drei"
import { Euler, OctahedronGeometry, TextureLoader } from "three"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import "./App.css"
import React from "react";
import { Sun } from "./components/Sun"
import { Mercury } from "./components/Mercury"
import { Venus } from "./components/Venus"
import { Earth } from "./components/Earth"
import { Mars } from "./components/Mars"
import { Jupiter } from "./components/Jupiter"
import { Uranus } from "./components/Uranus"
import { Neptune } from "./components/Neptune"

export default function App() {
  return (
    <Canvas frameloop="always" style={{height: "100vh", width: "100vw"}} className="w-screen min-h-screen z-10">
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
      <Sun />
      <Mercury />
      <Venus />
      {/* <PerspectiveCamera makeDefault={true} position={[60,0,-90]} /> */}
      <Earth />
      <Mars />
      <Jupiter />
      <Uranus />
      <Neptune />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}