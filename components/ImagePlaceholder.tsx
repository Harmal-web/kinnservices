// Temporary visual placeholder — swap for real client photography.
// Replace the <ImagePlaceholder> usage with next/image once assets exist,
// e.g. <Image src="/images/hero-static-guard.jpg" alt="..." fill />

export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-steel/[0.06] ${className}`}
      role="img"
      aria-label={`Placeholder — ${label}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="diag"
            width="14"
            height="14"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="14" stroke="#1B2A3A" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
      <span className="relative z-10 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium text-ink/60">
        Photo placeholder — {label}
      </span>
    </div>
  );
}
