import { extend, Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Decal, useTexture, Float, Stars,  } from "@react-three/drei"
import { Euler, OctahedronGeometry, TextureLoader } from "three"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import React from "react";

export const Sun = () => {
    const colorMap = useLoader(TextureLoader, '/2k_sun.jpg')
    const myMesh = React.useRef()
    useFrame(({clock}) => {
      // myMesh.current.rotation.y = clock.getElapsedTime() - 0.9
    })
    return (
      //@ts-expect-error
        <mesh ref={myMesh} position={[0,0,-80]}>
          <sphereGeometry args={[10, 8, 6]} />
          <meshStandardMaterial map={colorMap} emissive={"orange"} emissiveIntensity={1} toneMapped={true}/>
          {/* <directionalLight position={[0,0,-80]} color={"orange"} /> */}
          <ambientLight color={"white"} intensity={0.9}></ambientLight>
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
        </mesh>
    );
  };