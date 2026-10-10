import { ARTIST_IMAGE, LINKS } from "@/data/content";
import { Fade, Parallax, Reveal } from "./Motion";

export default function Artist() {
  return (
    <section id="artist" data-testid="artist-section" className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-8 md:grid-cols-12 md:gap-0">
        <Fade className="relative md:col-span-7">
          <Parallax amount={30} className="aspect-[4/5] max-h-[85vh] w-full bg-graphite">
            <img
              src={ARTIST_IMAGE}
              alt="Sérgio Pereira, tatuador do Studio Max — imagem de referência"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Parallax>
          <span aria-hidden="true" className="absolute -left-px top-10 hidden h-24 w-[3px] bg-ember md:block" />
          <span className="tag absolute bottom-4 right-4 !text-[9px] bg-ink/70 px-2 py-1">
            IMAGEM DE REFERÊNCIA — SUBSTITUIR
          </span>
        </Fade>

        <div className="flex flex-col justify-between py-2 md:col-span-5 md:pl-10 lg:pl-16">
          <div className="py-10">
            <h2 className="font-display text-[clamp(3.4rem,7.5vw,7.5rem)] uppercase leading-[0.86]">
              <Reveal>SÉRGIO</Reveal>
              <Reveal delay={0.08}>
                <span className="text-outline">PEREIRA</span>
              </Reveal>
            </h2>
            <Fade delay={0.2}>
              <p className="mt-6 font-serifed text-2xl uppercase italic text-bone md:text-4xl">
                “Cada pele, <span className="text-ember">uma história.</span>”
              </p>
            </Fade>
          </div>

          <Fade delay={0.1}>
            <div className="space-y-2 border-t border-graphite pt-6">
              <p className="tag">TATUADOR — STUDIO MAX</p>
              <p className="tag">SINOP / MT — {LINKS.phoneTattoo}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
