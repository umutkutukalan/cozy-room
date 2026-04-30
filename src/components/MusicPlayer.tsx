import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
    const [volume, setVolume] = useState(0.3);
    const [isPlaying, setIsPlaying] = useState(false);

    // Müzik dosyası için referans
    const musicAudio = useRef<HTMLAudioElement | null>(null);

    // Başlatma ve ayarlar
    if (musicAudio.current === null) {
        const audio = new Audio('/sounds/cozy.wav');
        audio.loop = true;
        (musicAudio as React.MutableRefObject<HTMLAudioElement | null>).current = audio;
    }

    // Ses düzeyi güncelleme
    useEffect(() => {
        if (musicAudio.current) {
            musicAudio.current.volume = volume;
        }
    }, [volume]);

    const toggleMusic = () => {
        if (!musicAudio.current) return;
        if (isPlaying) {
            musicAudio.current.pause();
        } else {
            musicAudio.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl flex items-center gap-6 pointer-events-auto transition-all hover:bg-white/10 shadow-xl">
            <button
                onClick={toggleMusic}
                className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform"
            >
                {isPlaying ? (
                    <span className="text-sm">Pause</span>
                ) : (
                    <span className="text-sm pl-1">Play</span>
                )}
            </button>

            {/* Bilgi ve Ses Slider */}
            <div className="flex flex-col gap-1 min-w-[120px]">
                <span className="text-[11px] font-medium text-white/90">kutukalan - cozy song</span>
                <div className="flex items-center gap-2">
                    <input
                        type="range" min="0" max="1" step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                </div>
            </div>

            {/* Çalıyor Efekti */}
            {isPlaying && (
                <div className="flex items-end gap-[2px] h-3">
                    <div className="w-1 bg-white/60 animate-pulse h-full"></div>
                    <div className="w-1 bg-white/60 animate-pulse h-1/2 delay-75"></div>
                    <div className="w-1 bg-white/60 animate-pulse h-3/4 delay-150"></div>
                </div>
            )}
        </div>
    );
}

export default MusicPlayer