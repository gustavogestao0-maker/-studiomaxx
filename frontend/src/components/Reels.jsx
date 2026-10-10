import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { REELS } from "@/data/content";
import { Fade, Reveal } from "./Motion";

function ReelSlide({ reel, index }) {
  const [mode, setMode] = useState("video");
  const [sound, setSound] = useState(false);
  const videoRef = useRef(null);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setSound(!v.muted);
  };

  return (
    <div
      data-testid={mode === "video" ? `reel-video-${index}` : `reel-frame-${index}`}
      className="relative aspect-[9/16] h-full w-full overflow-hidden bg-ink"
    >
      {mode === "video" ? (
        <video
          ref={(el) => {
            videoRef.current = el;
            if (el) el.muted = true;
          }}
          src={`/videos/reel-${index + 1}.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setMode("embed")}
          className="h-full w-full object-cover"
        />
      ) : (
        <iframe
          src={reel.embed}
          title={`Reel do Studio Max — vídeo ${reel.n}`}
          loading="lazy"
          className="absolute left-0 top-0 h-[132%] w-full"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {mode === "video" && (
        <button
          type="button"
          onClick={toggleSound}
          data-testid="reel-mute-btn"
          aria-label={sound ? "Desativar som" : "Ativar som"}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-bone/20 bg-ink/70 text-bone backdrop-blur-md transition-colors hover:border-ember hover:text-ember"
        >
          {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}

      <a
        href={reel.url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="reel-ig-link"
        className="absolute bottom-3 left-3 flex items-center gap-2 border border-bone/20 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone backdrop-blur-md transition-colors hover:border-ember hover:text-ember"
      >
        VER NO INSTAGRAM <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export default function Reels() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const go = (d) => setIdx((i) => (i + d + REELS.length) % REELS.length);

  /* troca automática de vídeo a cada 8s (reinicia quando o usuário navega) */
  useEffect(() => {
    if (reduce) return undefined;
    const t = setTimeout(() => setIdx((i) => (i + 1) % REELS.length), 8000);
    return () => clearTimeout(t);
  }, [idx, reduce]);

  return (
    <section
      data-testid="reels-section"
      className="relative overflow-hidden border-t border-graphite bg-ink px-5 py-24 md:px-10 md:py-36"
    >
      <Fade>
        <p className="tag mb-5">INSTAGRAM — VÍDEOS DO ESTÚDIO</p>
      </Fade>
      <h2 className="mb-8 font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.88] md:mb-6">
        <Reveal>STUDIO EM</Reveal>
        <Reveal delay={0.08}>
          <span className="text-outline">MOVIMENTO.</span>
        </Reveal>
      </h2>
      <Fade delay={0.15}>
        <p className="tag mb-12 md:mb-16">UM POUCO DO TRABALHO DE PERTO.</p>
      </Fade>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vídeo anterior"
          data-testid="reel-prev-btn"
          className="hidden h-11 w-11 items-center justify-center border border-graphite text-lg text-ash transition-colors hover:border-ember hover:text-ember sm:flex"
        >
          ←
        </button>

        <div
          data-testid="reel-carousel"
          className="relative aspect-[9/16] w-full max-w-[340px] shrink-0 overflow-hidden border border-graphite bg-graphite sm:max-w-[380px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ReelSlide reel={REELS[idx]} index={idx} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próximo vídeo"
          data-testid="reel-next-btn"
          className="hidden h-11 w-11 items-center justify-center border border-graphite text-lg text-ash transition-colors hover:border-ember hover:text-ember sm:flex"
        >
          →
        </button>
      </div>

      <div className="mt-7 flex justify-center gap-2.5">
        {REELS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Ver vídeo ${i + 1}`}
            data-testid={`reel-dot-${i}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? "w-8 bg-ember" : "w-2 bg-graphite hover:bg-ash"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
