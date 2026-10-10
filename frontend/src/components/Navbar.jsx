import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS, NAV } from "@/data/content";
import { lockScroll, scrollToId } from "@/lib/scroll";
import { EASE } from "./Motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    const wasOpen = open;
    setOpen(false);
    setTimeout(() => scrollToId(href), wasOpen ? 250 : 0);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-[140] border-b transition-colors duration-500 ${
          scrolled
            ? "border-graphite bg-ink/75 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            data-testid="nav-logo"
            className="font-display text-lg tracking-wide text-bone md:text-xl"
          >
            STUDIO MAX<span className="text-ember">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className="link-line font-mono text-[11px] tracking-[0.25em] text-bone/80 hover:text-bone"
              >
                {item.label}.
              </a>
            ))}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta"
              className="btn btn--ghost !px-5 !py-2.5"
            >
              AGENDAR <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-mobile-cta"
              className="border border-ember px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-ember"
            >
              AGENDAR
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              data-testid="nav-toggle"
              className="flex h-10 w-10 flex-col items-end justify-center gap-1.5"
            >
              <span className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            data-testid="mobile-menu"
            className="fixed inset-0 z-[130] flex flex-col justify-between bg-ink/[0.97] px-6 pb-10 pt-28 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ul>
              {NAV.map((item, i) => (
                <li key={item.label} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    data-testid={`mobile-link-${item.label.toLowerCase()}`}
                    className="group flex items-baseline gap-4 border-b border-graphite py-3"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 * i }}
                  >
                    <span className="font-mono text-xs text-ember">0{i + 1}</span>
                    <span className="font-display text-5xl uppercase text-bone group-hover:text-ember">
                      {item.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <p className="tag">SINOP — MT · SÉRGIO PEREIRA · {LINKS.phoneTattoo}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
