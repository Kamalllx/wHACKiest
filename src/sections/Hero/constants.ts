export interface CoordinateInfo {
  x: number;
  y: number;
  ground: number;
}

export const MOBILELOCATIONS: Record<number, CoordinateInfo> = {
  4: { x: -240, y: 150, ground: 880 },
  13: { x: 0, y: 150, ground: 880 },
  16: { x: 180, y: 150, ground: 880 },
  5: { x: 460, y: 150, ground: 850 },
  7: { x: 100, y: 0, ground: 700 },
  12: { x: 0, y: 0, ground: 750 },
  22: { x: -200, y: 0, ground: 725 },
  21: { x: -200, y: 0, ground: 625 },
  1: { x: -150, y: 0, ground: 600 },
  19: { x: 50, y: 0, ground: 525 },
  6: { x: 500, y: 0, ground: 700 },
  18: { x: 300, y: 0, ground: 600 },
  14: { x: 650, y: 0, ground: 890 },
  17: { x: 700, y: 0, ground: 750 },
  15: { x: 1000, y: 0, ground: 850 },
  9: { x: 950, y: 0, ground: 740 },
  10: { x: 900, y: 0, ground: 675 },
  11: { x: 750, y: 0, ground: 625 },
  8: { x: 1300, y: 0, ground: 800 },
  3: { x: 1200, y: 0, ground: 550 },
  2: { x: 900, y: 0, ground: 645 },
  20: { x: 450, y: 0, ground: 950 },
  24: { x: 300, y: 0, ground: 800 },
  23: { x: 700, y: 0, ground: 925 },
};

export const DESKTOPLOCATIONS: Record<number, CoordinateInfo> = {
  4: { x: -240, y: 150, ground: 880 },
  13: { x: -25, y: 150, ground: 880 },
  16: { x: 180, y: 150, ground: 880 },
  5: { x: 460, y: 150, ground: 850 },
  7: { x: -200, y: 0, ground: 725 },
  12: { x: -400, y: 0, ground: 900 },
  22: { x: -550, y: 0, ground: 900 },
  21: { x: -225, y: 0, ground: 800 },
  1: { x: -500, y: 0, ground: 720 },
  19: { x: -50, y: 0, ground: 550 },
  6: { x: 500, y: 0, ground: 700 },
  18: { x: 275, y: 0, ground: 700 },
  14: { x: 650, y: 0, ground: 890 },
  17: { x: 700, y: 0, ground: 750 },
  15: { x: 1000, y: 0, ground: 850 },
  9: { x: 1200, y: 0, ground: 760 },
  10: { x: 1000, y: 0, ground: 675 },
  11: { x: 800, y: 0, ground: 625 },
  8: { x: 1300, y: 0, ground: 850 },
  3: { x: 1500, y: 0, ground: 710 },
  2: { x: 800, y: 0, ground: 630 },
  20: { x: 450, y: 0, ground: 950 },
  24: { x: 300, y: 0, ground: 800 },
  23: { x: 700, y: 0, ground: 925 },
};

