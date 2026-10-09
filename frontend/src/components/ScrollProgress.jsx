import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      data-testid="scroll-progress"
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[150] h-[2px] origin-left bg-ember"
      style={{ scaleX }}
    />
  );
}
