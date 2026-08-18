import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

const advantages = [
  {
    title: "Accroître votre visibilité",
    text: "Exposez votre marque, vos produits et services à un public diversifié, incluant des clients potentiels, des partenaires et des médias. La Foire Adjafi vous permet de renforcer votre notoriété auprès d'un large public.",
  },
  {
    title: "Obtenir des Retours Immédiats",
    text: "La Foire Adjafi est un espace de rencontres stratégiques avec des investisseurs, fournisseurs et entrepreneurs de divers horizons. Nouez des partenariats et ouvrez des opportunités de croissance.",
  },
  {
    title: "Gagner en Compétences et S'inspirer des tendances",
    text: "Participez à des ateliers et conférences sur des thématiques clés pour affiner vos stratégies et découvrir de nouvelles pratiques auprès des autres exposants.",
  },
  {
    title: "Lancer un produit ou Augmenter vos ventes",
    text: "Profitez d'une plateforme de vente pour interagir avec les visiteurs et susciter l'intérêt pour vos produits, boostez votre chiffre d'affaires et créez une base de prospects.",
  },
];

const stands = [
  {
    name: "Prime",
    price: "94 000 FCFA",
    items: ["Stand sous apatam", "Bannière de 9m²", "Bannière fronton (4x3m)"],
  },
  {
    name: "Extra",
    price: "128 000 FCFA",
    items: ["Tente pagode blanche", "Espace de 9m² soit 3x3m", "Bannière fronton (4x3m)"],
    image: "/images/site/EXTRA-1024x749.png",
  },
  {
    name: "Hall",
    price: "158 000 FCFA",
    items: [
      "Stand sous chapiteaux",
      "Espace de 9m² soit 3x3m",
      "Pelouse synthétique",
      "Bannière fronton (4x3m)",
    ],
    image: "/images/site/HALL-1024x749.png",
  },
  {
    name: "Emergence",
    price: "210 000 FCFA",
    items: [
      "Tente pagode blanche",
      "Espace de 9m² soit 3x3m",
      "Plancher et pelouse synthétique",
      "Bannière fronton (4x3m)",
    ],
    image: "/images/site/EMERGENCE-1024x749.png",
  },
  {
    name: "Partenaire",
    price: "1 000 000 FCFA",
    items: [
      "Tente pagode blanche",
      "Espace de 25m² soit 5x5m",
      "Plancher et pelouse synthétique",
      "Bannière fronton (4x3m)",
      "Logo sur les supports de communication",
    ],
  },
];

const reservationPhones = ["90 67 67 84", "79 23 53 36"];

export default function Exposez() {
  return (
    <>
      <PageHero
        eyebrow="Rejoignez des centaines de TPME"
        title="Le premier pas vers de nouvelles opportunités"
        subtitle="Présentez vos produits et services à un public large et diversifié."
        image="/images/site/DSC_8814-768x512.jpg"
      />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h1 className="heading-display text-3xl text-adjafi-ink sm:text-4xl">
          Rejoignez la foire Adjafi !
        </h1>
        <Link
          to="/nos-exposants"
          className="mt-6 inline-block rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
        >
          Découvrir nos exposants
        </Link>
        <p className="mt-8 font-open-sans leading-relaxed text-adjafi-gray">
          Adjafi 2025 ça fera 10 ans que nous avons démarré cette aventure mais j'avoue que nous
          n'avons été jamais déçus en matière d'attente et d'objectifs. C'est une grande
          opportunité pour les jeunes entrepreneurs qui ont des produits innovants pour avoir de
          la visibilité, pour promouvoir leur produit et surtout pour vendre. Afrika nature par
          exemple a profité de cette foire pour lancer cette année la nouvelle marque de sa
          structure et c'était un succès.
        </p>
      </section>

      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="heading-display text-2xl text-adjafi-ink sm:text-3xl">
              Les avantages pour vous de nous rejoindre
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
              Exposer à la Foire Adjafi, c'est bien plus que participer à un événement : c'est une
              occasion stratégique de développer votre entreprise, de gagner en visibilité et de
              tisser des liens avec des acteurs clés de l'entrepreneuriat togolais et régional.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-display text-base text-adjafi-green">{a.title}</h3>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h1 className="heading-display text-3xl text-adjafi-ink sm:text-4xl">Les types de stands</h1>
          <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
            La Foire Adjafi propose une variété de stands adaptés aux besoins des entrepreneurs,
            PME et grandes entreprises. Explorez les options disponibles et choisissez le stand
            qui mettra le mieux en valeur votre marque.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stands.map((stand) => (
            <div key={stand.name} className="overflow-hidden rounded-2xl border border-adjafi-gray-light">
              {stand.image && (
                <img src={stand.image} alt={stand.name} className="h-40 w-full object-cover" />
              )}
              <div className="p-6">
                <h3 className="heading-display text-lg text-adjafi-ink">{stand.name}</h3>
                <span className="mt-2 inline-block rounded-full bg-adjafi-yellow px-3 py-1 font-mont-black text-xs text-adjafi-ink">
                  {stand.price}
                </span>
                <ul className="mt-4 space-y-2 font-open-sans text-sm text-adjafi-gray">
                  {stand.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-adjafi-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-adjafi-ink px-8 py-6 text-center text-white">
          <p className="heading-display text-lg">Réservez votre stand dès maintenant</p>
          <p className="mt-2 font-open-sans text-sm text-white/70">
            Tous les prix sont exprimés en FCFA et couvrent la durée complète de la foire.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {reservationPhones.map((phone) => (
              <a
                key={phone}
                href={`tel:+228${phone.replace(/\s/g, "")}`}
                className="font-mont-black text-lg tracking-wide text-adjafi-yellow hover:underline"
              >
                +228 {phone}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h1 className="heading-display text-3xl sm:text-4xl">Inscrivez-vous maintenant</h1>
          <p className="mt-6 font-open-sans leading-relaxed text-white/85">
            Rejoignez la communauté dynamique de la Foire Adjafi et contribuez à façonner l'avenir
            de l'entrepreneuriat au Togo. Participez à cet événement unique, renforcez votre réseau
            et faites avancer votre entreprise.
          </p>
          <Link
            to="/adjafi-14"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green transition-transform hover:scale-105"
          >
            Inscrivez vous pour ADJAFI 14
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
