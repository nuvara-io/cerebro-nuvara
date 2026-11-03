// Normalización de texto compartida por el enrutador y la lectura de nodos.

// Minúsculas, sin tildes y con un recorte simple de plurales, infinitivos y
// vocal final, para que "recargas", "recargar" y "recargo", o "crear" y
// "creo", se comparen igual.
function raiz(palabra: string) {
  let p = palabra;
  if (p.length > 5 && p.endsWith("es")) p = p.slice(0, -2);
  else if (p.length > 3 && p.endsWith("s")) p = p.slice(0, -1);
  // Verbos en plural: "cuestan", "tienen" y "ofrecen" se leen como "cuesta",
  // "tiene" y "ofrece".
  else if (p.length > 4 && /[ae]n$/.test(p)) p = p.slice(0, -1);
  if (p.length > 4 && /[aei]r$/.test(p)) p = p.slice(0, -2);
  else if (p.length > 3 && /[aeiou]$/.test(p)) p = p.slice(0, -1);
  return SINONIMOS[p] ?? p;
}

// Raíces distintas que en una pregunta dicen lo mismo. "Costo" no entra:
// en contabilidad "costo de ventas" no es un precio.
const SINONIMOS: Record<string, string> = {
  val: "cuest", // "¿cuánto vale?" / "¿cuánto valen?" = "¿cuánto cuesta?"
};

export function palabras(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(raiz);
}
