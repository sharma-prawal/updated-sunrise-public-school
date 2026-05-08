import { ShieldCheck, Brain, UserCircle, PhoneCall } from "lucide-react";
import { highlights } from "../data/siteContent.js";

const PillIcons = [ShieldCheck, Brain, UserCircle, PhoneCall];

export default function Highlights() {
  return (
    <section
      style={{
        background: "var(--color-primary)",
        borderTop: "3px solid var(--color-accent)",
      }}
    >
      <div className="section-shell">
        <div
          style={{
            display: "grid",
          }}
          className="highlights-strip"
        >
          {highlights.map((item, i) => (
            <div
              key={item.value}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px 16px",
              }}
              className={`highlight-item highlight-item-${i}`}
            >
              <span style={{ color: "rgba(255,255,255,0.75)", flexShrink: 0 }}>
                {(() => { const Icon = PillIcons[i]; return <Icon size={22} />; })()}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)",
                    margin: "2px 0 0",
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

