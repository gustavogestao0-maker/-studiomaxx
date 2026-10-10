import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY } from "@/data/content";
import { lockScroll } from "@/lib/scroll";
import { EASE } from "./Motion";

export default function Lightbox({ index, onClose, onNav }) {
  const item = index != null ? GALLERY[index] : null;
  const closeRef = useRef(null);

  useEffect(() => {
    if (index == null) return undefined;
    lockScroll(true);
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onNav]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          data-testid="lightbox"
          className="fixed inset-0 z-[170] flex flex-col bg-ink/[0.98]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="flex items-center justify-between border-b border-graphite px-5 py-4 md:px-10">
            <span className="tag">
              {item.ref} / {String(GALLERY.length).padStart(2, "0")} — STUDIO MAX / TATTOO
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar visualização"
              data-testid="lightbox-close"
              className="border border-bone/20 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-bone transition-colors hover:border-ember hover:text-ember"
            >
              FECHAR ✕
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-6 md:px-28">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.ref}
                src={item.full}
                alt={item.alt}
                width={1600}
                height={1200}
                data-testid="lightbox-image"
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={() => onNav(-1)}
              aria-label="Imagem anterior"
              data-testid="lightbox-prev"
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-bone/20 text-lg text-bone transition-colors hover:border-ember hover:text-ember md:left-8"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => onNav(1)}
              aria-label="Próxima imagem"
              data-testid="lightbox-next"
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-bone/20 text-lg text-bone transition-colors hover:border-ember hover:text-ember md:right-8"
            >
              →
            </button>
          </div>

          <div className="flex items-center justify-between border-t border-graphite px-5 py-4 md:px-10">
            <span className="tag">{item.tag}</span>
            <span className="tag">{item.real ? "STUDIO MAX" : "IMAGEM DE REFERÊNCIA — SUBSTITUIR"}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
