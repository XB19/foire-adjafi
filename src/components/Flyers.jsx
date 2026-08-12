import { useState } from "react";
import { flyers14 } from "../data/adjafi14";

export default function Flyers() {
  const [activeFlyer, setActiveFlyer] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center animate-fade-up">
        <p className="eyebrow text-sm text-adjafi-green">Supports visuels 2026</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Flyers de l’édition 14
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
          Découvrez les visuels officiels qui présentent l’esprit, le thème et l’ambiance de cette édition.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {flyers14.map((flyer) => (
          <article
            key={flyer.src}
            onClick={() => setActiveFlyer(flyer)}
            className="group cursor-pointer overflow-hidden rounded-[2rem] border border-adjafi-gray-light bg-white shadow-xl transition-transform duration-700 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-72 overflow-hidden bg-adjafi-ink">
              <img
                src={encodeURI(flyer.src)}
                alt={flyer.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="space-y-3 p-6">
              <p className="eyebrow text-xs uppercase tracking-[0.32em] text-adjafi-green">
                {flyer.category}
              </p>
              <h2 className="text-lg font-mont-black text-adjafi-ink">
                {flyer.title}
              </h2>
              <p className="text-sm leading-relaxed text-adjafi-gray">
                {flyer.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {activeFlyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setActiveFlyer(null)}
            className="absolute right-4 top-4 rounded-full border border-white bg-black/80 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Fermer
          </button>
          <div className="max-h-full w-full max-w-6xl overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl">
            <img
              src={encodeURI(activeFlyer.src)}
              alt={activeFlyer.title}
              className="mx-auto max-h-[80vh] w-auto rounded-3xl object-contain"
            />
            <div className="mt-5 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-adjafi-green">
                {activeFlyer.category}
              </p>
              <h2 className="mt-2 text-2xl font-mont-black text-adjafi-ink">
                {activeFlyer.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-adjafi-gray">
                {activeFlyer.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
