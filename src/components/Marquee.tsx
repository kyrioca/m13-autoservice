const items = [
  "HANDWÄSCHE",
  "INNENREINIGUNG",
  "POLITUR",
  "VERSIEGELUNG",
  "FAHRZEUGAUFBEREITUNG JÜLICH",
  "CAR DETAILING",
  "KERAMIKVERSIEGELUNG",
  "LACKPOLITUR",
];

function Dot() {
  return (
    <span className="inline-flex items-center mx-6" aria-hidden="true">
      <span className="w-1 h-1 rounded-full bg-red inline-block" />
    </span>
  );
}

export default function Marquee({
  reverse = false,
  className = "",
}: {
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 border-y border-theme ${className}`}
      aria-hidden="true"
    >
      <div
        className="animate-marquee"
        style={
          reverse
            ? { animationDirection: "reverse" }
            : {}
        }
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="font-display text-sm md:text-base tracking-[0.2em] text-secondary whitespace-nowrap">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
