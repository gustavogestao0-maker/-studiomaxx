import { REVIEWS } from "@/data/content";
import { Fade, Reveal } from "./Motion";

export default function Reviews() {
  const [q1, q2, q3] = REVIEWS.quotes;

  return (
    <section
      data-testid="reviews-section"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-40"
    >
      <div className="relative mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-24">
        <h2 className="font-display text-[clamp(2.6rem,6.5vw,6.5rem)] uppercase leading-[0.88]">
          <Reveal>O QUE DIZEM</Reveal>
          <Reveal delay={0.08}>
            <span className="text-outline">OS CLIENTES.</span>
          </Reveal>
        </h2>
        <Fade delay={0.15} className="text-left md:text-right">
          <p className="font-display text-7xl text-ember md:text-9xl" data-testid="reviews-rating">
            4,6<span className="align-top font-mono text-xl text-ash md:text-3xl"> / {REVIEWS.scale}</span>
          </p>
          <p className="tag mt-3">
            {REVIEWS.source} — {REVIEWS.count}
          </p>
        </Fade>
      </div>

      <div className="relative grid gap-10 md:grid-cols-12 md:gap-8">
        <Fade className="md:col-span-7">
          <figure className="border-l-2 border-ember pl-6 md:pl-10">
            <span aria-hidden="true" className="font-serifed text-8xl leading-[0.4] text-bronze md:text-[9rem]">
              “
            </span>
            <blockquote className="mt-6 font-serifed text-3xl italic leading-snug text-bone md:text-6xl">
              {q1}
            </blockquote>
            <figcaption className="tag mt-6">GOOGLE REVIEW</figcaption>
          </figure>
        </Fade>

        <div className="flex flex-col justify-end gap-10 md:col-span-5">
          <Fade delay={0.1}>
            <figure className="border-t border-graphite pt-6">
              <blockquote className="font-serifed text-2xl italic text-bone/90 md:text-4xl">
                “{q2}”
              </blockquote>
              <figcaption className="tag mt-4">GOOGLE REVIEW</figcaption>
            </figure>
          </Fade>
          <Fade delay={0.2}>
            <figure className="border-t border-graphite pt-6 text-right">
              <blockquote className="font-display text-5xl uppercase text-ember md:text-7xl">
                “{q3}”
              </blockquote>
              <figcaption className="tag mt-4">GOOGLE REVIEW</figcaption>
            </figure>
          </Fade>
        </div>
      </div>
    </section>
  );
}
