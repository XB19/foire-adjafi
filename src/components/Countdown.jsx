import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { countdownTargetISO } from "../data/siteData";

function getTimeLeft() {
  const diff = new Date(countdownTargetISO).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "JOURS", value: time.days },
    { label: "HEURES", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDES", value: time.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-adjafi-green text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <p className="eyebrow text-sm text-white/80">L'appel du vent léger</p>
        <h2 className="heading-display mt-4 text-2xl sm:text-3xl">
          La 14ᵉ Foire Adjafi vous tend les ailes.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-open-sans leading-relaxed text-white/80">
          Le papillon ne force rien.
          <br />
          Il attend le bon moment… et s'envole. Venez vibrer au rythme de
          l'économie jeune et des idées lumineuses.
        </p>

        <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 py-6 backdrop-blur"
            >
              <div className="heading-display text-3xl text-adjafi-yellow sm:text-5xl">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="mt-2 font-open-sans text-[10px] tracking-widest text-white/70 sm:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/adjafi-14"
          className="mt-12 inline-block rounded-full bg-adjafi-yellow px-10 py-4 font-mont-black text-sm tracking-wide text-adjafi-ink transition-transform hover:scale-105"
        >
          EN SAVOIR PLUS
        </Link>
      </div>
    </section>
  );
}
