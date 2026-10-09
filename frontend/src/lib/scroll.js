export function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.3 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function lockScroll(lock) {
  if (window.__lenis) lock ? window.__lenis.stop() : window.__lenis.start();
  document.documentElement.style.overflow = lock ? "hidden" : "";
}
