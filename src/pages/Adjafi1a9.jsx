import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

const groups = [
  {
    title: "La Naissance de la foire Adjafi",
    heading: "Les Quatre Premières Éditions : Aux Origines d'Adjafi",
    editions: [
      {
        code: "ADJAFI 1",
        year: "2012",
        dates: "31 Août au 09 Septembre 2012",
        theme: "La 1ère Édition de la Foire Adjafi : Un Début Prometteur",
        text: "Du 31 août au 9 septembre 2012, la Foire Adjafi a ouvert ses portes pour la première fois, réunissant plus de 150 exposants et proposant 5 rencontres professionnelles ainsi que 8 spectacles géants. Cet événement fondateur a posé les bases d'un espace dynamique d'échanges et d'opportunités pour les jeunes entrepreneurs togolais, offrant à la fois visibilité, networking et divertissement dans une ambiance unique.",
        image: "/images/site/ADJAFI-1-819x1024.jpg",
      },
      {
        code: "ADJAFI 2",
        year: "2013",
        dates: "12 au 24 Septembre 2013",
        theme: "Une Expansion Réussie",
        text: "Du 12 au 24 septembre 2013, la Foire Adjafi a accueilli plus de 160 exposants pour des journées d'exposition et de vente, accompagnées de 3 ateliers de formation et 3 masterclasses axés sur le renforcement des capacités. Cette édition a également offert une ambiance festive avec des concerts géants, animations, jeux et concours.",
        image: "/images/site/453082741_2485881544928827_2018725910024224183_n.jpg",
      },
      {
        code: "ADJAFI 3",
        year: "2014",
        dates: "26 Août au 9 Septembre 2014",
        theme: "Adjafi Monte en Puissance",
        text: "Du 26 août au 9 septembre 2014, la Foire Adjafi a rassemblé entrepreneurs et visiteurs autour du thème « L'entrepreneuriat, une approche citoyenne pour l'épanouissement humain ». Cette édition a mis en avant le rôle de l'entrepreneuriat dans le développement personnel et collectif.",
        image: "/images/site/457066915_2510729422444039_4701323927763399998_n.jpg",
      },
      {
        code: "ADJAFI 4",
        year: "2015",
        dates: "26 Août au 9 Septembre 2015",
        theme: "Une croissance continue",
        text: "Du 26 août au 9 septembre 2015, la 4ème édition, sous le thème « L'entrepreneuriat des jeunes, un engagement social », a réuni plus de 200 exposants, dont certains venus de la sous-région, avec concerts géants et formations enrichissantes.",
        image: "/images/site/460296882_2530999540417027_3765712084631574936_n.jpg",
      },
    ],
  },
  {
    title: "5ème à la 7ème Édition",
    heading: "Les Éditions Déterminantes de la foire Adjafi",
    editions: [
      {
        code: "ADJAFI 5",
        year: "2016",
        dates: "26 Août au 12 Septembre 2016",
        theme: "Édition de la foire des jeunes entrepreneurs",
        text: "Du 26 août au 12 septembre 2016, la Foire Adjafi a franchi un cap important sous le thème « La compétitivité des entreprises de jeunes dans l'espace UEMOA ». Cette édition a rassemblé des participants venus de tous les pays de l'UEMOA.",
        image: "/images/site/461319937_2542061512644163_7850217794803539986_n.jpg",
      },
      {
        code: "ADJAFI 6",
        year: "2017",
        dates: "24 Août au 10 Septembre 2017",
        theme: "Focus sur l'Agro-industrie",
        text: "La 6ème édition de la Foire Adjafi, tenue en 2017, a mis à l'honneur l'agro-industrie, un secteur à fort potentiel économique pour la sous-région, rassemblant des acteurs clés et des entrepreneurs engagés.",
        image: "/images/site/462479858_2550137278503253_8305567091795709722_n.jpg",
      },
      {
        code: "ADJAFI 7",
        year: "2018",
        dates: "30 Août au 16 Septembre 2018",
        theme: "Qualité et Innovation au Service de la Performance",
        text: "En 2018, la Foire Adjafi a consacré sa 7ème édition au thème « La qualité et l'innovation : transformons la culture de nos entreprises pour plus de performances », rassemblant entrepreneurs et experts engagés.",
        image: "/images/site/37587393_882543551929309_347808899761438720_n.jpg",
      },
    ],
  },
  {
    title: "Les 8ème et 9ème Éditions d'Adjafi",
    heading: "Entre Expansion et Renouveau",
    editions: [
      {
        code: "ADJAFI 8",
        year: "2019",
        dates: "22 Août au 8 Septembre 2019",
        theme: "Édition de la foire des jeunes entrepreneurs",
        text: "",
        image: "/images/site/60665449_1073195049530824_5365121254644776960_n.jpg",
      },
      {
        code: "ADJAFI 9",
        year: "2020",
        dates: "24 Août au 10 Septembre 2020",
        theme: "Le Digital au Service des Jeunes Entrepreneurs",
        text: "",
        image: "/images/site/120042797_1476133242570334_2733243705894371438_n.jpg",
      },
    ],
  },
];

function EditionCard({ edition }) {
  return (
    <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-adjafi-gray-light sm:grid-cols-2">
      <img src={edition.image} alt={edition.code} className="h-56 w-full object-cover sm:h-full" />
      <div className="p-6">
        <div className="flex items-baseline gap-3">
          <span className="heading-display text-2xl text-adjafi-green">{edition.code}</span>
          <span className="font-open-sans text-sm text-adjafi-gray">{edition.year}</span>
        </div>
        <p className="mt-1 font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
          {edition.dates}
        </p>
        <h3 className="heading-display mt-3 text-base text-adjafi-ink">{edition.theme}</h3>
        {edition.text && (
          <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
            {edition.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Adjafi1a9() {
  return (
    <>
      <PageHero
        eyebrow="Les Débuts d'Adjafi"
        title="Un Voyage à Travers 9 Éditions"
        subtitle="Plongez dans les archives et découvrez comment Adjafi est devenu un rendez-vous incontournable."
        image="/images/site/WhatsApp-Image-2024-11-11-at-10.29.41-2.jpeg"
      />

      {groups.map((group) => (
        <section key={group.heading} className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-sm text-adjafi-green">{group.title}</p>
            <h1 className="heading-display mt-3 text-2xl text-adjafi-ink sm:text-3xl">
              {group.heading}
            </h1>
          </div>
          <div className="mt-10 space-y-8">
            {group.editions.map((edition) => (
              <EditionCard key={edition.code} edition={edition} />
            ))}
          </div>
        </section>
      ))}

      <Contact />
    </>
  );
}
