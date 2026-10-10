import { REELS } from "@/data/content";
import { Fade, Reveal } from "./Motion";

function ReelCard({ reel, index }) {
  return (
    <Fade
      delay={index * 0.08}
      className={`w-[80vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink ${
        index === 1 ? "md:mt-10" : ""
      }`}
    >
      <figure className="group border border-graphite bg-graphite" data-testid={`reel-card-${index}`}>
        <div className="relative aspect-[9/16] overflow-hidden bg-ink">
          <iframe
            src={reel.embed}
            title={`Reel do Studio Max — vídeo ${reel.n}`}
            data-testid={`reel-frame-${index}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-[1.16]"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <figcaption className="flex items-center justify-between px-4 py-3">
          <span className="tag">REEL {reel.n}</span>
          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`reel-link-${index}`}
            aria-label={`Abrir o reel ${reel.n} no Instagram`}
            className="link-line font-mono text-[10px] uppercase tracking-[0.2em] text-ash transition-colors hover:text-ember"
          >
            ABRIR NO INSTAGRAM <span aria-hidden="true">↗</span>
          </a>
        </figcaption>
      </figure>
    </Fade>
  );
}

export default function Reels() {
  return (
    <section
      data-testid="reels-section"
      className="relative overflow-hidden border-t border-graphite bg-ink px-5 py-24 md:px-10 md:py-36"
    >
      <Fade>
        <p className="tag mb-5">INSTAGRAM — VÍDEOS DO ESTÚDIO</p>
      </Fade>
      <h2 className="mb-8 font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.88] md:mb-6">
        <Reveal>STUDIO EM</Reveal>
        <Reveal delay={0.08}>
          <span className="text-outline">MOVIMENTO.</span>
        </Reveal>
      </h2>
      <Fade delay={0.15}>
        <p className="tag mb-12 md:mb-16">UM POUCO DO TRABALHO DE PERTO.</p>
      </Fade>

      <div
        data-testid="reels-track"
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
      >
        {REELS.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} />
        ))}
      </div>
    </section>
  );
}
