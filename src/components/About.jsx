import SectionHeading from "./SectionHeading.jsx";
import { strengths } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { Baby, ShieldCheck, Monitor, ClipboardList, GraduationCap, Users } from "lucide-react";

const StrengthIcons = [Baby, ShieldCheck, Monitor, ClipboardList, GraduationCap, Users];

export default function About() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="about"
      style={{
        background: "var(--color-bg)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div
          style={{ display: "grid", gap: "48px", alignItems: "flex-start" }}
          className="lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left — image with decorative frame */}
          <div ref={headingRef} className="reveal">
            <SectionHeading
              align="left"
              eyebrow="About the school"
              title="A disciplined, caring school where children are known by name."
              description="Sun Rise Model Public School provides a challenging, enriching and supportive environment where students build confidence, character and the habits needed to contribute meaningfully to society."
            />

            {/* Pull-quote */}
            <blockquote
              style={{
                borderLeft: "3px solid var(--color-accent)",
                paddingLeft: "16px",
                margin: "28px 0",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "var(--text-xl)",
                color: "var(--color-primary)",
                lineHeight: 1.5,
              }}
            >
              "Every child is unique — we work to help each student discover their strengths."
            </blockquote>

            {/* Image with decorative offset frame */}
            <div style={{ position: "relative", paddingTop: "16px", paddingLeft: "16px", marginTop: "8px" }}>
              <div
                className="about-frame-bg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: "16px",
                  bottom: "16px",
                  background: "var(--color-primary-light)",
                  borderRadius: "var(--radius-lg)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <img
                  src="/assets/vision.jpg"
                  alt="School campus activity"
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right — strengths grid */}
          <div
            ref={gridRef}
            className="reveal reveal-delay-2 strengths-grid"
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(2, 1fr)",
              paddingTop: "8px",
            }}
          >
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className="card"
                style={{ padding: "20px" }}
              >
                <div className="icon-circle">
                  {(() => { const Icon = StrengthIcons[index % StrengthIcons.length]; return <Icon size={22} />; })()}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    marginTop: "16px",
                    marginBottom: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

