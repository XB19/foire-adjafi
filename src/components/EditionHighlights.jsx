import { edition14, theme, gallery14 } from "../data/adjafi14";

export default function EditionHighlights() {
  const cards = [
    {
      title: "À venir en 2026",
      content: `${edition14.dates} · ${edition14.location}`,
    },
    {
      title: "Un thème tourné vers l'avenir",
      content: theme.main,
    },
    {
      title: "Une foire en mouvement",
      content: "Une expérience immersive, des rencontres business et des animations qui rythment chaque journée.",
    },
  ];

  const images = gallery14.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center animate-fade-up">
        <p className="eyebrow text-sm text-adjafi-green">14ème édition</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Préparez-vous pour la 14ème foire ADJAFI
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
          Un événement à venir, imaginé pour mettre en lumière les talents, l'innovation et le savoir-faire togolais.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-adjafi-gray-light p-8 text-adjafi-ink shadow-xl transition-transform duration-700 hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
          >
            <p className="eyebrow text-xs text-adjafi-green">{card.title}</p>
            <p className="mt-4 font-open-sans text-sm leading-relaxed text-adjafi-gray">
              {card.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-[2rem] border border-adjafi-gray-light bg-white/5 p-4 shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="marquee-track flex gap-5 px-2 py-4">
            {images.concat(images).map((image, index) => (
              <div key={`${image}-${index}`} className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-3xl bg-adjafi-ink shadow-xl">
                <img src={image.src} alt={`Prévisualisation ${index + 1}`} className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
