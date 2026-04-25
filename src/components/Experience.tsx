import { roomItems } from '../data/roomConfig';
import Item from './Item';


export default function Experience({ isNight }: { isNight: boolean }) {
    const sagduvar = 3; // Odanın derinliği
    const solduvar = 3; // Odanın genişliği
    const width = 3; // Kutunun genişliği

    return (
        <>
            {/* ZEMİN: Merkezini kaydırarak 0'dan başlatıyoruz */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[width / 2, 0, sagduvar / 2]} receiveShadow>
                <planeGeometry args={[width, sagduvar]} />
                <meshStandardMaterial color="#6e685f" />
            </mesh>

            {/* ARKA DUVAR: Z ekseninde 0 noktasında sabit */}
            <mesh position={[width / 2, sagduvar / 2, 0]} receiveShadow>
                <planeGeometry args={[width, sagduvar]} />
                <meshStandardMaterial transparent opacity={10} />
            </mesh>

            {/* SOL DUVAR: X ekseninde 0 noktasında sabit */}
            <mesh rotation={[0, Math.PI / 2, 0]} position={[0, solduvar / 2, solduvar / 2]} receiveShadow>
                <planeGeometry args={[solduvar, solduvar]} />
                <meshStandardMaterial transparent opacity={10}/>
            </mesh>

            {/* HALI: Zeminin üzerinde */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2.2, 0.02, sagduvar / 2]} receiveShadow>
                <planeGeometry args={[width * 0.5, width * 0.5]} />
                <meshStandardMaterial color="#3b485d" />
            </mesh>

            {/* MODELLER: Artık x ve z değerlerini 0 ile 4 arasında vererek kutuya dizebilirsin */}
            {roomItems.map((item) => (
                <Item key={item.id} item={item} isNight={isNight} />))}
        </>
    );
}
