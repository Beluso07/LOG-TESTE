import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Shield, Clock, MapPin } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const TRUST_ITEMS = [
  { icon: Shield, label: "Entregas Seguras" },
  { icon: Clock, label: "Pontualidade Garantida" },
  { icon: MapPin, label: "Todo o Estado de SP" },
];

const STATS = [
  { value: "10+", label: "Anos de Mercado" },
  { value: "645+", label: "Municípios Atendidos" },
  { value: "98%", label: "Pontualidade" },
];

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(155deg, #071428 0%, #0B1E45 40%, #0D2360 70%, #071428 100%)",
      }}
    >
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          pointerEvents: "none",
        }}
      />

      {/* Animated Orb 1 */}
      <motion.div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)",
          top: -250,
          right: -150,
          pointerEvents: "none",
        }}
        animate={{ y: [0, -50, 25, -15, 0], x: [0, 30, -15, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Orb 2 */}
      <motion.div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)",
          bottom: -150,
          left: -100,
          pointerEvents: "none",
        }}
        animate={{ y: [0, 40, -20, 10, 0], x: [0, -20, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Animated Orb 3 */}
      <motion.div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,152,245,0.08) 0%, transparent 65%)",
          top: "40%",
          left: "55%",
          pointerEvents: "none",
        }}
        animate={{ y: [0, -30, 15, 0], x: [0, 20, -10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Diagonal accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          background: "linear-gradient(135deg, transparent 60%, rgba(30,79,204,0.06) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 28px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 760 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#3B82F6",
                  boxShadow: "0 0 8px rgba(59,130,246,0.8)",
                }}
              />
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#93C5FD",
                  textTransform: "uppercase",
                }}
              >
                Logística Especializada • São Paulo
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(38px, 5.5vw, 70px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Logística que{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              conecta São Paulo.
            </span>
            <br />
            Confiança que{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>define parcerias.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              marginBottom: 38,
              maxWidth: 600,
              fontWeight: 400,
            }}
          >
            Especialistas em cargas gerais para lojas e operações de e-commerce. Cobertura
            completa no estado de São Paulo com entregas pontuais, seguras e rastreadas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56 }}
          >
            <button
              onClick={() => scrollTo("#cotacao")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #1541B8 0%, #2563EB 100%)",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 24px rgba(30,79,204,0.5), 0 0 0 1px rgba(255,255,255,0.08) inset",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,79,204,0.6), 0 0 0 1px rgba(255,255,255,0.1) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(30,79,204,0.5), 0 0 0 1px rgba(255,255,255,0.08) inset";
              }}
            >
              Solicitar Cotação
              <ArrowRight size={17} />
            </button>

            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20de%20transporte."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.07)",
                color: "#fff",
                padding: "15px 28px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <MessageCircle size={17} />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 28,
            }}
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: "rgba(37,99,235,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color="#60A5FA" />
                </div>
                <span
                  style={{
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            padding: "32px 36px",
            minWidth: 240,
          }}
          className="hidden xl:block"
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 24,
            }}
          >
            Resultados Comprovados
          </div>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #fff, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 2,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            </div>
          ))}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, #2563EB, transparent)",
              marginTop: 8,
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to top, #ffffff08, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => scrollTo("#sobre")}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          style={{
            width: 1.5,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            borderRadius: 2,
          }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
