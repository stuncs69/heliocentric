import { extend, Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Decal, useTexture, Float, Stars,  } from "@react-three/drei"
import { Euler, LinearFilter, LinearMipMapLinearFilter, OctahedronGeometry, TextureLoader } from "three"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import React from "react";

export const Earth = () => {
    const colorMap = useLoader(TextureLoader, '/2k_earth_daymap.jpg')
    const cloudMap = useLoader(TextureLoader, '/2k_earth_clouds_v2.jpg')
    const myMesh = React.useRef()

    colorMap.generateMipmaps = true
    colorMap.minFilter = LinearMipMapLinearFilter
    colorMap.magFilter = LinearFilter

    useFrame(({clock}) => {
      //@ts-expect-error
      myMesh.current.rotation.y = myMesh.current.rotation.y+0.0009
    })
    return (
      //@ts-expect-error
        <mesh ref={myMesh} position={[50,0,-80]}>
          <sphereGeometry args={[2.5, 6, 6]} />
          <meshStandardMaterial map={colorMap} />
          {/* <meshStandardMaterial map={cloudMap} opacity={0.1}/> */}
        </mesh>
    );
  };