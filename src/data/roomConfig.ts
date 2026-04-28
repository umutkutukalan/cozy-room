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

  // --- Arka duvar (Z=0'da)
  {
    id: "wall_half_arka_1",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 6],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_2",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 5.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_3",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_4",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 4.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_5",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_6",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 3.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_7",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_8",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 2.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_window",
    model: "/models/wallWindow.glb",
    position: [0.01, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_9",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_10",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 0.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_11",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_12",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, -0.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_13",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_14",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, -1.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_15",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 6.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_16",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 7],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_17",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 7.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  {
    id: "wall_half_arka_18",
    model: "/models/wallHalf.glb",
    position: [4, 0, 3.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_19",
    model: "/models/wallHalf.glb",
    position: [4, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_20",
    model: "/models/wallHalf.glb",
    position: [4, 0, 2.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_21",
    model: "/models/wallHalf.glb",
    position: [4, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_22",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 8],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "wall_half_arka_23",
    model: "/models/wallHalf.glb",
    position: [0.01, 0, 8.5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- Sağ duvar (X=3'te)
  {
    id: "wall_half_sag_1",
    model: "/models/wallHalf.glb",
    position: [0.5, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_2",
    model: "/models/wallHalf.glb",
    position: [1, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_3",
    model: "/models/wallHalf.glb",
    position: [1.5, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_4",
    model: "/models/wallHalf.glb",
    position: [2, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_5",
    model: "/models/wallHalf.glb",
    position: [2.5, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_6",
    model: "/models/wallHalf.glb",
    position: [3, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },


  // --- Sağ duvar devamı (X=3'te, Z=-2'ye kadar)
  {
    id: "wall_half_sag_7",
    model: "/models/wallHalf.glb",
    position: [0.5, 0, -2],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_8",
    model: "/models/wallHalf.glb",
    position: [1, 0, -2],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  
  // --- Sağ duvar devamı (X=3'te, Z=3.5'e kadar)
  {
    id: "wall_half_sag_9",
    model: "/models/wallHalf.glb",
    position: [0.5, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_10",
    model: "/models/wallHalf.glb",
    position: [1, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_11",
    model: "/models/wallHalf.glb",
    position: [1.5, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_12",
    model: "/models/wallHalf.glb",
    position: [2, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_13",
    model: "/models/wallHalf.glb",
    position: [2.5, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_14",
    model: "/models/wallHalf.glb",
    position: [3, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_15",
    model: "/models/wallHalf.glb",
    position: [3.5, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
  {
    id: "wall_half_sag_16",
    model: "/models/wallHalf.glb",
    position: [4, 0, 3.5],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },

  // --- 1. zemin taşları
  {
    id: "floor_full_11",
    model: "/models/floorFull.glb",
    position: [1, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_12",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_13",
    model: "/models/floorFull.glb",
    position: [2, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_14",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_15",
    model: "/models/floorFull.glb",
    position: [3, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 2. zemin taşları
  {
    id: "floor_full_21",
    model: "/models/floorFull.glb",
    position: [1, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_22",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_23",
    model: "/models/floorFull.glb",
    position: [2, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_24",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_25",
    model: "/models/floorFull.glb",
    position: [3, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 3. zemin taşları
  {
    id: "floor_full_31",
    model: "/models/floorFull.glb",
    position: [1, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_32",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_33",
    model: "/models/floorFull.glb",
    position: [2, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_34",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_35",
    model: "/models/floorFull.glb",
    position: [3, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 4. zemin taşları
  {
    id: "floor_full_41",
    model: "/models/floorFull.glb",
    position: [1, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_42",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_43",
    model: "/models/floorFull.glb",
    position: [2, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_44",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_45",
    model: "/models/floorFull.glb",
    position: [3, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 5. zemin taşları
  {
    id: "floor_full_51",
    model: "/models/floorFull.glb",
    position: [1, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_52",
    model: "/models/floorFull.glb",
    position: [1.5, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_53",
    model: "/models/floorFull.glb",
    position: [2, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_54",
    model: "/models/floorFull.glb",
    position: [2.5, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_55",
    model: "/models/floorFull.glb",
    position: [3, 0, -1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 6. zemin taşları
  {
    id: "floor_full_61",
    model: "/models/floorFull.glb",
    position: [1, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_62",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_63",
    model: "/models/floorFull.glb",
    position: [2, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_64",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_65",
    model: "/models/floorFull.glb",
    position: [3, 0, 4],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 7. zemin taşları
  {
    id: "floor_full_71",
    model: "/models/floorFull.glb",
    position: [3.5, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_72",
    model: "/models/floorFull.glb",
    position: [4, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_73",
    model: "/models/floorFull.glb",
    position: [4.5, 0, 3],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 8. zemin taşları
  {
    id: "floor_full_81",
    model: "/models/floorFull.glb",
    position: [3.5, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_82",
    model: "/models/floorFull.glb",
    position: [4, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_83",
    model: "/models/floorFull.glb",
    position: [4.5, 0, 2],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 9. zemin taşları
  {
    id: "floor_full_91",
    model: "/models/floorFull.glb",
    position: [3.5, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_92",
    model: "/models/floorFull.glb",
    position: [4, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_93",
    model: "/models/floorFull.glb",
    position: [4.5, 0, 1],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- 10. zemin taşları
  {
    id: "floor_full_101",
    model: "/models/floorFull.glb",
    position: [1, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_102",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_103",
    model: "/models/floorFull.glb",
    position: [2, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_104",
    model: "/models/floorFull.glb",
    position: [2.5, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_105",
    model: "/models/floorFull.glb",
    position: [3, 0, 5],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_106",
    model: "/models/floorFull.glb",
    position: [1, 0, 6],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },
  {
    id: "floor_full_107",
    model: "/models/floorFull.glb",
    position: [1.5, 0, 6],
    rotation: [0, Math.PI / 2, 0],
    interactive: true,
  },

  // --- Halılar
  {
    id: "rug_rectangle",
    model: "/models/rugRectangle.glb",
    position: [0.9, 0.1, 1.45],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "rug_square",
    model: "/models/rugSquare.glb",
    position: [0.6, 0.1, 2.5],
    rotation: [0, 0, 0],
    interactive: true,
  },
  {
    id: "rug_round",
    model: "/models/rugRound.glb",
    position: [1.65, 0.05, 2.5],
    rotation: [0, 0, 0],
    interactive: true,
  },

  // --- Bitkiler
  {
    id: "potted_plant",
    model: "/models/pottedPlant.glb",
    position: [2.9, 0.1, 1.3],
    rotation: [0, 0, 0],
    interactive: true,
  },

  // --- Kapı
  {
    id: "doorway",
    model: "/models/doorway.glb",
    position: [2.94, 0, 0],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },

  // --- Ceket Askısı
  {
    id: "coat_rack_standing",
    model: "/models/coatRackStanding.glb",
    position: [1.75, 0.1, 2.85],
    rotation: [0, Math.PI, 0],
    interactive: true,
  },
];
