import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./FlipbookModal.css";

export default function FlipbookModal({ open, pdf, onClose }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    setTimeout(() => ref.current?.focus(), 40);
    setLoaded(false);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, pdf]);

  if (!open || !pdf) return null;

  const node = (
    <div className="flip-modal-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="flip-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="flip-title"
        tabIndex={-1}
        ref={ref}
      >
        <div className="flip-header">
          <div className="flip-title" id="flip-title">{pdf.name}</div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flip-open-link"
              title="Open flipbook in new tab"
            >
              Open in new tab ↗
            </a>
            <button className="flip-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        <div className="flip-body">
          <div className="flip-iframe-wrap">
            {!loaded && <div className="flip-loading">Loading…</div>}
            <iframe
              src={pdf.url}
              title={pdf.name}
              className="flip-iframe"
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(node, document.body);
}