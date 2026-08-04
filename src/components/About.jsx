import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/images/about-1.jpg"
            alt="Exposition de la Foire Adjafi"
            className="w-3/4 rounded-2xl object-cover shadow-xl"
          />
          <img
            src="/images/about-2.jpg"
            alt="Formation à la Foire Adjafi"
            className="absolute -bottom-8 -right-2 w-2/3 rounded-2xl border-4 border-white object-cover shadow-xl sm:-right-6"
          />
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="eyebrow text-sm text-adjafi-green-dark">Qui sommes-nous?</p>
          <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
            la foire des jeunes entrepreneurs
          </h1>
          <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
            La Foire Adjafi : le rendez-vous incontournable de l'entrepreneuriat
            et de l'innovation au Togo. Depuis sa première édition en 2011, cet
            événement est devenu la plateforme de référence pour les jeunes
            entrepreneurs, les PME et les start-ups. Plus qu'une simple foire,
            Adjafi valorise le savoir-faire local, stimule l'innovation et
            célèbre la diversité culturelle togolaise. À chaque édition, elle
            offre un espace unique de rencontre et d'échange, où les idées
            naissent, se développent, les projets se concrétisent, de
            nouvelles opportunités de croissance se créent et où de nouvelles
            relations voient le jour. Rejoignez-nous pour découvrir les
            talents qui façonnent l'avenir du Togo.
          </p>
          <Link
            to="/a-propos"
            className="mt-8 inline-block rounded-full bg-adjafi-green-dark px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-colors hover:bg-adjafi-green"
          >
            Cliquez ici
          </Link>
        </div>
      </div>
    </section>
  );
}
