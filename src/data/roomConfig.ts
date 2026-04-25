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

  // --- Bookcase
  {
    id: "bookcase_closed",
    model: "/models/bookcaseClosed.glb",
    position: [2, 0, 0.4],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "books_1",
    model: "/models/books.glb",
    position: [2.35, 0.7, 0.7],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "books_2",
    model: "/models/books.glb",
    position: [2.43, 0.7, 0.7],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "books_3",
    model: "/models/books.glb",
    position: [2.3, 0.42, 0.65],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "lamp_round_table",
    model: "/models/lampRoundTable.glb",
    position: [2.3, 1, 0.5],
    rotation: [0, 0, 0],
    interactive: true,
  },

  // Tv Ünitesi
  {
    id: "cabinet_bed_drawer_1",
    model: "/models/cabinetBedDrawer.glb",
    position: [2.7, 0, 1.8],
    rotation: [0, 0 - Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "cabinet_bed_drawer_2",
    model: "/models/cabinetBedDrawer.glb",
    position: [2.7, 0, 1.6],
    rotation: [0, 0 - Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "cabinet_bed_drawer_3",
    model: "/models/cabinetBedDrawer.glb",
    position: [2.7, 0, 1.4],
    rotation: [0, 0 - Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "television_modern",
    model: "/models/televisionModern.glb",
    position: [3.5, 1, 2.45],
    rotation: [0, 0 - Math.PI / 2, 0],
    interactive: true,
  },

  // Dolaplar
  {
    id: "kitchen_fridge_built_in_1",
    model: "/models/kitchenFridgeBuiltIn.glb",
    position: [2.4, 0, 2.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "kitchen_fridge_built_in_2",
    model: "/models/kitchenFridgeBuiltIn.glb",
    position: [2.8, 0, 2.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },

  // Oturma Grubu
  {
    id: "sofa_lounge",
    model: "/models/loungeSofaCorner.glb",
    position: [1.1, 0, 1.98],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "table_coffee_square",
    model: "/models/tableCoffeeSquare.glb",
    position: [1.05, 0, 1.92],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
];
