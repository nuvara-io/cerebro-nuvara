import { BadgeCheck, FileText, FileSignature, Inbox, Users } from "lucide-react";
import { font } from "../../brand/fonts";
import { color } from "../../brand/tokens";
import { Backdrop } from "../../components/Backdrop";
import { Emphasis } from "../../components/Emphasis";
import { useFormato, Categoria, MARGEN, Pie, Tarjeta, texto, Wordmark } from "./kit";

// M2 · Facturación electrónica (1080×1350, fondo gris con marca de agua).
// Copy desde red/facturacion-electronica-y-radian.md. El módulo se cotiza: sin precios.

const DOCUMENTOS = [
  { icono: FileText, texto: "*Factura de venta* con sus notas crédito y débito" },
  { icono: FileSignature, texto: "*Documento soporte* para compras a no obligados a facturar" },
  { icono: Inbox, texto: "*Eventos RADIAN* de las facturas que recibes a crédito" },
  { icono: Users, texto: "*Nómina electrónica* con sus notas de ajuste" },
] as const;

const titular: React.CSSProperties = texto(72, { fontWeight: 700, lineHeight: 1.05, whiteSpace: "nowrap" });

export const FacturacionElectronica: React.FC = () => {
  const f = useFormato();
  return (
  <>
    <Backdrop format="post" />
    <Wordmark />

    <div style={{ position: "absolute", left: MARGEN, right: MARGEN, top: f.contenido, display: "grid", gap: f.hueco }}>
      <Categoria texto="FACTURACIÓN ELECTRÓNICA" />
      <div>
        <p style={{ ...titular, color: color.accent }}>Factura donde</p>
        <p style={{ ...titular, color: color.textTitle }}>ya causas.</p>
      </div>
      <p style={texto(31, { color: color.textBody })}>
        <Emphasis text="Emite ante la DIAN desde la misma plataforma, con *una sola habilitación* para todos tus documentos." />
      </p>

      <div style={{ display: "grid", gap: 22, marginTop: 6 }}>
        {DOCUMENTOS.map(({ icono: Icono, texto: t }) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 76,
                height: 76,
                flexShrink: 0,
                borderRadius: "50%",
                background: color.accent,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icono size={36} color={color.white} strokeWidth={2.1} />
            </div>
            <p style={{ ...texto(29, { color: color.textBody, lineHeight: 1.25 }), fontFamily: font.sans }}>
              <Emphasis text={t} />
            </p>
          </div>
        ))}
      </div>
    </div>

    <Tarjeta
      icono={<BadgeCheck size={52} color={color.accent} strokeWidth={1.75} />}
      style={{ position: "absolute", left: MARGEN, right: MARGEN, bottom: f.tarjeta }}
    >
      Tus ventas emitidas <strong style={{ color: color.accent }}>quedan listas para causar.</strong>
    </Tarjeta>

    <Pie />
  </>
  );
};
