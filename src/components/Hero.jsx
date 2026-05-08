import { ArrowRight, MapPin, Phone } from "lucide-react";
import { highlights, school } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Hero() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 80% 0%, rgba(201,150,58,0.10) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(27,77,62,0.07) 0%, transparent 50%), var(--color-bg)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      {/* Dotted grid decoration */}
      <div className="hero-dots" />

      <div className="section-shell">
        <div
          style={{
            display: "grid",
            gap: "48px",
            alignItems: "center",
          }}
          className="lg:grid-cols-[1fr_1fr]"
        >
          {/* Left — text */}
          <div ref={leftRef} className="reveal">
            <p className="eyebrow">Kandi Dholran, Kangra · Himachal Pradesh</p>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2rem, 6vw, 3.75rem)",
                lineHeight: 1.08,
                color: "var(--color-primary)",
                marginTop: "20px",
                marginBottom: 0,
                letterSpacing: "-0.01em",
              }}
              className="text-balance"
            >
              Sun Rise Model{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-primary-mid)" }}>Public</em>{" "}
              School
            </h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "var(--text-lg)",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                maxWidth: "480px",
              }}
            >
              {school.promise}
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "32px",
              }}
            >
              <a href="#admissions" className="btn-primary">
                Start Admission Enquiry <ArrowRight size={17} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact School
              </a>
            </div>

            {/* Contact details */}
            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "32px",
                fontSize: "14px",
                color: "var(--color-text-muted)",
              }}
              className="sm:grid-cols-2"
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin
                  size={16}
                  style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}
                />
                <span>{school.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Phone
                  size={16}
                  style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}
                />
                <span>{school.phones.join(", ")}</span>
              </div>
            </div>

            {/* 2×2 highlights grid */}
            <div
              className="highlights-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginTop: "36px",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    background: "var(--color-surface)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked paper image */}
          <div
            ref={rightRef}
            className="reveal reveal-delay-2"
            style={{ position: "relative", padding: "24px 16px 16px" }}
          >
            {/* Back decorative layer */}
            <div
              style={{
                position: "absolute",
                inset: "12px",
                background: "var(--color-primary-light)",
                borderRadius: "20px",
                transform: "rotate(-2deg)",
                zIndex: 0,
              }}
            />
            {/* Image */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                transform: "rotate(1.5deg)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <img
                src="/assets/school-kids.jpg"
                alt="Students at Sun Rise Model Public School"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="eager"
              />
              {/* Caption bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 20px 20px",
                  background: "linear-gradient(to top, rgba(15,46,36,0.88) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  Sun Rise Experience
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "15px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1.3,
                  }}
                >
                  Learning, creativity and confidence on one campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

