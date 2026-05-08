import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { school } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Contact() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section
      id="contact"
      style={{
        background: "var(--color-bg-alt)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Contact us"
            title="Speak with the school office."
            description="For admissions, campus visits and general enquiries, parents can use the official contact details below."
          />
        </div>

        {/* Map + contact details */}
        <div
          ref={contentRef}
          style={{ display: "grid", gap: "24px", marginTop: "40px" }}
          className="lg:grid-cols-[1fr_1.1fr] reveal reveal-delay-1"
        >
          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
              padding: "28px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <ContactRow icon={MapPin} label="Address" value={school.address} />
              <ContactRow icon={Mail} label="Email" value={school.email} href={`mailto:${school.email}`} />
              <ContactRow icon={Phone} label="Phone" value={school.phones.join(", ")} href={`tel:${school.phones[0].replace(/-/g, "")}`} />
            </div>

            <div
              style={{
                marginTop: "24px",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-primary)",
                padding: "24px",
              }}
            >
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
                Office enquiry
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 500,
                  color: "#fff",
                  marginTop: "8px",
                  marginBottom: 0,
                }}
              >
                Admissions, campus visits and school information.
              </p>
              <a
                href={`mailto:${school.email}`}
                className="btn-outline-white"
                style={{ marginTop: "16px", display: "inline-flex" }}
              >
                Send Email
              </a>
            </div>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
              padding: "10px",
              boxShadow: "var(--shadow-sm)",
              overflow: "hidden",
            }}
          >
            <iframe
              title={`${school.name} map`}
              src={school.mapEmbed}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "280px",
                border: "none",
                borderRadius: "var(--radius-md)",
                display: "block",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div className="icon-circle" style={{ width: "44px", height: "44px", flexShrink: 0 }}>
        <Icon size={19} />
      </div>
      <div>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-accent)",
            margin: 0,
          }}
        >
          {label}
        </p>
        <p
          style={{
            marginTop: "4px",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--color-primary)",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: "var(--radius-md)",
        padding: "8px",
        marginLeft: "-8px",
        transition: "background var(--transition-fast)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-primary-light)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
    >
      {content}
    </a>
  ) : (
    <div style={{ padding: "8px", marginLeft: "-8px" }}>{content}</div>
  );
}

