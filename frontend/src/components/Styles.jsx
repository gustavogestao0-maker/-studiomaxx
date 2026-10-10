import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { STYLES } from "@/data/content";
import { EASE, Reveal } from "./Motion";

export default function Styles() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const [followerOn, setFollowerOn] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 150, damping: 22, mass: 0.5 });
  const sectionRef = useRef(null);
  const current = STYLES[active];

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const useFollower = finePointer && !reduce;

  return (
    <section
      id="styles"
      ref={sectionRef}
      data-testid="styles-section"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-40"
      onMouseMove={(e) => {
        x.set(e.clientX + 28);
        y.set(e.clientY - 150);
      }}
      onMouseLeave={() => setFollowerOn(false)}
    >
      <h2 className="relative mb-14 font-display text-[clamp(3.2rem,9vw,8.5rem)] uppercase leading-[0.88] md:mb-20">
        <Reveal>ESTILOS</Reveal>
        <Reveal delay={0.08}>
          <span className="text-outline">E SERVIÇOS.</span>
        </Reveal>
      </h2>

      {useFollower && (
        <motion.div
          aria-hidden="true"
          data-testid="styles-follower"
          className="pointer-events-none fixed left-0 top-0 z-[110]"
          style={{ x: sx, y: sy }}
        >
          <AnimatePresence mode="wait">
            {followerOn && (
              <motion.div
                key={current.n}
                className="relative h-[300px] w-[225px] overflow-hidden border border-ash/30 bg-graphite"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <img
                  src={current.img}
                  alt=""
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
                <span className="tag absolute bottom-3 left-3 bg-ink/70 px-2 py-1 !text-[8px]">
                  {current.name} — {current.real ? "TATUAGEM REAL" : "IMAGEM DE REFERÊNCIA"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <div
        className={`relative grid gap-10 ${
          useFollower ? "" : "md:grid-cols-[1fr_minmax(280px,380px)]"
        }`}
      >
        <div role="list" data-testid="styles-list">
          {STYLES.map((s, i) => {
            const isOpenMobile = mobileOpen === i;
            return (
              <div key={s.n} role="listitem" className="border-t border-graphite last:border-b">
                <button
                  type="button"
                  data-cursor="hidden"
                  onMouseEnter={() => {
                    setActive(i);
                    if (useFollower) setFollowerOn(true);
                  }}
                  onFocus={() => setActive(i)}
                  onClick={() => {
                    setActive(i);
                    setMobileOpen(isOpenMobile ? -1 : i);
                  }}
                  aria-expanded={isOpenMobile}
                  data-testid={`style-row-${i}`}
                  className="group flex w-full items-center gap-5 py-5 text-left md:gap-8 md:py-7"
                >
                  <span
                    className={`font-display text-4xl uppercase leading-none transition-all duration-500 group-hover:translate-x-3 md:text-7xl ${
                      active === i ? "text-ember md:translate-x-3" : "text-bone"
                    }`}
                  >
                    {s.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto text-xl transition-all duration-500 group-hover:text-ember ${
                      active === i
                        ? "text-ember opacity-100"
                        : "text-ash opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    ↗
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpenMobile && (
                    <motion.div
                      key="img"
                      className="overflow-hidden md:hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <img
                        src={s.img}
                        alt={s.alt}
                        width={900}
                        height={1200}
                        loading="lazy"
                        className="mb-5 h-64 w-full object-cover"
                      />
                      <p className="tag -mt-2 mb-2">{s.real ? "TATUAGEM REAL — STUDIO MAX" : "IMAGEM DE REFERÊNCIA — SUBSTITUIR"}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {!useFollower && (
          <div className="relative hidden md:block">
            <div
              className="sticky top-28 aspect-[3/4] overflow-hidden bg-graphite"
              data-testid="styles-preview"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={current.n}
                  src={current.img}
                  alt={current.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.08 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  exit={{ clipPath: "inset(0 0 100% 0)", scale: 1.04 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </AnimatePresence>
              <span className="tag absolute bottom-4 left-4 bg-ink/60 px-2 py-1 !text-bone/80">
                {current.name} — {current.real ? "TATUAGEM REAL" : "IMAGEM DE REFERÊNCIA"}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
