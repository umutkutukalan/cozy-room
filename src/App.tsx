import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { useState } from "react";
import EnvironmentControls from "./components/EnvironmentControls";

function App() {

  const [ambientIntensity, setAmbientIntensity] = useState(0.5);
  const isNight = ambientIntensity < 0.3;

  // Arka plan rengini ışığa göre koyulaştıran fonksiyon
  // 0.1 intensity -> #0a0a0a (Karanlık)
  // 0.8 intensity -> #b9b9b9 (Aydınlık)
  const getBackgroundColor = () => {
    const darkness = Math.floor(ambientIntensity * 150); // Değeri renk koduna mapliyoruz
    return `rgb(${darkness}, ${darkness}, ${darkness + 10})`; // Hafif mavimsi bir derinlik için
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: getBackgroundColor(), transition: 'background 0.5s ease' }} className="relative">

      <Canvas
        shadows
        orthographic
        camera={{
          zoom: 100,
          position: [50, 50, 50],
          near: 0.1,
          far: 1000
        }}
      >

        <ambientLight intensity={ambientIntensity} />
        {/* PointLight (Lamba ışığı) sadece ortam çok karardığında yansın */}
        <pointLight
          position={[5, 5, 5]}
          intensity={ambientIntensity < 0.2 ? 0.8 : 0}
          color="#c2a771"
        />

        <Stage
          // Işık seviyesine göre city veya night preset'i arasında geçiş
          environment={ambientIntensity < 0.4 ? "night" : "city"}
          intensity={ambientIntensity}
          adjustCamera={false}
          shadows="contact"
        >
          <Experience isNight={isNight} />
        </Stage>

        <ambientLight intensity={0.2} />
      </Canvas>

      {/* 2. KATMAN: UI Overlay - Flexbox ile Sabitleme */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">

        {/* ÜST PANEL: Sol (Focus), Sağ (Settings) */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {/* NightToggle'ı kaldırabilir veya "Hızlı Gece/Gündüz" butonu olarak tutabilirsin */}
              <EnvironmentControls
                ambientIntensity={ambientIntensity}
                setAmbientIntensity={setAmbientIntensity}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
