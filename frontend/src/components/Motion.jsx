import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

/* Masked line reveal — line slides up from behind its own overflow mask.
   IMPORTANT: whileInView is observed on the OUTER mask (never clipped or
   translated itself — a fully clipped/translated target reports
   intersectionRatio 0 and the reveal would never fire). The inner line is
   driven via variant propagation. */
export function Reveal({ children, delay = 0, className = "", once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{ hidden: {}, visible: {} }}
    >
      <motion.span
        className="block will-change-transform"
        variants={
          reduce
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : { hidden: { y: "112%" }, visible: { y: "0%" } }
        }
        transition={{ duration: reduce ? 0.3 : 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/* Soft fade + drift on viewport entry. */
export function Fade({ children, delay = 0, y = 28, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Subtle vertical parallax inside an overflow-hidden frame. */
export function Parallax({ children, amount = 36, className = "", imgClassName = "" }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={reduce ? undefined : { y }}
        className={`h-full w-full scale-[1.14] ${imgClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
