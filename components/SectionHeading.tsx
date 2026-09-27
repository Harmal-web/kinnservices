export function SectionHeading({
  title,
  lead,
  align = "left",
}: {
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-[1.05rem] leading-relaxed text-ink/70">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
