import { Link } from "react-router-dom";
import Counter from "./Counter";
import { heroStats } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-adjafi-ink text-white">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/70 to-adjafi-ink/30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center lg:px-8 lg:py-40">
        <p className="eyebrow text-sm text-adjafi-yellow">Bienvenue</p>
        <h1 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-7xl">
          La nouvelle foire adjafi
        </h1>
        <h2 className="mt-4 font-open-sans text-lg text-white/80 sm:text-xl">
          La foire des jeunes entrepreneurs
        </h2>

        <Link
          to="/adjafi-14"
          className="mt-10 rounded-full bg-adjafi-green px-10 py-4 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105 hover:bg-adjafi-green-dark"
        >
          ALLONS Y
        </Link>

        <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading-display text-3xl text-adjafi-yellow sm:text-4xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 font-open-sans text-xs uppercase tracking-wide text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
