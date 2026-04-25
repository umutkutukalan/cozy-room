import { useGLTF } from "@react-three/drei";
import type { RoomItem } from "../data/roomConfig";

const Item = ({ item }: { item: RoomItem, isNight: boolean }) => {

    const { scene } = useGLTF(item.model);

    // Modellerin birbirine karışmaması için her örneği (instance) kopyalıyoruz
    const clonedScene = scene.clone();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Üst üste binen objelerde sadece en öndekini seç
        if (item.interactive) {
            console.log(`${item.id} tıklandı! Aksiyon: ${item.action}`);
            // Burada To-Do listesini açma mantığını kuracağız
        }
    };

    return (
        <primitive
            object={clonedScene}
            position={item.position}
            rotation={item.rotation}
            onClick={handleClick}
            onPointerOver={() => item.interactive && (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = 'auto')}
        />
    );
}

export default Item
