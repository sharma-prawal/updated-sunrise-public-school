import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { galleryImages } from "../data/siteContent.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

/* Asymmetric editorial layout — col spans only, no row spans (avoids height gaps) */
const spanMap = {
  0: { gridColumn: "span 2" },
  5: { gridColumn: "span 2" },
  9: { gridColumn: "span 2" },
};

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(10,20,16,0.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 200ms ease",
          zIndex: 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        <X size={20} />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous photo"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 200ms ease",
          zIndex: 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "min(900px, 90vw)",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          key={current}
          src={images[current]}
          alt={`Sun Rise Model Public School — photo ${current + 1}`}
          style={{
            maxWidth: "100%",
            maxHeight: "78vh",
            objectFit: "contain",
            borderRadius: "12px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            display: "block",
            animation: "lb-fade 200ms ease",
          }}
        />
        {/* Counter */}
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
          {current + 1} / {images.length}
        </p>
        {/* Thumbnail strip */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            maxWidth: "100%",
            paddingBottom: "4px",
          }}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              aria-label={`View photo ${i + 1}`}
              style={{
                width: "48px",
                height: "36px",
                borderRadius: "6px",
                overflow: "hidden",
                border: i === current ? "2px solid var(--color-accent)" : "2px solid transparent",
                padding: 0,
                cursor: "pointer",
                flexShrink: 0,
                transition: "border-color 150ms ease",
              }}
            >
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next photo"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 200ms ease",
          zIndex: 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function Gallery() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const preview = galleryImages.slice(0, 12);

  return (
    <section
      id="gallery"
      style={{
        background: "var(--color-bg)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="section-shell">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of school life beyond the prospectus."
            description="Moments from the existing school gallery are presented in a cleaner, faster layout for parents browsing on mobile or desktop."
          />
        </div>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "220px",
            gap: "10px",
            marginTop: "48px",
          }}
          className="gallery-grid reveal reveal-delay-1"
        >
          {preview.map((src, index) => (
            <figure
              key={src}
              className="gallery-item"
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${index + 1} in full screen`}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightboxIndex(index); } }}
              style={{
                ...(spanMap[index] || {}),
                margin: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={src}
                alt={`Sun Rise Model Public School — gallery photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
          <button
            className="btn-secondary"
            onClick={() => setLightboxIndex(0)}
          >
            View All Photos
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}


