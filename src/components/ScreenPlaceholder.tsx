import { Img } from "remotion";
import { logo } from "../brand/assets";
import { font } from "../brand/fonts";
import { color, radius } from "../brand/tokens";

// Recreación ilustrativa de Operaciones › Causaciones con datos de prueba.
// Solo para maquetar: en el video final va la grabación real de la plataforma.
const ROWS = [
  { proveedor: "Café y Catering Empresarial S.A.S.", total: "$ 535.500", estado: "Pre-causada" },
  { proveedor: "Asesorías Jurídicas del Norte S.A.S.", total: "$ 2.975.000", estado: "Pre-causada" },
  { proveedor: "Ferretería La Treinta S.A.S.", total: "$ 809.200", estado: "Aprobada" },
  { proveedor: "Transportes del Valle S.A.S.", total: "$ 523.600", estado: "Aprobada" },
  { proveedor: "Papelería El Centro S.A.S.", total: "$ 380.800", estado: "Pendiente" },
] as const;

const tagStyle = (estado: (typeof ROWS)[number]["estado"]): React.CSSProperties => {
  if (estado === "Aprobada") return { background: color.emerald20, color: color.emerald100 };
  if (estado === "Pre-causada") return { background: color.yellow20, color: color.yellow100 };
  return { background: color.gray200, color: color.gray700 };
};

export const ScreenPlaceholder: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%", fontFamily: font.sans, background: color.white }}>
      <div
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 32px",
          borderBottom: `1px solid ${color.gray200}`,
        }}
      >
        <Img src={logo.wordmark} style={{ height: 28 }} />
        <span style={{ fontSize: 18, color: color.gray500 }}>Operaciones › Causaciones</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 16,
            color: color.gray500,
            border: `1px dashed ${color.gray500}`,
            borderRadius: radius.pill,
            padding: "4px 12px",
          }}
        >
          Vista ilustrativa · reemplazar por grabación
        </span>
      </div>
      <div style={{ padding: "24px 32px", display: "grid", gap: 12 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 220px 200px",
            padding: "0 20px",
            fontSize: 20,
            fontWeight: 500,
            color: color.gray600,
          }}
        >
          <span>Proveedor</span>
          <span>Total</span>
          <span>Estado</span>
        </div>
        {ROWS.map((row) => (
          <div
            key={row.proveedor}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 220px 200px",
              alignItems: "center",
              height: 64,
              padding: "0 20px",
              borderRadius: 4,
              background: color.gray100,
              fontSize: 20,
              color: color.gray700,
            }}
          >
            <span>{row.proveedor}</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{row.total}</span>
            <span
              style={{
                justifySelf: "start",
                padding: "4px 14px",
                borderRadius: 4,
                fontSize: 18,
                ...tagStyle(row.estado),
              }}
            >
              {row.estado}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
