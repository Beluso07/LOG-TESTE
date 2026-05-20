import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "10+", label: "Anos de Mercado", sub: "Experiência consolidada no setor" },
  { value: "645+", label: "Municípios Atendidos", sub: "Cobertura em todo o estado de SP" },
  { value: "200k+", label: "Entregas Realizadas", sub: "Histórico de operações concluídas" },
  { value: "98%", label: "Índice de Pontualidade", sub: "Compromisso com prazos acordados" },
];

const PILLARS = [
  "Operação estruturada e processos bem definidos",
  "Equipe treinada e comprometida com cada cliente",
  "Transparência e comunicação em todas as etapas",
  "Foco em e-commerce e varejo físico",
];

export function About() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="sobre"
      style={{
        background: "#FFFFFF",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2563EB",
                }}
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
                Sobre a Empresa
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                color: "#0B1D3A",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Sólidos, eficientes e comprometidos com cada entrega
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#4B5563",
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              A Transjund é uma transportadora especializada em cargas gerais para o varejo físico e
              e-commerce. Atuamos em todo o estado de São Paulo com uma operação estruturada,
              processos bem definidos e foco total na satisfação das empresas que confiam em nosso
              serviço.
            </p>

            <p
              style={{
                fontSize: 15.5,
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              Nosso modelo operacional garante rastreabilidade, comunicação transparente e
              entregas dentro dos prazos acordados — porque sabemos que cada pedido representa o
              compromisso da sua empresa com o seu cliente.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {PILLARS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2
                    size={18}
                    color="#2563EB"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#cotacao")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #1541B8, #2563EB)",
                color: "#fff",
                padding: "13px 26px",
                borderRadius: 9,
                fontSize: 14.5,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 18px rgba(30,79,204,0.35)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(30,79,204,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(30,79,204,0.35)";
              }}
            >
              Solicitar uma Cotação
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right Column — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              {STATS.map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{
                    background: i % 2 === 0 ? "#F8FAFF" : "#0B1D3A",
                    border: i % 2 === 0 ? "1px solid #E0EAFF" : "none",
                    borderRadius: 16,
                    padding: "30px 24px",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: i % 2 === 0
                      ? "0 12px 32px rgba(30,79,204,0.12)"
                      : "0 12px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: i % 2 === 0 ? "#1541B8" : "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: i % 2 === 0 ? "#0B1D3A" : "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: i % 2 === 0 ? "#6B7280" : "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Accent strip */}
            <div
              style={{
                marginTop: 18,
                padding: "20px 24px",
                background: "linear-gradient(135deg, #1541B8, #3B82F6)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                  Empresa confiável e estabelecida
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                  Mais de uma década de operações logísticas no estado de São Paulo
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
