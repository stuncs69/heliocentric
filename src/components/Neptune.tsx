import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import React from "react";

export const Neptune = () => {
    const colorMap = useLoader(TextureLoader, '/2k_neptune.jpg')
    const myMesh = React.useRef()
    useFrame(({clock}) => {
      //@ts-expect-error
      myMesh.current.rotation.y = clock.getElapsedTime()
    })
    return (
      //@ts-expect-error
        <mesh ref={myMesh} position={[155,0,-80]}>
          <sphereGeometry args={[4, 8, 60]} />
          <meshStandardMaterial map={colorMap}/>
        </mesh>
    );
  };