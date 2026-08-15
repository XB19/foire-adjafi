import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import { edition14 } from "../data/adjafi14";
import { heroStats } from "../data/siteData";

export default function Hero() {
  const [hasLocalVideo, setHasLocalVideo] = useState(false);

  useEffect(() => {
    // check if local hero video exists
    fetch("/videos/hero.mp4", { method: "HEAD" })
      .then((res) => {
        if (res.ok) setHasLocalVideo(true);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden bg-adjafi-ink text-white">
      <div className="absolute inset-0 overflow-hidden">
        {hasLocalVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero.mp4"
            poster="/images/adjafi14/cover.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full object-cover"
            src="https://www.youtube.com/embed/DuRwgmfmhcs?autoplay=1&mute=1&controls=0&loop=1&playlist=DuRwgmfmhcs&modestbranding=1&showinfo=0&rel=0"
            title="Background video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-36 pt-20 text-center lg:px-8 lg:pb-44 lg:pt-28 animate-fade-up">
        <div className="relative z-10 flex flex-col items-center gap-6">
          <p className="eyebrow text-sm text-adjafi-yellow">Bienvenue</p>
          <img
            src="/images/adjafi14/logo.png"
            alt="Logo 14ème édition Adjafi"
            className="mx-auto h-32 w-auto object-contain sm:h-36 lg:h-44"
          />
          <h1 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-7xl">
            la 14ème foire ADJAFI
          </h1>
          <h2 className="max-w-2xl mt-4 font-open-sans text-lg text-white/80 sm:text-xl">
            {edition14.tagline}
          </h2>

          <Link
            to="/adjafi-14"
            className="mt-8 rounded-full bg-adjafi-green px-10 py-4 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105 hover:bg-adjafi-green-dark"
          >
            ALLONS-Y
          </Link>
        </div>

        <div className="mt-16 w-full">
          <div className="mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-3xl bg-[#ff7a00] bg-opacity-95 p-6 sm:p-8 shadow-2xl ring-1 ring-black/10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-4">
                  <div className="heading-display text-4xl lg:text-5xl text-white">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 font-open-sans text-xs uppercase tracking-wide text-white/90 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
