import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import planetData from "./components/planetData.ts";
import "./App.css";
import { Information } from "./components/planetInformation.tsx";

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 60, 25], fov: 45 }}>
        <Sun />
        {planetData.map((planet: any) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
      <Information />
    </>
  );
}
function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  );
}
//@ts-ignore
function Planet({ planet: { color, xRadius, zRadius, size, speed } }) {
  const planetRef = React.useRef();
  let [clockx, setClock] = useState(1.0)

  useFrame(({ clock }) => {
    const t = setClock((clockx+speed));
    const x = xRadius * Math.sin(clockx);
    const z = zRadius * Math.cos(clockx);
    //@ts-ignore
    planetRef.current.position.x = x;
    //@ts-ignore
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
