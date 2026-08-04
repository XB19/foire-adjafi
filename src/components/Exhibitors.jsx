import { Link } from "react-router-dom";

export default function Exhibitors() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
      <p className="eyebrow text-sm text-adjafi-yellow-dark">
        À la découverte des exposants de la Foire Adjafi
      </p>
      <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
        Des exposants de plusieurs secteurs!
      </h1>
      <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
        Plongez au cœur de la créativité et de l'innovation togolaise en
        découvrant les exposants qui ont marqué les éditions précédentes de
        la Foire Adjafi. Artisans, startups, PME et entreprises établies vous
        dévoilent leurs produits, services et innovations. Explorez leurs
        histoires inspirantes, leurs savoir-faire uniques, et les solutions
        qu'ils apportent pour répondre aux besoins du marché local.
        Retrouvez ceux qui font la richesse de notre foire et découvrez les
        talents qui contribuent à l'essor économique du Togo.
      </p>
      <Link
        to="/nos-exposants"
        className="mt-8 inline-block rounded-full bg-adjafi-yellow px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-ink transition-transform hover:scale-105"
      >
        Cliquez ici
      </Link>
    </section>
  );
}
