import { ADDRESS, CTA_BACKGROUND, LINKS } from "@/data/content";
import { Fade, Reveal } from "./Motion";

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={CTA_BACKGROUND}
          alt=""
          width={1800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40">
        <h2 className="font-display text-[clamp(3.4rem,10.5vw,11rem)] uppercase leading-[0.86]">
          <Reveal>YOUR NEXT</Reveal>
          <Reveal delay={0.07}>
            <span className="text-ember">PIECE</span> STARTS
          </Reveal>
          <Reveal delay={0.14}>HERE.</Reveal>
        </h2>
        <Fade delay={0.2}>
          <p className="tag mt-8 !tracking-[0.3em]">AGENDE SUA SESSÃO NO STUDIO MAX.</p>
        </Fade>
        <Fade delay={0.25}>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp"
            className="btn btn--ember mt-10 !px-10 !py-5 !text-sm"
          >
            FALAR COM O STUDIO <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </Fade>

        <div
          data-testid="location-module"
          className="mt-24 grid items-end gap-6 border-t border-bone/15 pt-8 md:mt-36 md:grid-cols-[1fr_auto]"
        >
          <Fade>
            <address className="not-italic font-mono text-xs leading-relaxed tracking-[0.15em] text-bone/90 md:text-sm">
              {ADDRESS.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </Fade>
          <Fade delay={0.1}>
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-maps"
              className="btn btn--ghost"
            >
              ABRIR NO MAPS <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </Fade>
        </div>
      </div>

      <footer className="relative flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 px-5 py-8 md:px-10">
        <p className="font-display text-lg text-bone">
          STUDIO MAX<span className="text-ember">.</span>
        </p>
        <p className="tag">TATTOO & PIERCING — SÉRGIO PEREIRA</p>
        <p className="tag">© {new Date().getFullYear()} — SINOP / MT</p>
      </footer>
    </section>
  );
}
