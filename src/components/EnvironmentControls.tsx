export interface EnvironmentControlsProps {
    ambientIntensity: number;
    setAmbientIntensity: (value: number) => void;
}

const EnvironmentControls = ({ ambientIntensity, setAmbientIntensity }: EnvironmentControlsProps) => {
    return (
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex flex-col gap-4 shadow-2xl">
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-white opacity-60 uppercase">
                    <span>Ortam Işığı</span>
                    <span>%60</span>
                </div>
                <input 
                    type="range" 
                    className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white" 
                    min="0" 
                    max="1" 
                    step="0.1"
                    value={ambientIntensity}
                    onChange={(e) => setAmbientIntensity(parseFloat(e.target.value))}
                />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-white opacity-60 uppercase">
                    <span>Yağmur Sesi</span>
                    <span>%20</span>
                </div>
                <input type="range" className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white" />
            </div>
        </div>
    );
}

export default EnvironmentControls