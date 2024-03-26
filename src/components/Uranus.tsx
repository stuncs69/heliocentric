import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import React from "react";

export const Uranus = () => {
    const colorMap = useLoader(TextureLoader, '/2k_uranus.jpg')
    const myMesh = React.useRef()
    useFrame(({clock}) => {
      //@ts-expect-error
      myMesh.current.rotation.y = clock.getElapsedTime()
    })
    return (
      //@ts-expect-error
        <mesh ref={myMesh} position={[125,0,-80]}>
          <sphereGeometry args={[4, 8, 6]} />
          <meshStandardMaterial map={colorMap}/>
        </mesh>
    );
  };