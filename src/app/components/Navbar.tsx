import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Clientes", href: "#clientes" },
  { label: "Cotação", href: "#cotacao" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        boxShadow: scrolled ? "0 2px 40px rgba(0,0,0,0.07)" : "none",
        transition: "all 0.35s ease",
      }}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, #1541B8, #2563EB)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(30,79,204,0.35)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 11L11 4L19 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 9.5V17.5C5 18.05 5.45 18.5 6 18.5H9V14H13V18.5H16C16.55 18.5 17 18.05 17 17.5V9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span
              style={{
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: scrolled ? "#0B1D3A" : "#ffffff",
                transition: "color 0.3s",
                lineHeight: 1.15,
              }}
            >
              TRANSJUND
            </span>
            <span
              style={{
                fontSize: 8.5,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: scrolled ? "#6B7280" : "rgba(255,255,255,0.55)",
                transition: "color 0.3s",
                textTransform: "uppercase",
              }}
            >
              TRANSPORTE & LOGÍSTICA
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 30 }}
          className="hidden lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                color: scrolled ? "#4B5563" : "rgba(255,255,255,0.82)",
                fontSize: 13.5,
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
                padding: "6px 0",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1E4FCC")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#4B5563" : "rgba(255,255,255,0.82)")
              }
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }} className="hidden lg:flex">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: scrolled ? "#374151" : "rgba(255,255,255,0.82)",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = scrolled ? "#374151" : "rgba(255,255,255,0.82)")
            }
          >
            <Phone size={14} />
            WhatsApp
          </a>
          <button
            onClick={() => scrollTo("#cotacao")}
            style={{
              background: "linear-gradient(135deg, #1541B8 0%, #2563EB 100%)",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 13.5,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 2px 16px rgba(30,79,204,0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(30,79,204,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(30,79,204,0.4)";
            }}
          >
            Solicitar Cotação
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            color: scrolled ? "#0B1D3A" : "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="flex lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "#fff",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "12px 24px 24px" }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "13px 0",
                    color: "#374151",
                    fontSize: 15,
                    fontWeight: 500,
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid #F3F4F6",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#cotacao")}
                style={{
                  marginTop: 16,
                  width: "100%",
                  background: "linear-gradient(135deg, #1541B8, #2563EB)",
                  color: "#fff",
                  padding: "13px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                Solicitar Cotação
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#25D366",
                  color: "#fff",
                  padding: "13px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                <Phone size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
