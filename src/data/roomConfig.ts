export interface RoomItem {
  id: string;
  model: string; // Model dosyasının yolu
  position: [number, number, number]; // [x, y, z]
  rotation: [number, number, number]; // [x, y, z] (radyan cinsinden)
  interactive: boolean; // Tıklanabilir mi?
  action?: string; // Tıklanınca yapılacak aksiyon (örneğin 'openNotes')
  customColor?: string; // İsteğe bağlı: Modelin rengini değiştirmek için
  size?: number; // İsteğe bağlı: Modelin ölçeğini değiştirmek için
}

export const roomItems: RoomItem[] = [
  // --- Yatak
  {
    id: "bed_single",
    model: "/models/bedSingle.glb",
    position: [-0.2, 0, 1.3],
    rotation: [0, 0, 0],
    interactive: true,
  },
];
