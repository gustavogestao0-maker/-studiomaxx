import { Component, useCallback, useEffect, useState } from "react";
import Lenis from "lenis";
import "@/App.css";
import { GALLERY } from "@/data/content";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Lightbox from "@/components/Lightbox";
import Styles from "@/components/Styles";
import Artist from "@/components/Artist";
import Piercing from "@/components/Piercing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import BookingModal from "@/components/BookingModal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink p-8 font-mono text-sm text-bone">
          Algo saiu do traço — recarregue a página.
        </div>
      );
    }
    return this.props.children;
  }
}

function Site() {
  const [lbIndex, setLbIndex] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);
  const closeLb = useCallback(() => setLbIndex(null), []);
  const navLb = useCallback(
    (dir) =>
      setLbIndex((i) =>
        i == null ? i : (i + dir + GALLERY.length) % GALLERY.length
      ),
    []
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <ScrollProgress />
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Marquee />
        <Gallery onOpen={setLbIndex} />
        <Styles />
        <Artist />
        <Piercing />
        <Reviews />
        <Contact onBook={openBooking} />
      </main>
      <Lightbox index={lbIndex} onClose={closeLb} onNav={navLb} />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Site />
    </ErrorBoundary>
  );
}
