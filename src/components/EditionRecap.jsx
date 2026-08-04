import Contact from "./Contact";

export default function EditionRecap({ title, theme, dates, logo }) {
  return (
    <>
      <section className="relative overflow-hidden bg-adjafi-ink text-white">
        <div className="absolute inset-0 bg-adjafi-green opacity-90" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <img src={logo} alt={title} className="mx-auto h-24 w-auto object-contain" />
          <h2 className="eyebrow mt-6 text-sm text-white/90">{theme}</h2>
          <p className="mt-4 font-open-sans text-lg text-white/80">{dates}</p>
          <h1 className="heading-display mt-6 text-4xl sm:text-6xl">{title}</h1>
        </div>
      </section>
      <Contact />
    </>
  );
}
