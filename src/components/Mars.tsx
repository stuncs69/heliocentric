import { extend, Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Decal, useTexture, Float, Stars,  } from "@react-three/drei"
import { Euler, OctahedronGeometry, TextureLoader } from "three"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import React from "react";

export const Mars = () => {
    const colorMap = useLoader(TextureLoader, '/2k_mars.jpg')
    const myMesh = React.useRef()
    useFrame(({clock}) => {
      //@ts-expect-error
      myMesh.current.rotation.y = clock.getElapsedTime()
    })
    return (
      //@ts-expect-error
        <mesh ref={myMesh} position={[65,0,-80]}>
          <sphereGeometry args={[2, 8, 6]} />
          <meshStandardMaterial map={colorMap}/>
        </mesh>
    );
  };