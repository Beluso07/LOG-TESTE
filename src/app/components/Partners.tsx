import { motion } from "motion/react";
import { Star } from "lucide-react";

const PARTNERS = [
  { name: "Grupo Varejo SP", sector: "Varejo Físico" },
  { name: "TechBr Eletrônicos", sector: "E-commerce" },
  { name: "MarketShop Brasil", sector: "Marketplace" },
  { name: "ePrime Commerce", sector: "E-commerce" },
  { name: "Rede Farma SP", sector: "Farmácias" },
  { name: "FastDeal Imports", sector: "Importação" },
  { name: "MegaStore Digital", sector: "Varejo Digital" },
  { name: "Distribuidora Capital", sector: "Distribuição" },
  { name: "Alfa Móveis SP", sector: "Varejo" },
  { name: "Prime Eletro", sector: "E-commerce" },
];

const TESTIMONIAL = {
  text: "A Transjund nos atende com pontualidade e profissionalismo. Nossa operação logística ganhou em previsibilidade e eficiência desde que começamos a trabalhar com eles.",
  author: "Diretor de Operações",
  company: "Grupo Varejo SP",
};

export function Partners() {
  return (
    <section
      id="clientes"
      style={{
        background: "#FFFFFF",
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
          style={{ textAlign: "center", marginBottom: 56 }}
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
              Empresas Parceiras
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
            Empresas que confiam na Transjund
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: "#6B7280",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Parceiros que escolheram a Transjund para garantir a eficiência das suas operações
            logísticas em São Paulo.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 14,
            marginBottom: 60,
          }}
        >
          {PARTNERS.map(({ name, sector }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              style={{
                background: "#F8FAFF",
                border: "1px solid #E0EAFF",
                borderRadius: 12,
                padding: "18px 20px",
                cursor: "default",
                transition: "box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 24px rgba(30,79,204,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#BFDBFE";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E0EAFF";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #1541B8, #3B82F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>
                  {name.charAt(0)}
                </span>
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#0B1D3A",
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "#9CA3AF",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {sector}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "linear-gradient(135deg, #F8FAFF, #EFF6FF)",
            border: "1px solid #BFDBFE",
            borderRadius: 20,
            padding: "44px 48px",
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              marginBottom: 20,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} color="#F59E0B" fill="#F59E0B" />
            ))}
          </div>

          {/* Quote mark */}
          <div
            style={{
              fontSize: 60,
              color: "#BFDBFE",
              lineHeight: 0.8,
              marginBottom: 12,
              fontFamily: "Georgia, serif",
            }}
          >
            "
          </div>

          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "#1E3A5F",
              lineHeight: 1.75,
              fontWeight: 400,
              marginBottom: 28,
              fontStyle: "italic",
            }}
          >
            {TESTIMONIAL.text}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1541B8, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>G</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0B1D3A" }}>
                {TESTIMONIAL.author}
              </div>
              <div style={{ fontSize: 12.5, color: "#6B7280" }}>{TESTIMONIAL.company}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
