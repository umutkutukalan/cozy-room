import { useEffect, useRef, useState } from "react";

export interface EnvironmentControlsProps {
    ambientIntensity: number;
    setAmbientIntensity: (value: number) => void;
}

const EnvironmentControls = ({ ambientIntensity, setAmbientIntensity }: EnvironmentControlsProps) => {

    const [rainVolume, setRainVolume] = useState(0.2);
    const [isRainPlaying, setIsRainPlaying] = useState(false);

    // Audio nesnesini bir kez oluştur ve ayarlarını yap
    const rainAudio = useRef<HTMLAudioElement | null>(null);

    if (!rainAudio.current) {
        rainAudio.current = new Audio('/sounds/relaxing_rain.mp3');
        rainAudio.current.loop = true; // Loop'u burada bir kez set ediyoruz
    }

    // Sadece rainVolume değişince çalışır
    useEffect(() => {
        if (rainAudio.current) {
            // Sesi doğrudan güncellemek kesinti yapmaz
            rainAudio.current.volume = rainVolume;
        }
    }, [rainVolume]);

    const toggleRain = () => {
        if (!rainAudio.current) return;

        if (isRainPlaying) {
            rainAudio.current.pause();
        } else {
            // Kullanıcı etkileşimiyle başlattığımız için tarayıcı engellemez
            rainAudio.current.play().catch(err => console.error("Audio error:", err));
        }
        setIsRainPlaying(!isRainPlaying);
    };

    // Bileşen unmount olduğunda sesi tamamen durdurmak için cleanup fonksiyonu
    useEffect(() => {
        return () => {
            if (rainAudio.current) {
                rainAudio.current.pause();
                rainAudio.current = null;
            }
        };
    }, []);

    return (
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex flex-col gap-4 shadow-2xl pointer-events-auto">

            {/* Ortam Işığı (Artık Arka Plan Rengine de Bağlı) */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-white opacity-60 uppercase">
                    <span>Ortam Işığı</span>
                    <span>%{Math.round(ambientIntensity * 100)}</span>
                </div>
                <input
                    type="range" min="0" max="1" step="0.01"
                    value={ambientIntensity}
                    onChange={(e) => setAmbientIntensity(parseFloat(e.target.value))}
                    className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
            </div>

            <hr className="border-white/5" />

            {/* Yağmur Kontrolü */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white opacity-60 uppercase tracking-widest">Yağmur Sesi</span>
                    <button
                        onClick={toggleRain}
                        className={`text-xs px-2 py-1 rounded transition-colors ${isRainPlaying ? 'bg-blue-500/40 text-white' : 'bg-white/10 text-white/50'}`}
                    >
                        {isRainPlaying ? 'Durdur' : 'Başlat'}
                    </button>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-[10px] text-white opacity-40">
                        <span>Ses Düzeyi</span>
                        <span>%{Math.round(rainVolume * 100)}</span>
                    </div>
                    <input
                        type="range" min="0" max="1" step="0.01"
                        value={rainVolume}
                        onChange={(e) => setRainVolume(parseFloat(e.target.value))}
                        className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                </div>
            </div>
        </div>
    );
}

export default EnvironmentControls