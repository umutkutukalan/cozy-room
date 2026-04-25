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

  // Çalışma Masası ve Sandalyesi
  {
    id: "desk_1",
    model: "/models/desk.glb",
    position: [1.2, 0.2, 0.6], // X: 1 birim sağda, Z: 1 birim önde (Kutunun içinde!)
    rotation: [0, 0, 0],
    interactive: true,
    action: "openNotes",
  },
  {
    id: "chair_desk",
    model: "/models/chairDesk.glb",
    position: [1.7, 0.1, 0.4],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },

  // --- Masaüstü eşyaları
  {
    id: "laptop",
    model: "/models/laptop.glb",
    position: [1.32, 0.6, 0.4],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "computer_screen",
    model: "/models/computerScreen.glb",
    position: [1.58, 0.6, 0.26],
    rotation: [0, 20 - Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "computer_keyboard",
    model: "/models/computerKeyboard.glb",
    position: [1.35, 0.6, 0.58],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "computer_mouse",
    model: "/models/computerMouse.glb",
    position: [1.7, 0.6, 0.5],
    rotation: [0, 0, 0],
    interactive: true,
  },
];
