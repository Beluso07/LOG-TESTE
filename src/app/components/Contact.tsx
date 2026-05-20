import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 9 9999-9999",
    sub: "Atendimento imediato",
    href: "https://wa.me/5511999999999",
    color: "#25D366",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.2)",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 3333-4444",
    sub: "Seg. a Sex. 8h–18h",
    href: "tel:+551133334444",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@transjund.com.br",
    sub: "Resposta em até 4h",
    href: "mailto:contato@transjund.com.br",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.1)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: MapPin,
    label: "Área de Atuação",
    value: "Estado de São Paulo",
    sub: "645+ municípios atendidos",
    href: "#",
    color: "#FB923C",
    bg: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.2)",
  },
];

const FOOTER_LINKS = [
  { label: "Sobre a Empresa", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Clientes", href: "#clientes" },
  { label: "Cotação", href: "#cotacao" },
];

export function Contact() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contato"
        style={{
          background: "#0B1D3A",
          padding: "100px 0 0",
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
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            pointerEvents: "none",
          }}
        />

        {/* Accent Orbs */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,79,204,0.1) 0%, transparent 65%)",
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
            style={{ textAlign: "center", marginBottom: 60 }}
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
                Contato
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
              Vamos conversar sobre a sua operação
            </h2>

            <p
              style={{
                fontSize: 15.5,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 440,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Nossa equipe está pronta para entender suas necessidades e estruturar a melhor
              solução logística.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
              marginBottom: 64,
            }}
          >
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, sub, href, color, bg, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                onClick={href.startsWith("#") ? (e) => { e.preventDefault(); scrollTo(href); } : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "26px 24px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = bg;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: bg,
                    border: `1px solid ${border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={20} color={color} />
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    marginBottom: 5,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)" }}>{sub}</div>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, #1541B8 0%, #2563EB 100%)",
              borderRadius: 20,
              padding: "44px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 64,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                Pronto para otimizar sua logística?
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                Fale agora com nossa equipe e solicite uma cotação personalizada.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20uma%20cotação%20de%20frete."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#25D366",
                  color: "#fff",
                  padding: "13px 24px",
                  borderRadius: 10,
                  fontSize: 14.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <MessageCircle size={17} />
                Falar no WhatsApp
              </a>
              <button
                onClick={() => scrollTo("#cotacao")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  padding: "13px 24px",
                  borderRadius: 10,
                  fontSize: 14.5,
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }}
              >
                Solicitar Cotação
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "40px 28px",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, #1541B8, #3B82F6)",
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path d="M3 11L11 4L19 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 9.5V17.5C5 18.05 5.45 18.5 6 18.5H9V14H13V18.5H16C16.55 18.5 17 18.05 17 17.5V9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: "#fff",
                  }}
                >
                  TRANSJUND
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Transporte & Logística
                </div>
              </div>
            </div>

            {/* Nav Links */}
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 13,
                    fontWeight: 500,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#93C5FD")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Copyright */}
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, textAlign: "right" }}>
              © 2026 Transjund Transporte & Logística.
              <br />
              Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
