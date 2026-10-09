const ITEMS = ["STUDIO MAX", "TATTOO", "PIERCING", "SINOP"];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap font-display text-2xl uppercase text-bone/90 md:text-4xl">
            {t}
          </span>
          <span aria-hidden="true" className="mx-8 inline-block size-2 rotate-45 bg-ember md:mx-12 md:size-2.5" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div data-testid="brand-marquee" className="overflow-hidden border-y border-graphite py-5 md:py-7">
      <div className="marquee-track" aria-hidden="true">
        <Row />
        <Row />
      </div>
    </div>
  );
}
