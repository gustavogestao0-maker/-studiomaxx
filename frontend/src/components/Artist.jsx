import { ARTIST_IMAGE, LINKS } from "@/data/content";
import { Fade, Parallax, Reveal } from "./Motion";

export default function Artist() {
  return (
    <section
      id="artist"
      data-testid="artist-section"
      className="relative overflow-hidden bg-graphite py-24 md:py-40"
    >
      <div className="relative grid gap-12 px-5 md:grid-cols-12 md:gap-0 md:px-10 lg:px-16">
        <Fade className="relative md:col-span-7">
          <div className="relative z-10 md:w-[88%]">
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 hidden h-full w-full border border-ash/30 md:block"
            />
            <Parallax
              amount={28}
              className="group relative aspect-[4/5] max-h-[85vh] w-full bg-ink"
            >
              <img
                src={ARTIST_IMAGE}
                srcSet="/img/artist.jpg 460w, /img/artist-800.jpg 800w"
                sizes="(max-width: 767px) 92vw, 55vw"
                alt="Sérgio Pereira, tatuador do Studio Max"
                width={460}
                height={752}
                loading="lazy"
                className="bw h-full w-full object-cover object-[50%_30%]"
              />
            </Parallax>
          </div>
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 hidden h-full w-[3px] bg-ember md:block"
          />
        </Fade>

        <div className="relative z-10 flex flex-col justify-between py-2 md:col-span-5 md:pl-10 lg:pl-16">
          <Fade>
            <p className="font-serifed text-4xl italic leading-[1.05] text-bone md:text-6xl">
              “Cada pele, <span className="text-ember">uma história.</span>”
            </p>
          </Fade>

          <div className="py-10">
            <h2 className="font-display text-[clamp(3.4rem,7.5vw,7.5rem)] uppercase leading-[0.86]">
              <Reveal>SÉRGIO</Reveal>
              <Reveal delay={0.08}>
                <span className="text-outline">PEREIRA</span>
              </Reveal>
            </h2>
          </div>

          <Fade delay={0.1}>
            <div className="space-y-2 border-t border-bronze/40 pt-6">
              <p className="tag">TATUADOR — STUDIO MAX</p>
              <p className="tag">SINOP / MT — {LINKS.phoneTattoo}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
