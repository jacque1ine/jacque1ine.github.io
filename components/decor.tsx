/**
 * Hand-drawn decorative SVGs — the journal's marginalia.
 * Kept as inline SVG so they inherit currentColor and can draw-on.
 * Rationed: one gesture per section (see design notes).
 */

/** A small botanical sprig — line art, uses currentColor. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 62V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 46c-6 0-13-3-15-11 8-1 14 3 15 11ZM24 46c6 0 13-3 15-11-8-1-14 3-15 11ZM24 34c-5 0-11-2-13-9 7-1 12 2 13 9ZM24 34c5 0 11-2 13-9-7-1-12 2-13 9ZM24 22c-4 0-9-2-11-7 6-1 10 2 11 7ZM24 22c4 0 9-2 11-7-6-1-10 2-11 7Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Four-point sparkle accent. */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 1c.7 5.5 4.8 9.6 10.3 10.3C16.8 12 12.7 16.1 12 21.6 11.3 16.1 7.2 12 1.7 11.3 7.2 10.6 11.3 6.5 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * A wax-seal-style stamp with text following a circular path.
 * Purely decorative; the ring text is set via the `label` prop.
 */
export function Seal({
  className = "",
  label = "collecting places · since ",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path
          id="seal-ring"
          d="M60 60 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0"
          fill="none"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="57"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <text
        fontSize="9.5"
        letterSpacing="2.4"
        fill="currentColor"
        style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}
      >
        <textPath href="#seal-ring" startOffset="0%">
          {label}
        </textPath>
      </text>
      <g transform="translate(60 60)">
        <path
          d="M0 14V-6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M0 4c-4 0-9-2-11-7 6-1 10 2 11 7ZM0 4c4 0 9-2 11-7-6-1-10 2-11 7Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="0" cy="-8" r="2.4" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </g>
    </svg>
  );
}
