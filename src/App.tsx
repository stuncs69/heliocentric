import { useState } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import planetData from "./components/planetData.ts";
import "./App.css";
import { Information } from "./components/planetInformation.tsx";
import Sun from "./components/Sun.tsx";
import Planet  from "./components/Planet.tsx";
import Lights from "./components/Lights.tsx";

export default function App() {
  const [currentPlanet, changeCurrentPlanet] = useState(-1);

  const changePlanet = (id: number) => {
    changeCurrentPlanet(id);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 60, 25], fov: 45 }}>
        <Sun />
        {currentPlanet === -1
          ? planetData.map((planet: any) => (
              <Planet planet={planet} key={planet.id} />
            ))
          : (
              <Planet
                planet={planetData.find((planet: any) => planet.id === currentPlanet)}
                key={currentPlanet}
              />
            )}
        <Lights />
        {/* <OrbitControls /> */}
      </Canvas>
      <Information current={currentPlanet} fn={changePlanet} />
    </>
  );
}
