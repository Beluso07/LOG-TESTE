import { motion } from "motion/react";
import { Package, Truck, CalendarCheck, ShoppingBag, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Package,
    title: "Carga Fracionada",
    description:
      "Transporte de volumes individuais com coleta e entrega individualizadas, rastreamento completo e máxima eficiência operacional.",
    highlight: "Ideal para pequenos e médios volumes",
    color: "#1541B8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Truck,
    title: "Entregas Dedicadas",
    description:
      "Veículo exclusivo para a sua carga com maior agilidade, flexibilidade e controle operacional. Seu pedido é o único.",
    highlight: "Máxima agilidade e prioridade",
    color: "#0B1D3A",
    bg: "#F8FAFF",
    border: "#E2E8F0",
  },
  {
    icon: CalendarCheck,
    title: "Coleta Programada",
    description:
      "Planejamento de coletas de acordo com a necessidade do seu negócio, reduzindo custos e otimizando fluxos operacionais.",
    highlight: "Redução de custos e otimização",
    color: "#0B1D3A",
    bg: "#F8FAFF",
    border: "#E2E8F0",
  },
  {
    icon: ShoppingBag,
    title: "Logística para E-commerce",
    description:
      "Soluções integradas para operações digitais com entregas rápidas, confiáveis e rastreamento em tempo real para o consumidor final.",
    highlight: "Especializado em comércio digital",
    color: "#1541B8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
];

export function Services() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="servicos"
      style={{
        background: "#F8FAFF",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: 100,
              padding: "5px 14px",
              marginBottom: 18,
            }}
          >
            <div
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#1D4ED8",
                textTransform: "uppercase",
              }}
            >
              Nossos Serviços
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 800,
              color: "#0B1D3A",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Soluções completas para sua operação logística
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#6B7280",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Do ponto de coleta à entrega final, estruturamos cada operação com precisão e
            comprometimento.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {SERVICES.map(({ icon: Icon, title, description, highlight, color, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                background: "#fff",
                border: `1px solid ${border}`,
                borderRadius: 18,
                padding: "34px 30px",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 40px rgba(30,79,204,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                  borderRadius: "18px 18px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: bg,
                  border: `1px solid ${border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <Icon size={24} color={color} />
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0B1D3A",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: 14.5,
                  color: "#6B7280",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {description}
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: 8,
                  padding: "5px 12px",
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  {highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 52 }}
        >
          <p style={{ fontSize: 15, color: "#6B7280", marginBottom: 20 }}>
            Precisa de uma solução personalizada para a sua operação?
          </p>
          <button
            onClick={() => scrollTo("#cotacao")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #1541B8, #2563EB)",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 9,
              fontSize: 14.5,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 18px rgba(30,79,204,0.3)",
              letterSpacing: "0.02em",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(30,79,204,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(30,79,204,0.3)";
            }}
          >
            Solicitar Cotação Personalizada
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
