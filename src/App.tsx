import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { useState } from "react";

function App() {

  const [isNight, setIsNight] = useState(false); // Gece/Gündüz state'i

  return (
    <div style={{ width: '100vw', height: '100vh', background: isNight ? '#0a0a0a' : '#b9b9b9' }} className="relative">

      {/* Gece/Gündüz Butonu */}
      <button
        onClick={() => setIsNight(!isNight)}
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', background: isNight ? '#333' : '#fff', color: isNight ? '#fff' : '#000', border: 'none', fontWeight: 'bold' }}
      >
        {isNight ? "☀️ Sabah Yap" : "🌙 Akşam Yap"}
      </button>

      <Canvas
        shadows
        orthographic
        camera={{
          zoom: 180,
          position: [50, 50, 50],
          near: 0.1,
          far: 1000
        }}
      >

        <ambientLight intensity={isNight ? 0.05 : 0.2} />
        <pointLight position={[5, 5, 5]} intensity={isNight ? 0.5 : 0} color="#c2a771" />

        <Stage
          environment={isNight ? "night" : "city"}
          intensity={isNight ? 0.1 : 0.5}
          adjustCamera={false}
          shadows="contact"
        >
          <Experience isNight={isNight} />
        </Stage>
        
        <ambientLight intensity={0.2} />
      </Canvas>
    </div>
  )
}

export default App
