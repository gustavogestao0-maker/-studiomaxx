const ITEMS = ["STUDIO MAX", "TATTOO", "PIERCING", "SINOP"];

function Row({ dark }) {
  return (
    <div className="flex shrink-0 items-center">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap font-display text-2xl uppercase md:text-4xl ${
              dark ? "text-bone/75" : "text-ink"
            }`}
          >
            {t}
          </span>
          <span
            aria-hidden="true"
            className={`mx-8 inline-block size-2 rotate-45 md:mx-12 md:size-2.5 ${
              dark ? "bg-ember" : "bg-ink"
            }`}
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div data-testid="brand-marquee" className="relative overflow-hidden py-10 md:py-16">
      <div
        aria-hidden="true"
        className="absolute top-1/2 w-[108%] -translate-y-1/2 -rotate-[1.5deg] border-y border-graphite bg-ink py-3 md:py-4"
        style={{ left: "-4%" }}
      >
        <div className="marquee-track marquee-track--reverse">
          <Row dark />
          <Row dark />
        </div>
      </div>
      <div className="relative w-[108%] -rotate-2 bg-ember py-3 md:py-4" style={{ left: "-4%" }}>
        <div className="marquee-track" aria-hidden="true">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
