import { useCallback, useEffect, useRef } from "react";

/**
 * Horizontal carousel built on native scroll-snap so touch swipe works
 * out of the box on mobile. Auto-advances smoothly and pauses the moment
 * the user touches/drags it, so manual swipe never fights the animation
 * (that fight is what caused the old CSS marquee to stutter/jump back).
 */
export default function TouchCarousel({
  children,
  itemClassName = "",
  gap = "gap-5",
  autoScrollInterval = 3200,
  className = "",
}) {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    const track = trackRef.current;
    if (!track) return;

    timerRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const firstItem = el.querySelector("[data-carousel-item]");
      const step = firstItem ? firstItem.getBoundingClientRect().width + 20 : el.clientWidth * 0.85;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;

      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, autoScrollInterval);
  }, [autoScrollInterval, stopAuto]);

  const pauseThenResume = useCallback(() => {
    stopAuto();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(startAuto, 4000);
  }, [startAuto, stopAuto]);

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [startAuto, stopAuto]);

  return (
    <div
      ref={trackRef}
      onPointerDown={pauseThenResume}
      onTouchStart={pauseThenResume}
      onWheel={pauseThenResume}
      className={`flex snap-x snap-mandatory overflow-x-auto scroll-smooth ${gap} ${className}`}
      style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div key={index} data-carousel-item className={`snap-start shrink-0 ${itemClassName}`}>
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
