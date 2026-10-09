import { LINKS, PIERCING_IMAGES } from "@/data/content";
import { Fade, Reveal } from "./Motion";

export default function Piercing() {
  return (
    <section data-testid="piercing-section" className="bg-graphite">
      <div className="grid md:grid-cols-2">
        <div className="order-2 flex flex-col justify-between gap-12 px-5 py-20 md:order-1 md:px-10 md:py-32">
          <Fade>
            <p className="tag">( 04 — PIERCING )</p>
          </Fade>
          <div>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.88]">
              <Reveal>BEYOND</Reveal>
              <Reveal delay={0.08}>
                <span className="text-outline">THE INK.</span>
              </Reveal>
            </h2>
            <Fade delay={0.15}>
              <p className="tag mt-6">TATTOO & PIERCING</p>
            </Fade>
            <Fade delay={0.2}>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="piercing-cta"
                className="btn btn--ember mt-10"
              >
                CONSULTAR PELO WHATSAPP <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </Fade>
          </div>
          <Fade>
            <p className="tag">{LINKS.phoneDisplay} — SINOP / MT</p>
          </Fade>
        </div>

        <div className="order-1 grid min-h-[420px] grid-cols-5 grid-rows-6 gap-3 p-5 md:order-2 md:p-10">
          <Fade className="relative col-span-5 row-span-5 overflow-hidden bg-ink">
            <img
              src={PIERCING_IMAGES[0].src}
              alt={PIERCING_IMAGES[0].alt}
              width={1000}
              height={1250}
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
            <span className="tag absolute bottom-3 right-3 !text-[9px] bg-ink/70 px-2 py-1">
              IMAGEM DE REFERÊNCIA — SUBSTITUIR
            </span>
          </Fade>
          <Fade delay={0.1} className="col-span-3 row-span-1 overflow-hidden bg-ink">
            <img
              src={PIERCING_IMAGES[1].src}
              alt={PIERCING_IMAGES[1].alt}
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
          </Fade>
          <div className="col-span-2 row-span-1 flex items-center justify-center border border-bone/15">
            <span className="tag">STUDIO MAX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
