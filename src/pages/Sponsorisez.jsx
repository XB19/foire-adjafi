import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

const benefits = [
  {
    title: "Visibilité",
    heading: "Visibilité accrue de votre marque",
    text: "Affichez votre logo et message sur tous nos supports de communication : affiche, clôture, branding site etc.",
  },
  {
    title: "Image",
    heading: "Image de Marque Renforcée",
    text: "Associez votre entreprise à un événement positif et reconnu, pour améliorer votre notoriété.",
  },
  {
    title: "Réseautage",
    heading: "Opportunités de Networking",
    text: "Profitez d'un accès exclusif aux entrepreneurs, investisseurs et autres partenaires.",
  },
  {
    title: "Marketing direct",
    heading: "Accès au Public Jeune et Dynamique",
    text: "Positionnez votre marque auprès d'un public cible large, engagé et influent.",
  },
];

const partnerLogos = [
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.16-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.15-1-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.13-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.13-1-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.11-1-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.11-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.10-300x300.jpeg",
  "/images/site/WhatsApp-Image-2024-07-30-at-13.06.10-1-300x300.jpeg",
];

export default function Sponsorisez() {
  return (
    <>
      <PageHero
        eyebrow="Devenez Sponsor de la Foire Adjafi"
        title="Associez votre marque à l'événement phare de l'économie"
        subtitle="Soutenez l'entrepreneuriat togolais."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h1 className="heading-display text-3xl text-adjafi-ink sm:text-4xl">
          Pourquoi sponsoriser la Foire Adjafi ?
        </h1>
        <p className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
          La Foire Adjafi est l'événement incontournable pour promouvoir l'entrepreneuriat au
          Togo. En sponsorisant cet événement, vous associez votre marque à un rendez-vous
          apprécié par des milliers de visiteurs et soutenez activement le développement
          économique local. Votre entreprise gagne en visibilité et en crédibilité auprès d'un
          public diversifié.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
        >
          Contactez nous
        </Link>
      </section>

      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <p className="eyebrow text-xs text-adjafi-green">{b.title}</p>
                <h3 className="heading-display mt-3 text-base text-adjafi-ink">{b.heading}</h3>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
        <p className="eyebrow text-sm text-adjafi-green-dark">Nous travaillons ensemble</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Nos Partenaires de Confiance
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
          Nous tenons à remercier chaleureusement nos partenaires fidèles, dont l'engagement et le
          soutien continu contribuent au succès de la Foire Adjafi. Ensemble, nous faisons grandir
          l'entrepreneuriat togolais et soutenons la créativité locale.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {partnerLogos.map((logo) => (
            <div
              key={logo}
              className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-adjafi-gray-light bg-white p-4"
            >
              <img src={logo} alt="Partenaire" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-adjafi-green-dark py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h1 className="heading-display text-3xl sm:text-4xl">Contactez-nous pour Devenir Sponsor</h1>
          <p className="mt-6 font-open-sans leading-relaxed text-white/85">
            Envie de devenir sponsor de la Foire Adjafi ? Contactez notre équipe dès aujourd'hui
            pour découvrir comment nous pouvons vous aider à atteindre vos objectifs de visibilité
            et d'impact.
          </p>
          <Link
            to="/adjafi-14"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green-dark transition-transform hover:scale-105"
          >
            Inscrivez vous pour ADJAFI 14
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
