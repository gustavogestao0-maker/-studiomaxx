import { motion, useReducedMotion } from "framer-motion";
import { GALLERY } from "@/data/content";
import { EASE, Reveal } from "./Motion";

export default function Gallery({ onOpen }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="works"
      data-testid="gallery-section"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-40"
    >
      <header className="relative mb-12 md:mb-20">
        <h2 className="font-display text-[clamp(3.2rem,9vw,8.5rem)] uppercase leading-[0.88]">
          <Reveal>TRABALHOS</Reveal>
          <Reveal delay={0.08}>
            <span className="text-outline">DO ESTÚDIO.</span>
          </Reveal>
        </h2>
      </header>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5" data-testid="gallery-grid">
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.ref}
            data-cursor="view"
            className={`group relative ${item.cls}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.button
              type="button"
              data-testid={`gallery-item-${i}`}
              onClick={() => onOpen(i)}
              aria-label={`Abrir imagem ${item.ref} — ${item.tag}`}
              className="group relative block w-full overflow-hidden bg-graphite"
              variants={
                reduce
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : { hidden: { clipPath: "inset(100% 0 0 0)" }, visible: { clipPath: "inset(0% 0 0 0)" } }
              }
              transition={{ duration: reduce ? 0.3 : 1, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <img
                src={item.src}
                srcSet={`${item.src} 1200w, ${item.small} 600w`}
                sizes="(max-width: 767px) 92vw, 50vw"
                alt={item.alt}
                width={item.w}
                height={item.h}
                loading="lazy"
                decoding="async"
                className={`${item.ratio} bw w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45"
              />
              <span className="absolute left-3 top-3 bg-ink/50 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-bone/80 opacity-70 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                {item.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                <span className="tag !text-[8px] text-bone/70">IMAGEM DE REFERÊNCIA — SUBSTITUIR</span>
                <span className="font-mono text-[10px] text-ember">REF. {item.ref}</span>
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
