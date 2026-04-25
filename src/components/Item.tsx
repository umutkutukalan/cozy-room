import { useGLTF } from "@react-three/drei";
import type { RoomItem } from "../data/roomConfig";
import { useEffect } from "react";

const Item = ({ item }: { item: RoomItem, isNight: boolean }) => {

    const { scene } = useGLTF(item.model);

    // Modellerin birbirine karışmaması için her örneği (instance) kopyalıyoruz
    const clonedScene = scene.clone();

    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                console.log(`Parça Adı: ${child.name}`);
                console.log(`Materyal Adı: ${child.material.name} - Renk: ${child.material.color.getHexString()}`);
            }
        });
    }, [scene]);

    clonedScene.traverse((child: any) => {
        if (child.isMesh) {
            if (child.name.includes('desk') && child.material.name.includes('wood')) {
                child.material.color.set('#6c4115');
            }

            if (child.name.includes('bedSingle') && child.material.name.includes('wood')) {
                child.material.color.set('#0d4449');
            }

            if (child.name.includes('pillow')) {
                child.material = child.material.clone();
                child.material.color.set('#4078b0');
            }
        }
    });

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
