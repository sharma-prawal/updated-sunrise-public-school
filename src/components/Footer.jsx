import { navItems, school } from "../data/siteContent.js";

const quickLinks = navItems.slice(0, 4);
const academicLinks = navItems.slice(4);

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.975-1.404A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: WhatsAppIcon, label: "WhatsApp", href: `https://wa.me/${school.phones[0].replace(/-/g, "")}` },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-primary-dark)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div className="section-shell">
        <div
          style={{ display: "grid", gap: "40px" }}
          className="sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]"
        >
          {/* School info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/assets/logo.png"
                alt=""
                style={{
                  height: "52px",
                  width: "52px",
                  borderRadius: "50%",
                  objectFit: "contain",
                  background: "rgba(255,255,255,0.1)",
                  padding: "4px",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    margin: 0,
                  }}
                >
                  {school.name}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: "3px 0 0" }}>
                  {school.location}
                </p>
              </div>
            </div>
            <p
              style={{
                marginTop: "20px",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "280px",
              }}
            >
              A modern, safe and creative learning environment for students in Kandi Dholran,
              Kangra, Himachal Pradesh.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "background var(--transition-base), color var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-accent)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 16px",
              }}
            >
              Quick links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Academics links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 16px",
              }}
            >
              Academics
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {academicLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 16px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>{school.address}</p>
              <p style={{ margin: 0 }}>{school.phones.join(", ")}</p>
              <a
                href={`mailto:${school.email}`}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {school.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "48px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <p style={{ margin: 0 }}>
            Copyright &copy; {new Date().getFullYear()} {school.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

