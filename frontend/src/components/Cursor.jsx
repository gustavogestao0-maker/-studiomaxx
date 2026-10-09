import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Desktop-only additive cursor: an orange dot that grows into a VIEW chip over
   elements marked with data-cursor="view". Native cursor is never removed from
   essential controls. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 45, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 550, damping: 45, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target.closest?.("[data-cursor]");
      setMode(t ? t.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      data-testid="custom-cursor"
      className="pointer-events-none fixed left-0 top-0 z-[160]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ember"
        animate={{
          width: mode === "view" ? 76 : 10,
          height: mode === "view" ? 76 : 10,
          opacity: mode === "hidden" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {mode === "view" && (
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-ink">
            VIEW
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
