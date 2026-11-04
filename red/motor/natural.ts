// Examen de lenguaje natural: mide si el enrutador llega al nodo correcto con
// preguntas escritas como las escribe un usuario. bun red/motor/natural.ts [--fallas] [--reserva]
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buscar, candidatos } from "./buscar";
import { RAIZ_RED } from "./indice";
import { elegirCandidato } from "./local";

const casos = readFileSync(join(RAIZ_RED, "pruebas/natural.tsv"), "utf8")
  .split("\n")
  .filter((l) => l.trim() && !l.startsWith("#"))
  .map((l) => { const [grupo, pregunta, nodos] = l.split("\t"); return { grupo, pregunta, nodos: nodos.split(",") }; });

const verFallas = process.argv.includes("--fallas");
const verReserva = process.argv.includes("--reserva");
const conModelo = process.argv.includes("--modelo");
for (const grupo of ["ajuste", "reserva"]) {
  const delGrupo = casos.filter((c) => c.grupo === grupo);
  let bien = 0, sinRespuesta = 0, entreCandidatos = 0;
  for (const c of delGrupo) {
    const b = buscar(c.pregunta, "P");
    const elegido = conModelo ? await elegirCandidato(c.pregunta, "P") : null;
    const nodos = elegido ? [elegido] : b.nodos;
    const ok = nodos.length === 1 && c.nodos.includes(nodos[0]);
    if (ok) bien++;
    if ([...b.nodos, ...candidatos(c.pregunta, "P").map((n) => n.id)].some((id) => c.nodos.includes(id))) entreCandidatos++;
    if (!nodos.length) sinRespuesta++;
    if (!ok && verFallas && (grupo === "ajuste" || verReserva))
      console.log(`  ${c.pregunta}\n    → ${nodos.join(" + ") || "(sin tema)"}   esperaba ${c.nodos[0]}`);
  }
  console.log(`${grupo}: ${bien}/${delGrupo.length} (${Math.round((bien / delGrupo.length) * 100)} %) · sin tema: ${sinRespuesta} · entre lo que ve un agente: ${entreCandidatos}/${delGrupo.length} (${Math.round((entreCandidatos / delGrupo.length) * 100)} %)`);
}
