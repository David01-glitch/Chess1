// Inline SVG knight mark — no external asset, crisp at any size, present in HTML.
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Senior Chess Academy knight emblem"
      fill="none"
    >
      <rect x="1" y="1" width="46" height="46" rx="10" className="fill-matte" />
      <path
        d="M18 14c1.8-2.6 5-4 8-4 1 3-.6 4.4-2 5.6 2.2.2 4.4 1.2 6 3 2.4 2.8 3 6.6 3 10.4V36H15v-2c0-2.4 1-4.4 2.8-6.2l3.2-3-1.6-1c-1.8 1.8-3.4 2.6-5.4 2.6-.8 0-1.4-.8-1-1.6l5-10.8z"
        className="fill-ivory"
      />
      <circle cx="21.5" cy="17.5" r="1.2" className="fill-matte" />
    </svg>
  );
}
