import SectionHeading from "./SectionHeading.jsx";
import { facilities } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { Monitor, Dumbbell, Shield, Paintbrush, Users, Lightbulb } from "lucide-react";

const FacilityIcons = [Monitor, Dumbbell, Shield, Paintbrush, Users, Lightbulb];

export default function Facilities() {
  const headingRef = useScrollReveal();
  const stripRef = useScrollReveal();

  return (
    <section
      id="facilities"
      style={{
        background: "var(--color-bg-alt)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Facilities"
            title="Purposeful spaces for study, play and personal growth."
            description="The school environment brings together smart classrooms, recreation areas and a secure campus culture for young learners."
          />
        </div>

        <div
          ref={stripRef}
          style={{
            display: "grid",
            gap: "12px",
            marginTop: "48px",
          }}
          className="sm:grid-cols-3 lg:grid-cols-6 reveal reveal-delay-1 facilities-grid"
        >
          {facilities.map((facility, index) => (
            <div
              key={facility}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "20px 12px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                textAlign: "center",
                cursor: "default",
                transition:
                  "border-color var(--transition-base), box-shadow var(--transition-base), color var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.querySelector(".fac-icon").style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.querySelector(".fac-icon").style.color =
                  "var(--color-text-muted)";
              }}
            >
              <span
                className="fac-icon"
                style={{
                  color: "var(--color-text-muted)",
                  transition: "color var(--transition-base)",
                  display: "flex",
                }}
              >
                {(() => { const Icon = FacilityIcons[index % FacilityIcons.length]; return <Icon size={26} />; })()}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                {facility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

