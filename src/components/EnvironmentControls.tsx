import { useEffect, useState } from "react";

export interface EnvironmentControlsProps {
    ambientIntensity: number;
    setAmbientIntensity: (value: number) => void;
}

const EnvironmentControls = ({ ambientIntensity, setAmbientIntensity }: EnvironmentControlsProps) => {

    const [rainVolume, setRainVolume] = useState(0.2);
    const [rainAudio] = useState(new Audio('/sounds/relaxing_rain.wav'));

    // Yağmur sesini kontrol eden effect
    useEffect(() => {
        rainAudio.loop = true;
        rainAudio.volume = rainVolume;

        // Tarayıcı politikaları gereği kullanıcı etkileşimiyle başlatılmalı
        if (rainVolume > 0) {
            rainAudio.play().catch(() => console.log("Oynatma için etkileşim bekleniyor"));
        } else {
            rainAudio.pause();
        }
    }, [rainVolume, rainAudio]);

    return (
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex flex-col gap-4 shadow-2xl pointer-events-auto">
            {/* Ortam Işığı Slider */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-white opacity-60 uppercase">
                    <span>Ortam Işığı</span>
                    <span>%{Math.round(ambientIntensity * 100)}</span>
                </div>
                <input
                    type="range"
                    min="0" max="1" step="0.01"
                    value={ambientIntensity}
                    onChange={(e) => setAmbientIntensity(parseFloat(e.target.value))}
                    className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
            </div>

            {/* Yağmur Sesi Slider */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-white opacity-60 uppercase">
                    <span>Yağmur Sesi</span>
                    <span>%{Math.round(rainVolume * 100)}</span>
                </div>
                <input
                    type="range"
                    min="0" max="1" step="0.01"
                    value={rainVolume}
                    onChange={(e) => setRainVolume(parseFloat(e.target.value))}
                    className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
            </div>
        </div>
    );
}

export default EnvironmentControls