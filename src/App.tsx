import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"

function Building() {
  const { scene } = useGLTF("/3d/bot_canh_chinsu.glb") // bỏ file vào public/
  return <primitive object={scene} />
}

export default function App() {
  return (
    <Canvas style={{ width: "90vw", height: "90vh" }}>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} />
      
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0.4155882755133013, 0.015119759822736795, 0.39972042445152606]}/>
      
      {/* Mô hình */}
      <Building />
      
      {/* Điều khiển camera */}
      <OrbitControls />
    </Canvas>
  )
}


