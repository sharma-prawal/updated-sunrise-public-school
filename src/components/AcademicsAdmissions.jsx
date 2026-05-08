import { ArrowRight, ClipboardCheck, Star, Lightbulb, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { academics, school } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const romanNumerals = ["I", "II", "III"];
const CardIcons = [Star, Lightbulb, Heart];

export default function AcademicsAdmissions() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <section
      id="academics"
      style={{
        background: "var(--color-bg)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Academics"
            title="Strong academics, supported by attention and encouragement."
            description="The academic experience is shaped around supportive teaching, limited class size, mentoring and opportunities for students to learn by doing."
          />
        </div>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "48px",
          }}
          className="md:grid-cols-3 reveal reveal-delay-1"
        >
          {academics.map((item, index) => (
            <article
              key={item.title}
              style={{
                position: "relative",
                overflow: "hidden",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border)",
                padding: "28px",
                transition: "box-shadow var(--transition-base), transform var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-hover)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Decorative roman numeral */}
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  fontFamily: "var(--font-display)",
                  fontSize: "64px",
                  fontWeight: 500,
                  color: "var(--color-primary-light)",
                  lineHeight: 1,
                  zIndex: 0,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              >
                {romanNumerals[index]}
              </span>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="icon-circle">
                  {(() => { const Icon = CardIcons[index]; return <Icon size={20} />; })()}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "var(--color-primary)",
                    marginTop: "20px",
                    marginBottom: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Admissions CTA band */}
        <div
          id="admissions"
          ref={ctaRef}
          className="reveal reveal-delay-2"
          style={{
            marginTop: "48px",
            borderRadius: "var(--radius-xl)",
            background: "var(--color-primary)",
            padding: "40px",
            overflow: "hidden",
          }}
        >
          <div
            style={{ display: "grid", gap: "32px", alignItems: "center" }}
            className="lg:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
                Admissions
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-3xl)",
                  fontWeight: 500,
                  color: "#fff",
                  marginTop: "12px",
                  marginBottom: 0,
                }}
              >
                A clear, parent-friendly admission conversation.
              </h3>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Parents can contact the school office for admissions, campus visits, academic
                details and documentation guidance.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={`tel:${school.phones[0].replace(/-/g, "")}`}
                className="btn-outline-white"
              >
                Call {school.phones[0]} <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${school.email}`}
                className="btn-outline-white"
              >
                Email School <ClipboardCheck size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

