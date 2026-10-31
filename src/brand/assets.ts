import { staticFile } from "remotion";

// Logos vectoriales oficiales, extraídos de "NÚVARA LOGO.ai" (Drive › Marketing › Branding › Logo).
// Tres versiones (horizontal, apilado, isotipo) en cinco tintas, siempre en dos tonos salvo la blanca.
export type LogoTinta = "azul" | "navy" | "turquesa" | "petroleo" | "blanco";
export const logoFile = (version: "horizontal" | "apilado" | "isotipo", tinta: LogoTinta) =>
  staticFile(`brand/logo/${version}-${tinta}.svg`);

export const logo = {
  // Sobre fondos claros
  wordmark: logoFile("horizontal", "azul"),
  isotipo: logoFile("isotipo", "azul"),
  // Sobre redes-azul, degradado de marca, foto con velo o colores oscuros
  wordmarkWhite: logoFile("horizontal", "blanco"),
  isotipoWhite: logoFile("isotipo", "blanco"),
} as const;

// nuvi-sad no se incluye: el Brand OS no permite llanto ni desesperación
export const nuvi = {
  onboarding: staticFile("nuvi/nuvi-onboarding.png"),
  celebrating: staticFile("nuvi/nuvi-celebrating.png"),
  ticket: staticFile("nuvi/nuvi-ticket.png"),
  fix: staticFile("nuvi/nuvi-fix.png"),
} as const;

export type NuviPose = keyof typeof nuvi;
