import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import About from "../components/About";
import Contact from "../components/Contact";

const pillars = [
  {
    title: "Visibilité des TPME",
    heading: "Renforcer la visibilité des petites et moyennes entreprises.",
    text: "Offrir une plateforme pour que les entreprises, startups et entrepreneurs puissent présenter et ou tester leurs produits et services à un large public.",
  },
  {
    title: "Formations",
    heading: "Faciliter l'accès à la formation et à l'information.",
    text: "Faire des sessions éducatives sur des thèmes variés allant de la gestion d'entreprise à l'innovation technologique, en passant par le marketing digital et le financement de projets.",
  },
  {
    title: "Préparation des jeunes",
    heading: "Promouvoir l'esprit d'entreprise chez les jeunes.",
    text: "Inspirer une nouvelle génération d'entrepreneurs africains à travers des ateliers, des séminaires et des rencontres avec des acteurs économiques établis.",
  },
  {
    title: "Réseau de TPMEs",
    heading: "Encourager le networking et le développement économique.",
    text: "Créer un environnement propice aux échanges professionnels et soutenir la croissance de l'économie locale et régionale.",
  },
];

const volets = [
  {
    title: "Exposition",
    text: "Les expositions présentent des produits innovants à découvrir et à acheter, avec des promotions et dégustations, tout en offrant aux visiteurs l'opportunité de réseauter avec d'autres entrepreneurs.",
  },
  {
    title: "Formation",
    text: "Elle offrent des connaissances et compétences via des forums, des salons thématiques et des tables rondes, enrichissant les participants en entrepreneuriat, innovation et marketing digital.",
  },
  {
    title: "Divertissement",
    text: "Le divertissement à la Foire Adjafi inclut des défilés de mode, des concerts d'artistes de renom et des soirées animées, créant une ambiance festive et mémorable pour tous les participants.",
  },
];

const missions = [
  {
    title: "Catalyseur pour l'entrepreneuriat et l'innovation",
    items: [
      "Encourager la création et le développement d'entreprises innovantes et durables",
      "Organiser des Ateliers, séminaires et rencontres pour inspirer une nouvelle génération d'entrepreneurs",
      "Mettre en avant les innovations technologiques, sociales et culturelles.",
    ],
  },
  {
    title: "Soutien au développement des PME/PMI",
    items: [
      "Offrir une plateforme pour accroître leur visibilité et accéder à des ressources de croissance",
      "Fournir le cadre parfait pour présenter et tester leur produits et services à un large public",
      "Encourager la consommation et la compétitivité des produits locaux",
    ],
  },
  {
    title: "Facilitation de l'accès à l'information et à la formation aux entrepreneurs",
    items: [
      "Proposer des formations sur la gestion d'entreprise, l'innovation technologique, le marketing digital et le financement de projets.",
      "Faciliter l'accès aux ressources et aux connaissances nécessaires pour le développement des compétences.",
      "Offrir des opportunités de formation adaptées aux besoins des entrepreneurs et des professionnels.",
    ],
  },
  {
    title: "Promotion des échanges commerciaux intra-africains et internationaux",
    items: [
      "Créer des opportunités pour développer des réseaux et découvrir de nouveaux marchés",
      "Créer un environnement propice au réseautage professionnel avec des partenaires potentiels, investisseurs et clients",
      "Encourager la consommation et la compétitivité des produits locaux",
    ],
  },
];

const targets = [
  {
    title: "Entrepreneurs, PME et Start-ups",
    text: "Au cœur de la Foire, entrepreneurs et start-ups exposent leurs idées, se connectent avec investisseurs et élargissent leur réseau tout en participant à des ateliers pour développer de nouvelles compétences.",
  },
  {
    title: "Grand Public et Consommateurs",
    text: "La Foire est un événement grand public attirant tous les âges, offrant une découverte de produits innovants, une immersion dans la culture entrepreneuriale et des activités ludiques et éducatives.",
  },
  {
    title: "Institutions Gouvernementales, privés & ONG",
    text: "Les agences gouvernementales, ONG et institutions privées participent à la Foire pour promouvoir leurs initiatives de soutien aux entreprises et engager des dialogues constructifs sur les politiques publiques favorisant l'entrepreneuriat.",
  },
  {
    title: "Investisseurs et Bailleurs de Fonds",
    text: "La Foire attire investisseurs locaux et internationaux, bailleurs de fonds et représentants de fonds d'investissement, offrant une plateforme idéale pour soutenir des projets prometteurs et financer l'innovation et l'entrepreneuriat.",
  },
  {
    title: "Médias et Influenceurs",
    text: "Les médias traditionnels et numériques, ainsi que les influenceurs, jouent un rôle crucial en amplifiant la portée de la Foire, partageant succès, innovations et moments forts avec un public élargi.",
  },
];

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="Une aventure qui commença il y a plus de 13 ans"
        title="L'histoire de la foire Adjafi"
        image="/images/site/WhatsApp-Image-2025-08-10-at-08.25.39-1024x731.jpeg"
      />

      <About showButton={false} />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-adjafi-gray-light p-6">
              <p className="eyebrow text-xs text-adjafi-green">{p.title}</p>
              <h3 className="heading-display mt-3 text-base text-adjafi-ink">{p.heading}</h3>
              <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="eyebrow text-sm text-adjafi-green-dark">La foire des jeunes entrepreneurs</p>
          <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">La foire ADJAFI</h1>
          <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
            Avec le soutien de partenaires tels que le Gouvernement togolais et la Chambre de
            Commerce et d'Industrie du Togo, la Foire Adjafi est devenue une plateforme
            incontournable pour ceux qui souhaitent contribuer au dynamisme économique et culturel
            de l'Afrique. Cet événement offre une occasion unique d'exposer des innovations, de
            créer des liens commerciaux et d'échanger des connaissances, renforçant ainsi
            l'économie locale et régionale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h1 className="heading-display text-3xl text-adjafi-ink sm:text-4xl">
            Les volets de la foire ADJAFI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
            La Foire Adjafi s'articule autour de trois volets principaux, offrant une expérience
            complète aux participants et visiteurs. Entre entrepreneuriat, culture et formation,
            chaque volet joue un rôle essentiel pour valoriser le savoir-faire togolais, renforcer
            les compétences et célébrer l'innovation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {volets.map((v, i) => {
            const styles = [
              { bg: "bg-adjafi-green", text: "text-white", body: "text-white/90" },
              { bg: "bg-adjafi-green-dark", text: "text-white", body: "text-white/90" },
              { bg: "bg-adjafi-yellow", text: "text-adjafi-ink", body: "text-adjafi-ink/80" },
            ][i];
            return (
              <div key={v.title} className={`rounded-2xl p-8 ${styles.bg} ${styles.text}`}>
                <h3 className="heading-display text-xl">{v.title}</h3>
                <p className={`mt-4 font-open-sans text-sm leading-relaxed ${styles.body}`}>
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-adjafi-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="heading-display text-center text-3xl sm:text-4xl">
            Les missions de la foire ADJAFI
          </h1>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {missions.map((m) => (
              <div key={m.title}>
                <h4 className="heading-display text-lg text-adjafi-yellow">{m.title}</h4>
                <ul className="mt-4 space-y-3 font-open-sans text-sm leading-relaxed text-white/80">
                  {m.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-adjafi-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <p className="eyebrow text-sm text-adjafi-green">C'est pour vous</p>
          <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">Ses cibles</h1>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targets.map((t) => (
            <div key={t.title} className="rounded-2xl bg-adjafi-gray-light/50 p-6">
              <h3 className="heading-display text-base text-adjafi-ink">{t.title}</h3>
              <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="heading-display text-center text-3xl text-adjafi-ink sm:text-4xl">
            Vous souhaitez en savoir plus?
          </h1>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-adjafi-green p-8 text-white">
              <h3 className="heading-display text-xl">REVIVRE ADJAFI</h3>
              <p className="mt-4 font-open-sans text-sm leading-relaxed text-white/90">
                Plongez dans l'univers des 12 éditions de la Foire Adjafi, où chaque événement a
                su surpasser le précédent. Découvrez des innovations captivantes et revivez des
                moments inoubliables qui ont marqué le parcours de la Foire.
              </p>
              <Link
                to="/adjafi-12"
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-mont-black text-xs tracking-wide text-adjafi-green"
              >
                REVIVRE
              </Link>
            </div>
            <div className="rounded-2xl bg-adjafi-yellow p-8 text-adjafi-ink">
              <h3 className="heading-display text-xl">NOUS CONTACTEZ</h3>
              <p className="mt-4 font-open-sans text-sm leading-relaxed text-adjafi-ink/80">
                Envie d'en savoir plus sur l'univers de la Foire Adjafi et ses nombreuses
                opportunités ? Contactez-nous pour découvrir tout ce que cet événement a à offrir.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-full bg-adjafi-ink px-6 py-3 font-mont-black text-xs tracking-wide text-white"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
