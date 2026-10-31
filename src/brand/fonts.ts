import { loadFont } from "@remotion/google-fonts/Poppins";

// Línea de redes: Poppins en todo. Bold (700) para títulos y palabras destacadas,
// Regular (400) para el cuerpo, SemiBold (600) para botones.
const poppins = loadFont("normal", { weights: ["400", "600", "700"], subsets: ["latin", "latin-ext"] });

export const font = {
  sans: poppins.fontFamily,
} as const;
