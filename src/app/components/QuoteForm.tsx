import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Send, MapPin, Package, User, Phone, Mail, Truck } from "lucide-react";

const CARGO_TYPES = [
  "Carga Geral",
  "Eletrônicos",
  "Vestuário / Moda",
  "Alimentos (não perecíveis)",
  "Móveis e Decoração",
  "Materiais de Construção",
  "Farmacêuticos",
  "E-commerce (variado)",
  "Outro",
];

export function QuoteForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    cargoType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.phone || !form.email || !form.origin || !form.destination) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    toast.success("Cotação solicitada com sucesso! Entraremos em contato em breve.", {
      duration: 5000,
    });
    setForm({ company: "", name: "", phone: "", email: "", origin: "", destination: "", cargoType: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px 12px 42px",
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 10,
    fontSize: 14.5,
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 7,
    letterSpacing: "0.02em",
  };

  const iconWrap: React.CSSProperties = {
    position: "absolute",
    left: 13,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9CA3AF",
    pointerEvents: "none",
  };

  return (
    <section
      id="cotacao"
      style={{
        background: "#F1F5F9",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: 60,
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_1.7fr]"
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
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
                Cotação Rápida
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                fontWeight: 800,
                color: "#0B1D3A",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Solicite sua cotação sem compromisso
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              Preencha o formulário e nossa equipe entrará em contato em até{" "}
              <strong style={{ color: "#1541B8" }}>2 horas úteis</strong> com uma proposta
              personalizada para a sua operação.
            </p>

            {[
              { icon: "✓", text: "Análise gratuita da sua operação" },
              { icon: "✓", text: "Proposta personalizada" },
              { icon: "✓", text: "Atendimento direto com especialista" },
              { icon: "✓", text: "Sem taxa de consulta" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#1D4ED8",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <span style={{ fontSize: 14, color: "#374151" }}>{text}</span>
              </div>
            ))}

            <div
              style={{
                marginTop: 36,
                padding: "20px 22px",
                background: "#0B1D3A",
                borderRadius: 14,
              }}
            >
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                Atendimento Imediato
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#25D366",
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <Phone size={16} />
                (11) 9 9999-9999
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "40px",
                boxShadow: "0 4px 40px rgba(0,0,0,0.07)",
                border: "1px solid #F1F5F9",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
                className="grid-cols-1 sm:grid-cols-2"
              >
                {/* Company */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>
                    Nome da Empresa <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      placeholder="Razão social ou nome fantasia"
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>
                    Telefone / WhatsApp <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      placeholder="(11) 9 0000-0000"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>
                    E-mail <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      placeholder="seu@empresa.com.br"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Origin */}
                <div>
                  <label style={labelStyle}>
                    Origem <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <MapPin size={16} />
                    </span>
                    <input
                      type="text"
                      placeholder="Cidade ou CEP de origem"
                      value={form.origin}
                      onChange={(e) => handleChange("origin", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label style={labelStyle}>
                    Destino <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <Truck size={16} />
                    </span>
                    <input
                      type="text"
                      placeholder="Cidade ou CEP de destino"
                      value={form.destination}
                      onChange={(e) => handleChange("destination", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Cargo Type */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Tipo de Carga</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ ...iconWrap, display: "flex" }}>
                      <Package size={16} />
                    </span>
                    <select
                      value={form.cargoType}
                      onChange={(e) => handleChange("cargoType", e.target.value)}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#2563EB";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5E7EB";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Selecione o tipo de carga</option>
                      {CARGO_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Informações Adicionais</label>
                  <textarea
                    placeholder="Descreva brevemente sua necessidade logística, volume médio mensal, frequência de entregas, etc."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#fff",
                      border: "1px solid #E5E7EB",
                      borderRadius: 10,
                      fontSize: 14.5,
                      color: "#111827",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2563EB";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  marginTop: 22,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: submitting
                    ? "#93C5FD"
                    : "linear-gradient(135deg, #1541B8 0%, #2563EB 100%)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em",
                  boxShadow: submitting ? "none" : "0 4px 18px rgba(30,79,204,0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(30,79,204,0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 18px rgba(30,79,204,0.35)";
                  }
                }}
              >
                {submitting ? (
                  <>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Solicitar Cotação Gratuita
                  </>
                )}
              </button>

              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#9CA3AF",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                Campos marcados com <span style={{ color: "#EF4444" }}>*</span> são
                obrigatórios. Retorno em até 2 horas úteis.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
