// Inline expandable content built on the native <details>/<summary> element.
// This guarantees the expanded text exists in the HTML source and remains
// fully readable and toggleable even with JavaScript disabled. No modal, no
// redirect, no new tab — content reveals in place.
export default function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <details className="accordion group" open={defaultOpen}>
      <summary>
        <span>{summary}</span>
        <span className="accordion-icon text-gold" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </summary>
      <div className="accordion-body prose-article">{children}</div>
    </details>
  );
}
