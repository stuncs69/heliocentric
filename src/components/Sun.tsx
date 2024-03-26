export default function Sun() {
    return (
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#E1DC59" emissive="#E1DC59" />
      </mesh>
    );
  }