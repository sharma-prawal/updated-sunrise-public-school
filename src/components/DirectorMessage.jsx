import { school } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function DirectorMessage() {
  const ref = useScrollReveal();

  return (
    <section
      id="message"
      style={{
        background: "var(--color-primary-light)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div
          ref={ref}
          style={{
            display: "grid",
            gap: "48px",
            alignItems: "center",
          }}
          className="lg:grid-cols-[280px_1fr] reveal"
        >
          {/* Director photo — circular with green ring */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "clamp(160px, 40vw, 240px)",
                height: "clamp(160px, 40vw, 240px)",
                borderRadius: "50%",
                overflow: "hidden",
                outline: "4px solid var(--color-primary-light)",
                outlineOffset: "6px",
                border: "3px solid var(--color-primary)",
                flexShrink: 0,
              }}
            >
              <img
                src="/assets/profile.jpg"
                alt={`${school.director}, Director and Founder`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="eyebrow">Director's message</p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "var(--text-3xl)",
                color: "var(--color-primary)",
                marginTop: "12px",
                marginBottom: 0,
              }}
            >
              A message from our founder
            </h2>

            <p
              style={{
                marginTop: "24px",
                fontSize: "17px",
                lineHeight: 1.85,
                color: "var(--color-text-secondary)",
              }}
            >
              I am honored to serve as the Director of{" "}
              <strong style={{ color: "var(--color-primary)" }}>{school.name}</strong>, and I am
              excited to welcome you to an innovative place filled with opportunities for
              learning, growth and development. We believe every child is unique, and we work
              to help each student discover their strengths and achieve their full potential.
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "17px",
                lineHeight: 1.85,
                color: "var(--color-text-secondary)",
              }}
            >
              Our dedicated faculty and staff are committed to providing a comprehensive and
              engaging educational experience that inspires curiosity, creativity, and critical
              thinking.
            </p>

            {/* Signature */}
            <div style={{ marginTop: "28px", borderTop: "1px solid var(--color-border)", paddingTop: "20px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  margin: 0,
                }}
              >
                {school.director}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-text-muted)",
                  marginTop: "4px",
                }}
              >
                Director &amp; Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

