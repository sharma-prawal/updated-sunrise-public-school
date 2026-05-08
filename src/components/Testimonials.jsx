import SectionHeading from "./SectionHeading.jsx";
import { testimonials } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Testimonials() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section
      style={{
        background: "var(--color-bg-alt)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div
          style={{ display: "grid", gap: "48px", alignItems: "flex-end" }}
          className="lg:grid-cols-[1fr_1.5fr]"
        >
          <div ref={headingRef} className="reveal">
            <SectionHeading
              align="left"
              eyebrow="Parent confidence"
              title="A school experience families can trust."
              description="This section is prepared for verified parent testimonials. Until then, it highlights the experience families can expect."
            />
          </div>

          <div
            ref={cardsRef}
            style={{ display: "grid", gap: "16px" }}
            className="md:grid-cols-2 reveal reveal-delay-1"
          >
            {testimonials.map((item, i) => (
              <article
                key={item.quote}
                className="testimonial-card"
                style={{
                  background: "var(--color-surface)",
                  borderLeft: "4px solid var(--color-accent)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Decorative open-quote */}
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "72px",
                    lineHeight: 0.5,
                    color: "var(--color-accent)",
                    opacity: 0.4,
                    marginBottom: "16px",
                    userSelect: "none",
                  }}
                >
                  "
                </p>

                {/* Stars */}
                <p
                  aria-label="5 stars"
                  style={{ color: "var(--color-accent)", fontSize: "16px", letterSpacing: "2px" }}
                >
                  ★★★★★
                </p>

                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.quote}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: "3px 0 0" }}>
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

