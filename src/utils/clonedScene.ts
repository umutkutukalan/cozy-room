import * as THREE from 'three';

export interface cloneSceneProps {
  child: THREE.Mesh;
  childName: string;
  childMaterialName: string;
  newColor: string;
}

export const handleCloneScene = ({
  child,
  childName,
  childMaterialName,
  newColor,
}: cloneSceneProps) => {
  // 1. Materyalin bir dizi olup olmadığını kontrol edelim (Bazı modellerde çoklu materyal olur)
  // Eğer dizi ise şimdilik ilk materyali alıyoruz, değilse kendisini.
  const material = Array.isArray(child.material) ? child.material[0] : child.material;

  if (
    child.name.includes(childName) &&
    material.name.includes(childMaterialName)
  ) {
    // 2. .clone() metodunun tanınması için materyali kopyalıyoruz
    // TypeScript Material tipinde .clone() olduğunu bilir ama atama yaparken tip uyuşmazlığı diyebilir
    const clonedMaterial = material.clone();

    // 3. Renk ataması için tipi MeshStandardMaterial'a zorluyoruz (Cast)
    if (clonedMaterial instanceof THREE.MeshStandardMaterial) {
      clonedMaterial.color.set(newColor);
      
      // 4. Klonlanmış ve rengi değişmiş materyali objeye geri atıyoruz
      child.material = clonedMaterial;
    }
  }
};