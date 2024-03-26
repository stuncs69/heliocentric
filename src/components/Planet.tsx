import React from "react";
import { useFrame } from "@react-three/fiber";
import Ecliptic from "./Ecliptic";

//@ts-ignore
export default function Planet({ planet: { color, xRadius, zRadius, size, speed } }) {
    const planetRef = React.useRef();
    let [clockx, setClock] = React.useState(1.0)
  
    //@ts-ignore
    useFrame(({ clock }) => {
      setClock((clockx+speed));
      const x = xRadius * Math.sin(clockx);
      const z = zRadius * Math.cos(clockx);
      //@ts-ignore
      planetRef.current.position.x = x;
      //@ts-ignore
      planetRef.current.position.z = z;
    });
  
    return (
      <>
      {/* @ts-ignore */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <Ecliptic xRadius={xRadius} zRadius={zRadius} />
      </>
    );
  }