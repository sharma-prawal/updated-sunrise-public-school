import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems, school } from "../data/siteContent.js";

function SunIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="5.5" fill="var(--color-accent)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const rad = ((i * 45) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={14 + 7.5 * Math.cos(rad)}
            y1={14 + 7.5 * Math.sin(rad)}
            x2={14 + 10.5 * Math.cos(rad)}
            y2={14 + 10.5 * Math.sin(rad)}
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* Utility bar */}
      <div
        style={{
          background: "var(--color-primary-dark)",
          height: "36px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="section-shell"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.7)",
            gap: "12px",
            overflow: "hidden",
          }}
        >
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>{school.location}</span>
          <span className="hidden sm:block" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
            {school.phones.join(" / ")} · {school.email}
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        style={{
          background: "var(--color-surface)",
          boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)",
          transition: "box-shadow var(--transition-base)",
        }}
      >
        <div
          className="section-shell"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
            aria-label="Sun Rise Model Public School — home"
          >
            <SunIcon />
            <img
              src="/assets/logo.png"
              alt=""
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(14px, 2.5vw, 18px)",
                fontWeight: 600,
                color: "var(--color-primary)",
                lineHeight: 1.2,
                maxWidth: "180px",
              }}
            >
              {school.name}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: "28px" }}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "grid",
                placeItems: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                background: "transparent",
                color: "var(--color-text-secondary)",
                cursor: "pointer",
                transition: "background var(--transition-fast), color var(--transition-fast)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-primary-light)";
                e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-text-secondary)";
              }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href={`mailto:${school.email}`} className="btn-accent">
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            style={{
              display: "grid",
              placeItems: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              color: "var(--color-primary)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            background: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
            padding: "16px 0 24px",
          }}
        >
          <div
            className="section-shell"
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  transition:
                    "background var(--transition-fast), color var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-primary-light)";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                }}
              >
                {label}
              </a>
            ))}
            <a
              href={`mailto:${school.email}`}
              className="btn-accent"
              style={{ marginTop: "8px", alignSelf: "flex-start" }}
            >
              Apply Now
            </a>
            {/* Theme toggle row */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="mobile-theme-toggle"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

