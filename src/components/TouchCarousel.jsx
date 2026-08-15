import { useCallback, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

/**
 * Horizontal carousel built on native scroll-snap so touch swipe works
 * out of the box on mobile, plus prev/next buttons for manual navigation
 * on desktop and mobile alike. Auto-advances smoothly and pauses the
 * moment the user touches/drags/clicks it, so manual navigation never
 * fights the animation (that fight is what caused the old CSS marquee
 * to stutter/jump back).
 */
export default function TouchCarousel({
  children,
  itemClassName = "",
  gap = "gap-5",
  autoScrollInterval = 3200,
  className = "",
  showArrows = true,
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

  const step = useCallback((direction) => {
    const el = trackRef.current;
    if (!el) return;

    const firstItem = el.querySelector("[data-carousel-item]");
    const amount = firstItem ? firstItem.getBoundingClientRect().width + 20 : el.clientWidth * 0.85;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;

    if (direction > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: amount * direction, behavior: "smooth" });
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    const track = trackRef.current;
    if (!track) return;

    timerRef.current = setInterval(() => step(1), autoScrollInterval);
  }, [autoScrollInterval, step, stopAuto]);

  const pauseThenResume = useCallback(() => {
    stopAuto();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(startAuto, 4000);
  }, [startAuto, stopAuto]);

  const handleArrowClick = useCallback(
    (direction) => {
      pauseThenResume();
      step(direction);
    },
    [pauseThenResume, step]
  );

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [startAuto, stopAuto]);

  return (
    <div className="relative">
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

      {showArrows && (
        <>
          <button
            type="button"
            onClick={() => handleArrowClick(-1)}
            aria-label="Précédent"
            className="absolute left-1 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-adjafi-ink/80 text-white shadow-lg transition-transform hover:scale-110 hover:bg-adjafi-green sm:-left-4"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={() => handleArrowClick(1)}
            aria-label="Suivant"
            className="absolute right-1 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-adjafi-ink/80 text-white shadow-lg transition-transform hover:scale-110 hover:bg-adjafi-green sm:-right-4"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </>
      )}
    </div>
  );
}
