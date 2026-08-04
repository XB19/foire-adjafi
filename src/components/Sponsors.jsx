import { Link } from "react-router-dom";

export default function Sponsors() {
  return (
    <section className="bg-adjafi-green-dark py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="eyebrow text-sm text-white/80">Soutenir l'entrepreneuriat</p>
        <h1 className="heading-display mt-3 text-3xl sm:text-4xl">
          Un partenariat solide pour l'entrepreneuriat de demain
        </h1>
        <p className="mt-6 font-open-sans leading-relaxed text-white/85">
          Un immense merci à nos partenaires historiques qui, depuis le
          début, ont été à nos côtés pour faire de la Foire Adjafi un succès.
          Grâce à leur soutien indéfectible, nous continuons à promouvoir
          l'entrepreneuriat et l'innovation au Togo. Nous invitons également
          les entreprises, associations et organisations partageant notre
          vision à se joindre à cette aventure enrichissante et à contribuer
          à l'essor de notre communauté. Ensemble, bâtissons un avenir
          prometteur pour l'entrepreneuriat togolais !
        </p>
        <Link
          to="/sponsorisez"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green-dark transition-transform hover:scale-105"
        >
          Cliquez ici
        </Link>
      </div>
    </section>
  );
}
