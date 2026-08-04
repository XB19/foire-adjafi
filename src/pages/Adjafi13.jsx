import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const news = [
  {
    title: "AMOUZE",
    image: "/images/site/AMOUZE-copy-819x1024.jpg",
    text: "Chaque mercredi, laissez-vous porter par les sons du live ! Une déambulation musicale avec des artistes qui revisiteront les classiques du répertoire togolais et africain dans une ambiance chaleureuse et conviviale au cœur de la foire.",
  },
  {
    title: "FESTIVAL de DJing",
    image: "/images/site/FESTVAL-DJING-2-copy-819x1024.jpg",
    text: "Une immersion dans l'univers des platines avec des formations pour jeunes DJ, des démos techniques en live, un concours de mix, et une grande soirée festive pour révéler les talents de demain.",
  },
  {
    title: "OFFICIAL VIZIT",
    image: "/images/site/OFFICIAL-VISIT-NEWWW-copy-819x1024.jpg",
    text: "Une surprise artistique attend les visiteurs ! Une figure emblématique de la scène musicale estivale fera une apparition exclusive sur la foire. Un moment inattendu, plein d'énergie et de prestige à ne pas manquer.",
  },
  {
    title: "Télé Achat — L'expérience en direct",
    image: "/images/site/TELE-ACHAT-copy-819x1024.jpg",
    text: "Du lundi au vendredi, entre 11h et 13h, une émission spéciale de télé-achat sera diffusée en direct depuis la foire, pour faire découvrir en temps réel les produits des exposants et booster la visibilité des marques locales.",
  },
  {
    title: "Adjafi Trip pour les exposants",
    image: "/images/site/ADJAFI-TRIP-copy-819x1024.jpg",
    text: "Une escapade économique et touristique : une sortie organisée avec les exposants pour découvrir les richesses culturelles et économiques de la région. Une opportunité de réseautage, de détente et de découverte.",
  },
  {
    title: "Émission Plateau : Le RDV du grand public",
    image: "/images/site/EMISSION-PLATEAU-copy-819x1024.jpg",
    text: "Une émission interactive avec des invités de marque, des entrepreneurs, des artistes et des personnalités inspirantes. L'occasion d'échanger, de débattre, de découvrir des parcours et de créer du lien avec le public.",
  },
];

export default function Adjafi13() {
  return (
    <>
      <section className="relative overflow-hidden bg-adjafi-ink text-white">
        <div className="absolute inset-0">
          <img
            src="/images/site/13-ADJAFI-FOND-819x1024.jpg"
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/70 to-adjafi-ink/40" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <img
            src="/images/site/ADJAFO-LOGO-CONTOUR-768x330.png"
            alt="Adjafi 13"
            className="mx-auto h-24 w-auto object-contain"
          />
          <span className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1 font-mont-black text-xs tracking-wide text-white/80">
            Revivre — édition passée
          </span>
          <p className="eyebrow mt-4 text-sm text-adjafi-yellow">
            AGROALIMENTAIRE : Améliorer le packaging des produits togolais pour une meilleure
            compétitivité des TPME sur le marché de la ZLECAF.
          </p>
          <h2 className="mt-4 font-open-sans text-lg text-white/80">
            21 Août au 07 septembre 2025
          </h2>
          <h1 className="heading-display mt-6 text-4xl sm:text-6xl">LA 13ᵉ</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="heading-display text-2xl text-adjafi-ink sm:text-3xl">
          On vous dit tout sur la 13
        </h2>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          Treize années d'audace, d'innovation et d'entrepreneuriat. Treize éditions pour
          grandir, se transformer, et s'élever plus haut. Aujourd'hui, Adjafi vous invite à une
          nouvelle aventure : celle de la compétitivité, de la créativité et de l'excellence.
        </p>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          La foire Adjafi s'est engagée depuis l'édition 2012 aux côtés du Gouvernement dans la
          valorisation et la promotion des cultures porteuses de croissance au Togo. Elle s'est
          inscrite à l'occasion de cette treizième édition dans la promotion de l'innovation et la
          technologie en matière d'agrobusiness tout en améliorant la qualité des produits des
          jeunes entrepreneurs afin de profiter des opportunités offertes par la zone de
          libre-échange continentale africaine (ZLECAF).
        </p>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          En tant que Chambre de commerce et d'industrie du Togo, notre mission est de favoriser
          le développement économique intégré et durable. Nous sommes convaincus que l'avenir de
          notre économie repose en grande partie sur la réussite de vos entreprises.
        </p>
      </section>

      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="heading-display text-3xl text-adjafi-ink sm:text-4xl">
              Les nouveautés de la 13ᵉ Foire Adjafi
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
              Cette année, la Foire Adjafi innove avec une série d'initiatives originales pour
              enrichir l'expérience des visiteurs, valoriser les exposants et animer le site tout
              au long de l'événement.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="heading-display text-base text-adjafi-ink">{item.title}</h3>
                  <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="heading-display text-2xl sm:text-3xl">Prenez votre envol avec la 13</h2>
          <p className="mt-6 font-open-sans leading-relaxed text-white/85">
            Soutenir la Foire Adjafi, c'est croire en l'avenir. Chaque année, grâce à
            l'engagement de partenaires publics, privés et institutionnels, la Foire Adjafi
            grandit et innove. En rejoignant l'édition 13, vous associez votre image à un
            événement de référence, au service de la jeunesse, de l'entrepreneuriat et du
            développement local. Ensemble, faisons rayonner les talents d'ici.
          </p>
          <Link
            to="/sponsorisez"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green transition-transform hover:scale-105"
          >
            DEVENIR PARTENAIRE
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="heading-display text-2xl text-adjafi-ink sm:text-3xl">
          Des rendez-vous économiques &amp; professionnels
        </h2>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          Un hub d'opportunités pour les entrepreneurs d'aujourd'hui et de demain. La Foire
          Adjafi, c'est un espace d'apprentissage, de réseautage et de croissance. Entre ateliers,
          formations, rencontres B2B, pitchs, espaces de financement et animations commerciales,
          tout est pensé pour renforcer les compétences, créer des connexions durables et
          dynamiser l'économie locale.
        </p>
      </section>

      <section className="bg-adjafi-yellow py-20 text-adjafi-ink">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="heading-display text-2xl sm:text-3xl">Prenez votre envol avec la 13</h2>
          <p className="mt-6 font-open-sans leading-relaxed text-adjafi-ink/80">
            Exposez, vendez, connectez, grandissez. La Foire Adjafi est bien plus qu'un simple
            lieu d'exposition : c'est un tremplin pour votre marque, une vitrine ouverte sur des
            milliers de visiteurs, et un espace de rencontres stratégiques. L'édition 13 vous
            réserve un cadre encore plus dynamique, avec de nouveaux concepts et une forte
            visibilité média.
          </p>
          <Link
            to="/exposez"
            className="mt-8 inline-block rounded-full bg-adjafi-ink px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
          >
            EXPOSEZ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="heading-display text-2xl text-adjafi-ink sm:text-3xl">Only Good Vibes</h2>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          Quand la culture prend le pouvoir sur la scène de la foire. La Foire Adjafi célèbre la
          richesse de notre patrimoine à travers une programmation artistique variée : concerts
          live, spectacles de danse, performances urbaines, balades musicales, et rendez-vous
          festifs. Parce qu'un événement économique peut aussi être un grand moment de culture.
        </p>
      </section>

      <section className="bg-adjafi-green-dark py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="heading-display text-2xl sm:text-3xl">Merci à tous les participants !</h2>
          <p className="mt-6 font-open-sans leading-relaxed text-white/90">
            La 13ᵉ Foire Adjafi a rassemblé des centaines d'exposants, de partenaires et de
            visiteurs autour de l'agroalimentaire et de la ZLECAF. Revivez les temps forts de
            cette édition et découvrez déjà ce qui vous attend pour la suite.
          </p>
          <Link
            to="/adjafi-14"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green-dark transition-transform hover:scale-105"
          >
            DÉCOUVRIR LA 14ᵉ ÉDITION
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
