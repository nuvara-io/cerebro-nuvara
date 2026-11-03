// Tokens del Cerebro gráfico núvara (https://claude.ai/artifact/44mTTe4PPiDv33UWqWsaPL).
// Si cambia un valor allá, se cambia acá: este archivo es su espejo en código.
// Línea gráfica: la de las piezas de redes (Poppins, dos tonos, fondo gris con marca de agua).
import { Easing } from "remotion";

export const color = {
  // Acento de la línea de redes (= ds-electric-blue-500 de la app)
  accent: "#1e85ff",
  accentDeep: "#1a60f8",
  accentTint: "#eef6ff",

  // Paleta oficial del key visual
  brandAzul: "#2e81ed",
  brandVerdeTurquesa: "#49cea7",
  // Del logo maestro (NÚVARA LOGO.ai); el PDF del key visual decía #005256, pero no coincide con el logo
  brandAzulPetroleo: "#09695c",
  brandNavy: "#23357d",

  // Texto, medido en las piezas de redes
  textTitle: "#494f56",
  textBody: "#737373",

  // DS núvara 2026 (apps/web/src/app/tokens.css)
  electricBlue400: "#48a8ff",
  yellow100: "#a65f00",
  yellow20: "#fef9c2",
  emerald100: "#007a55",
  emerald20: "#d0fae5",
  gray700: "#364153",
  gray600: "#4a5565",
  gray500: "#6a7282",
  gray200: "#e5e7eb",
  gray100: "#f3f4f6",
  white: "#ffffff",
} as const;

// Degradado de marca (gradient-03 del cerebro gráfico): azul → turquesa
const GRADIENTE_03 = { inicio: "#328be5", fin: "#45c3ae" } as const;

export const gradient = {
  // Fondo de toda escena: gris claro arriba a la izquierda, blanco abajo a la derecha
  backdrop: "linear-gradient(135deg, #dbdbdb 0%, #efefef 45%, #fefefe 100%)",
  // Palabra con degradado, bordes de comparativas y bloque degradado
  marca: `linear-gradient(135deg, ${GRADIENTE_03.inicio} 0%, ${GRADIENTE_03.fin} 100%)`,
  // Fondo de piezas de producto: turquesa arriba, redes-azul abajo. El turquesa
  // queda en la franja del wordmark: el blanco sobre él no llega a 3:1.
  fondoMarca: `linear-gradient(180deg, ${GRADIENTE_03.fin} 0%, ${GRADIENTE_03.inicio} 24%, ${color.accent} 100%)`,
} as const;

// Escala para 1080p. Todo en Poppins: Bold para lo que se destaca, Regular para el resto.
export const type = {
  hero: { fontSize: 112, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em" },
  sceneTitle: { fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" },
  tagline: { fontSize: 80, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.01em" },
  statNumber: { fontSize: 120, fontWeight: 700, lineHeight: 1 },
  statLabel: { fontSize: 44, fontWeight: 400, lineHeight: 1.2 },
  badge: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 },
  button: { fontSize: 30, fontWeight: 600, lineHeight: 1.2 },
  caption: { fontSize: 40, fontWeight: 400, lineHeight: 1.3 },
} as const;

export const space = {
  marginX: 192,
  marginTop: 64,
  frameTop: 176,
  frameWidth: 1536,
  s24: 24,
  s48: 48,
  s64: 64,
} as const;

export const radius = {
  pill: 12,
  card: 16,
  frame: 16,
} as const;

export const shadow = {
  // Tarjetas blancas de las piezas de redes: sombra amplia y muy suave
  card: "0 12px 40px rgba(0,0,0,0.08)",
  frame: "0 24px 64px rgba(16,24,40,0.10)",
} as const;

// Duraciones en segundos: se convierten a frames con el fps de la composición
export const motion = {
  enter: 0.5,
  exit: 0.3,
  sceneGap: 0.8,
  countUp: 1.2,
  cursorMove: 0.6,
} as const;

// Entrada sin rebote: arranca rápido y se asienta suave
export const easeEnter = Easing.bezier(0.16, 1, 0.3, 1);
