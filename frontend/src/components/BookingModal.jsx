import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS } from "@/data/content";
import { lockScroll } from "@/lib/scroll";
import { EASE } from "./Motion";

const OPTIONS = [
  {
    label: "TATUAGEM",
    phone: LINKS.phoneTattoo,
    href: LINKS.whatsapp,
    testid: "booking-option-tattoo",
  },
  {
    label: "PIERCING",
    phone: LINKS.phonePiercing,
    href: LINKS.whatsappPiercing,
    testid: "booking-option-piercing",
  },
];

export default function BookingModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    lockScroll(true);
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Agendamento — escolha o serviço"
          data-testid="booking-modal"
          className="fixed inset-0 z-[180] flex flex-col bg-ink/[0.97] backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="flex items-center justify-between border-b border-graphite px-5 py-4 md:px-10">
            <span className="tag">AGENDAMENTO — STUDIO MAX</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar agendamento"
              data-testid="booking-close"
              className="border border-bone/20 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-bone transition-colors hover:border-ember hover:text-ember"
            >
              FECHAR ✕
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center px-5 md:px-10">
            <motion.p
              className="tag mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            >
              O QUE VAMOS MARCAR?
            </motion.p>
            {OPTIONS.map((o, i) => (
              <motion.a
                key={o.label}
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                data-testid={o.testid}
                className="group flex items-center justify-between gap-6 border-t border-graphite py-7 last:border-b md:py-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.08 }}
              >
                <span>
                  <span className="block font-display text-4xl uppercase text-bone transition-colors duration-300 group-hover:text-ember md:text-7xl">
                    {o.label}
                  </span>
                  <span className="tag mt-3 block">{o.phone}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl text-ash transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember md:text-4xl"
                >
                  ↗
                </span>
              </motion.a>
            ))}
            <motion.p
              className="tag mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              VOCÊ SERÁ DIRECIONADO AO WHATSAPP DO ESTÚDIO
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
