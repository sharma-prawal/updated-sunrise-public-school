import SectionHeading from "./SectionHeading.jsx";
import { notices } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { GraduationCap, Building2, MessageCircle } from "lucide-react";

const NoticeIcons = [GraduationCap, Building2, MessageCircle];
const noticeDots = ["var(--color-accent)", "var(--color-primary-mid)", "var(--color-primary)"];

export default function Notices() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="notices"
      style={{
        background: "var(--color-bg)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Notices"
            title="Important updates, easy to find."
            description="A simple notice area keeps admissions, visits and parent communication visible without cluttering the home page."
          />
        </div>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "48px",
          }}
          className="lg:grid-cols-3 reveal reveal-delay-1"
        >
          {notices.map((notice, index) => (
            <article
              key={notice.title}
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border)",
                padding: "24px",
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
              <div className="icon-circle" style={{ background: noticeDots[index] + "22", color: noticeDots[index] }}>
                {(() => { const Icon = NoticeIcons[index % NoticeIcons.length]; return <Icon size={20} />; })()}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                  marginTop: "16px",
                  marginBottom: 0,
                }}
              >
                {notice.title}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                }}
              >
                {notice.description}
              </p>
            </article>
          ))}
        </div>

        {/* See all link */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}>
          <a
            href="#notices"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "opacity var(--transition-fast)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
          >
            See All Notices →
          </a>
        </div>
      </div>
    </section>
  );
}

