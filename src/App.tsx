import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useRef } from "react"

function Building() {
  const { scene } = useGLTF("/3d/bot_canh_chinsu.glb") // bỏ file vào public/
  return <primitive object={scene} />
}

export default function App() {
  const controlsRef = useRef<any>(null)
  const minY = 0 // Mặt đất, không cho xuống dưới 0

  const handleControlsChange = () => {
    const controls = controlsRef.current
    if (controls) {
      // Giới hạn target không xuống dưới mặt đất
      if (controls.target.y < minY) {
        controls.target.y = minY
        controls.object.position.y = Math.max(controls.object.position.y, minY + 0.01)
        controls.update()
      }
    }
  }

  return (
    <Canvas style={{ width: "90vw", height: "90vh" }}>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} />

      <PerspectiveCamera makeDefault position={[0.4155882755133013, 0.015119759822736795, 0.39972042445152606]} />

      <Building />

      <OrbitControls
        ref={controlsRef}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        onChange={handleControlsChange}
      />
    </Canvas>
  )
}


