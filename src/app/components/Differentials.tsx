import { motion } from "motion/react";
import { Shield, CheckCircle, Headphones, MapPin, Eye, Zap } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Shield,
    title: "Segurança nas Entregas",
    description:
      "Monitoramento em tempo real, protocolos rígidos de segurança e cobertura para cada carga transportada.",
  },
  {
    icon: CheckCircle,
    title: "Compromisso Operacional",
    description:
      "Processos bem definidos e equipe treinada para garantir o cumprimento de prazos e acordos comerciais.",
  },
  {
    icon: Headphones,
    title: "Atendimento Corporativo",
    description:
      "Canal de comunicação direto, responsivo e focado em resolver demandas com agilidade e transparência.",
  },
  {
    icon: MapPin,
    title: "Cobertura Estadual Total",
    description:
      "Atendimento completo em todo o estado de São Paulo, com capilaridade logística e rotas otimizadas.",
  },
  {
    icon: Eye,
    title: "Rastreabilidade Completa",
    description:
      "Visibilidade em tempo real da sua carga, do ponto de coleta até a confirmação da entrega final.",
  },
  {
    icon: Zap,
    title: "Expertise em E-commerce",
    description:
      "Entendemos os desafios do comércio digital e entregamos soluções alinhadas ao seu volume e ritmo.",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      style={{
        background: "#0B1D3A",
        padding: "100px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          pointerEvents: "none",
        }}
      />

      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,79,204,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 100,
              padding: "5px 14px",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3B82F6",
                boxShadow: "0 0 8px rgba(59,130,246,0.7)",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#93C5FD",
                textTransform: "uppercase",
              }}
            >
              Por que a Transjund
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Diferenciais que fazem a diferença
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Uma operação logística que você pode monitorar, confiar e escalar junto com o seu
            negócio.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {DIFFERENTIALS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "30px 28px",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(37,99,235,0.08)",
                borderColor: "rgba(59,130,246,0.25)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(30,79,204,0.3), rgba(37,99,235,0.15))",
                  border: "1px solid rgba(59,130,246,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Icon size={22} color="#60A5FA" />
              </div>

              <h3
                style={{
                  fontSize: 16.5,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
            marginTop: 64,
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
