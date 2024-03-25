import { extend, Canvas } from "@react-three/fiber"
import { OrbitControls } from "drei"

export default function App() {
  return (
    <Canvas style={{ width: "50vw", height: "50vh", marginTop: "10vh" }}>
      <directionalLight position={[0,0,1]} />
      <mesh position={[1,0,0]}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  )
}