import { useGLTF } from "@react-three/drei";
import type { RoomItem } from "../data/roomConfig";
import { useEffect } from "react";
import { handleCloneScene } from "../utils/clonedScene";
import * as THREE from 'three';

const Item = ({ item, isNight }: { item: RoomItem, isNight: boolean }) => {

    const { scene } = useGLTF(item.model);

    // Modellerin birbirine karışmaması için her örneği (instance) kopyalıyoruz
    const clonedScene = scene.clone();

    useEffect(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                console.log(`Parça Adı: ${child.name}`);
                console.log(`Materyal Adı: ${child.material.name} - Renk: ${child.material.color.getHexString()}`);
            }
        });
    }, [scene]);

    clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {

            handleCloneScene({ child, childName: 'desk', childMaterialName: 'wood', newColor: '#6c4115' });

            handleCloneScene({ child, childName: 'bedSingle', childMaterialName: 'wood', newColor: '#565959' });

            handleCloneScene({ child, childName: 'pillow', childMaterialName: '', newColor: '#541a32' });

            handleCloneScene({ child, childName: 'bedSingle', childMaterialName: 'carpet', newColor: '#e9d2d2' });

            handleCloneScene({ child, childName: 'bedSingle', childMaterialName: 'metal', newColor: '#e7e7e7' });

            handleCloneScene({ child, childName: 'Mesh_cover', childMaterialName: 'carpet', newColor: '#b0b0b0' });

            handleCloneScene({ child, childName: 'Mesh_cover_1', childMaterialName: 'carpet', newColor: '#ffffff' });

            handleCloneScene({ child, childName: 'Mesh_laptop', childMaterialName: 'metalDark', newColor: '#C0C0C0' });

            handleCloneScene({ child, childName: 'Mesh_laptop_1', childMaterialName: 'metal', newColor: '#7c7c7c' });

            handleCloneScene({ child, childName: 'Mesh_laptop_2', childMaterialName: 'metalMedium', newColor: '#2d2d2d' });

            handleCloneScene({ child, childName: 'Mesh_computerScreen', childMaterialName: 'metalDark', newColor: '#000000' });

            handleCloneScene({ child, childName: 'Mesh_computerScreen_1', childMaterialName: 'metal', newColor: '#7a7a88' });

            // Keyboard & Mause
            handleCloneScene({ child, childName: 'Mesh_computerKeyboard', childMaterialName: 'metalDark', newColor: '#3d3d3d' });

            handleCloneScene({ child, childName: 'Mesh_computerKeyboard_1', childMaterialName: 'metalMedium', newColor: '#878787' });

            handleCloneScene({ child, childName: 'Mesh_computerMouse', childMaterialName: 'metalDark', newColor: '#878787' });

            // Chair
            handleCloneScene({ child, childName: 'Mesh_chair', childMaterialName: 'carpet', newColor: '#454545' });
            handleCloneScene({ child, childName: 'Mesh_chair_1', childMaterialName: 'metalMedium', newColor: '#5f5f5f' });

            // Kapı ve Dolaplar
            handleCloneScene({ child, childName: 'Mesh_door', childMaterialName: 'wood', newColor: '#6a6a6a' });

            // Oturma grubu
            handleCloneScene({ child, childName: 'Mesh_loungeSofaCorner', childMaterialName: 'carpet', newColor: '#c0c0c0' });

            // Duvarlar
            handleCloneScene({ child, childName: 'Mesh_wallHalf', childMaterialName: 'wood', newColor: '#171e2b' });

            handleCloneScene({ child, childName: 'Mesh_wallHalf_1', childMaterialName: '_defaultMat', newColor: '#0f192d' });

            handleCloneScene({ child, childName: 'Mesh_wallHalf_2', childMaterialName: 'metalDark', newColor: '#0f192d' });


            // Pencere
            handleCloneScene({ child, childName: 'Mesh_wallWindow', childMaterialName: 'wood', newColor: '#0f192d' });
            handleCloneScene({ child, childName: 'Mesh_wallWindow_1', childMaterialName: 'metalDark', newColor: '#ffffff' });
            handleCloneScene({ child, childName: 'Mesh_wallWindow_2', childMaterialName: '_defaultMat', newColor: '#0f192d' });
            handleCloneScene({ child, childName: 'Mesh_window_1', childMaterialName: 'wood', newColor: '#fffbfb' });

            // Halılar
            handleCloneScene({ child, childName: 'Mesh_rugRectangle', childMaterialName: 'carpet', newColor: '#9b9e9e' });
            handleCloneScene({ child, childName: 'Mesh_rugRectangle_1', childMaterialName: 'carpetDarker', newColor: '#c8c8c8' });

            handleCloneScene({ child, childName: 'Mesh_rugSquare', childMaterialName: 'carpet', newColor: '#9b9e9e' });
            handleCloneScene({ child, childName: 'Mesh_rugSquare_1', childMaterialName: 'carpetDarker', newColor: '#c8c8c8' });

            handleCloneScene({ child, childName: 'Mesh_rugRound', childMaterialName: 'carpet', newColor: '#6a0d0d' });
            handleCloneScene({ child, childName: 'Mesh_rugRound_1', childMaterialName: 'carpetDarker', newColor: '#dedede' });

            // Zemin
            handleCloneScene({ child, childName: 'floorFull', childMaterialName: 'wood', newColor: '#cfb39d' });

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
