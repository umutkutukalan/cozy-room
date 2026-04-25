import { useGLTF } from "@react-three/drei";
import type { RoomItem } from "../data/roomConfig";
import { useEffect } from "react";

const Item = ({ item, isNight }: { item: RoomItem, isNight: boolean }) => {

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
            if (child.name.includes('bedSingle') && child.material.name.includes('carpet')) {
                child.material.color.set('#e9d2d2'); // Yatağa daha koyu bir kahve
            }

            if (child.name.includes('bedSingle') && child.material.name.includes('metal')) {
                child.material.color.set('#e7e7e7'); // Yatağa daha koyu bir kahve
            }

            if (child.name.includes('Mesh_cover') && child.material.name.includes('carpet')) {
                child.material.color.set('#0e5553');
            }

            if (child.name.includes('Mesh_cover_1') && child.material.name.includes('carpet')) {
                child.material.color.set('#8cd0cf');
            }
            if (child.name.includes('Mesh_laptop') && child.material.name.includes('metalDark')) {
                child.material.color.set('#C0C0C0');
            }
            if (child.name.includes('Mesh_laptop_1') && child.material.name.includes('metal')) {
                child.material.color.set('#7c7c7c');
            }
            if (child.name.includes('Mesh_laptop_2') && child.material.name.includes('metalMedium')) {
                child.material.color.set('#2d2d2d');
            }
            if (child.name.includes('Mesh_computerScreen') && child.material.name.includes('metalDark')) {
                child.material.color.set('#000000');
            }
            if (child.name.includes('Mesh_computerScreen_1') && child.material.name.includes('metal')) {
                child.material.color.set('#7a7a88');
            }

            // Keyboard & Mause
            if (child.name.includes('Mesh_computerKeyboard') && child.material.name.includes('metalDark')) {
                child.material.color.set('#3d3d3d');
            }
            if (child.name.includes('Mesh_computerKeyboard_1') && child.material.name.includes('metalMedium')) {
                child.material.color.set('#878787');
            }
            if (child.name.includes('computerMouse') && child.material.name.includes('metalDark')) {
                child.material.color.set('#878787');
            }

            // Chair
            if (child.name.includes('chairDesk') && child.material.name.includes('metalMedium')) {
                child.material.color.set('#000000');
            }
            if (child.name.includes('Mesh_chair') && child.material.name.includes('carpet')) {
                child.material.color.set('#454545');
            }
            if (child.name.includes('Mesh_chair_1') && child.material.name.includes('metalMedium')) {
                child.material.color.set('#5f5f5f');
            }

            // TV Ünitesi
            if (child.name.includes('Mesh_cabinetBedDrawer') && child.material.name.includes('wood')) {
                child.material.color.set('#4b2e0c');
            }

            // Kapı ve Dolaplar
            if (child.name.includes('Mesh_door') && child.material.name.includes('wood')) {
                child.material.color.set('#6a6a6a');
            }

            // Oturma grubu
            if (child.name.includes('Mesh_loungeSofaCorner') && child.material.name.includes('carpet')) {
                child.material.color.set('#c0c0c0');
            }

            // Duvarlar
            if (child.name.includes('Mesh_wallHalf') && child.material.name.includes('wood')) {
                child.material.color.set('#171e2b');
            }
            if (child.name.includes('Mesh_wallHalf_1') && child.material.name.includes('_defaultMat')) {
                child.material.color.set('#0f192d');
            }
            if (child.name.includes('Mesh_wallHalf_2') && child.material.name.includes('metalDark')) {
                child.material.color.set('#0f192d');
            }

            // Pencere
            if (child.name.includes('Mesh_wallWindow') && child.material.name.includes('wood')) {
                child.material.color.set('#0f192d');
            }
            if (child.name.includes('Mesh_wallWindow_1') && child.material.name.includes('metalDark')) {
                child.material.color.set('#ffffff');
            }
            if (child.name.includes('Mesh_wallWindow_2') && child.material.name.includes('_defaultMat')) {
                child.material.color.set('#0f192d');
            }
            if (child.name.includes('Mesh_window_1') && child.material.name.includes('wood')) {
                child.material = child.material.clone();
                child.material.color.set("#fffbfb");
            }

            // Halılar
            if (child.name.includes('Mesh_rugRectangle') && child.material.name.includes('carpet')) {
                child.material.color.set('#9b9e9e');
            }
            if (child.name.includes('Mesh_rugRectangle_1') && child.material.name.includes('carpetDarker')) {
                child.material.color.set('#c8c8c8');
            }

            if (child.name.includes('Mesh_rugSquare') && child.material.name.includes('carpet')) {
                child.material.color.set('#9b9e9e');
            }
            if (child.name.includes('Mesh_rugSquare_1') && child.material.name.includes('carpetDarker')) {
                child.material.color.set('#c8c8c8');
            }

            if (child.name.includes('Mesh_rugRound') && child.material.name.includes('carpet')) {
                child.material.color.set('#6a0d0d');
            }
            if (child.name.includes('Mesh_rugRound_1') && child.material.name.includes('carpetDarker')) {
                child.material.color.set('#dedede');
            }

            // Zemin
            if (child.name.includes('floorFull') && child.material.name.includes('wood')) {
                child.material.color.set('#cfb39d');
            }


            // GECE AYARI: Ekranlar ve lambalar parlasın
            const isScreen = child.name.includes('computerScreen') || child.name.includes('laptop');
            const isLamp = child.name.includes('lamp') || child.name.includes('Light');

            if (isScreen || isLamp) {
                child.material = child.material.clone(); // Diğerlerini etkilemesin
                if (isNight) {
                    child.material.emissive.set(isScreen ? "#0b0b0d" : "#aeb100"); // Ekran mavi, lamba sarı parlasın
                    child.material.emissiveIntensity = 2; // Parlama gücü
                } else {
                    child.material.emissiveIntensity = 0; // Gündüz kapalı
                }
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
