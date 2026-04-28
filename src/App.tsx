import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { useState } from "react";
import EnvironmentControls from "./components/EnvironmentControls";

function App() {

  const [ambientIntensity, setAmbientIntensity] = useState(0.5);
  const isNight = ambientIntensity < 0.3;

  const getBackgroundColor = () => {
    const darkness = Math.floor(ambientIntensity * 150); // Değeri renk koduna mapliyoruz
    return `rgb(${darkness}, ${darkness}, ${darkness + 10})`; // Hafif mavimsi bir derinlik için
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: getBackgroundColor(), transition: 'background 0.5s ease' }} className="relative flex items-center">
      {/* 2. KATMAN: UI Overlay - Flexbox ile Sabitleme */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">

        {/* ÜST PANEL: Sol (Focus), Sağ (Settings) */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <EnvironmentControls
                ambientIntensity={ambientIntensity}
                setAmbientIntensity={setAmbientIntensity}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full relative overflow-hidden">
        <Canvas
          shadows
          orthographic
          style={{
            position: 'absolute',
            width: '180%',
            height: '180%',
            right: '-50%',
            bottom: '-65%',
            pointerEvents: 'none'
          }}
          camera={{
            zoom: 220,
            position: [50, 50, 50],
            near: 0.1,
            far: 1000
          }}
        >
          <Stage
            environment={ambientIntensity < 0.4 ? "night" : "city"}
            intensity={ambientIntensity}
            adjustCamera={false}
            shadows="contact"
          >
            <Experience isNight={isNight} />
          </Stage>
        </Canvas>
      </div>

    </div>
  )
}

export default App
