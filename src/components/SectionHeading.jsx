export default function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }) {
  const isLeft = align === "left";
  const isDark = tone === "dark";

  return (
    <div className={isLeft ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          lineHeight: 1.15,
          color: isDark ? "#fff" : "var(--color-primary)",
          marginTop: "12px",
          marginBottom: 0,
        }}
        className="text-balance"
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            marginTop: "16px",
            fontSize: "var(--text-lg)",
            lineHeight: 1.7,
            color: isDark ? "rgba(255,255,255,0.72)" : "var(--color-text-secondary)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

