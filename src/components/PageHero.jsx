export default function PageHero({ eyebrow, title, subtitle, image, dark = true }) {
  return (
    <section className="relative overflow-hidden bg-adjafi-ink text-white">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/70 to-adjafi-ink/40" />
        </div>
      )}
      {!image && dark && <div className="absolute inset-0 bg-adjafi-green" />}

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center lg:px-8 lg:py-28">
        {eyebrow && <p className="eyebrow text-sm text-adjafi-yellow">{eyebrow}</p>}
        <h1 className="heading-display mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-open-sans text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
