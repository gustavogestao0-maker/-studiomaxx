import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HERO_IMAGE, LINKS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { EASE } from "./Motion";

function MaskedLine({ children, delay, className = "" }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ onBook }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const uiFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-[58svh] md:inset-x-auto md:right-0 md:top-0 md:h-full md:w-[46vw]"
        initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
        animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
      >
        <motion.div className="h-full w-full" style={reduce ? undefined : { y: imgY, scale: 1.12 }}>
          <img
            src={HERO_IMAGE}
            alt="Sessão de tatuagem em andamento no estúdio — imagem de referência"
            width={1400}
            height={1800}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent md:bg-gradient-to-r md:from-ink md:via-ink/30 md:to-transparent"
        />
        <span className="tag absolute bottom-3 right-3 !text-[9px] bg-ink/70 px-2 py-1">
          IMAGEM DE REFERÊNCIA — SUBSTITUIR
        </span>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute right-[8vw] top-[34%] hidden h-[3px] w-[34vw] bg-ember md:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{ transformOrigin: "right" }}
        transition={{ duration: 1.2, ease: EASE, delay: 1 }}
      />

      <motion.div
        style={reduce ? undefined : { opacity: uiFade }}
        className="relative z-10 flex items-start justify-between px-5 pt-24 md:px-10 md:pt-28"
      >
        <MaskedLine delay={0.9}>
          <span className="tag">
            SÉRGIO PEREIRA — TATUADOR
            <span aria-hidden="true" className="ml-3 inline-block size-1.5 rotate-45 bg-ember align-middle" />
          </span>
        </MaskedLine>
        <MaskedLine delay={1} className="hidden sm:block">
          <span className="tag text-right">
            SINOP — MT
            <br />
            DESDE 1994
          </span>
        </MaskedLine>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: uiFade }}
        className="relative z-10 mt-auto px-5 pb-8 md:px-10 md:pb-12"
      >
        <h1
          data-testid="hero-title"
          className="font-display text-[clamp(4.2rem,16.5vw,15rem)] uppercase leading-[0.85]"
        >
          <MaskedLine delay={0.35}>STUDIO</MaskedLine>
          <MaskedLine delay={0.47} className="md:ml-[16vw]">
            MAX<span className="text-ember">.</span>
          </MaskedLine>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <MaskedLine delay={0.6}>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-bone">
                TATTOO & PIERCING
              </p>
            </MaskedLine>
            <MaskedLine delay={0.7}>
              <p className="mt-3 font-serifed text-2xl uppercase italic text-bone/90 md:text-4xl">
                Arte que marca<span className="text-ember">.</span>
              </p>
            </MaskedLine>
          </div>
          <MaskedLine delay={0.85} className="shrink-0">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#works"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("#works");
                }}
                data-testid="hero-cta-works"
                className="btn btn--ember justify-center"
              >
                EXPLORAR TRABALHOS <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={onBook}
                data-testid="hero-cta-book"
                className="btn btn--ghost justify-center"
              >
                AGENDAR SESSÃO <span className="btn-arrow" aria-hidden="true">↗</span>
              </button>
            </div>
          </MaskedLine>
        </div>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: uiFade }}
        aria-hidden="true"
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:right-10 md:flex"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-mono text-[9px] tracking-[0.3em] text-ash"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </motion.span>
        <span className="relative block h-14 w-px overflow-hidden bg-bone/30">
          {!reduce && (
            <motion.span
              className="absolute left-0 top-0 h-4 w-px bg-ember"
              animate={{ y: [-16, 56] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </span>
      </motion.div>
    </section>
  );
}
