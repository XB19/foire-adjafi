import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import { galleryImages } from "../data/siteData";

const stats = [
  { value: "04", label: "Innovations majeures" },
  { value: "8", label: "Pays de la sous-région" },
  { value: "250", label: "Exposants de plusieurs secteurs d'activité" },
];

export default function Adjafi12() {
  return (
    <>
      <section className="relative overflow-hidden bg-adjafi-ink text-white">
        <div className="absolute inset-0">
          <img
            src="/images/site/457229928_904030945100033_8811215086587047136_n-1024x682.jpg"
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/70 to-adjafi-ink/40" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <img
            src="/images/site/LOGO-ADJAFI-CONTOUR-2-1-768x255.png"
            alt="Adjafi 12"
            className="mx-auto h-20 w-auto object-contain"
          />
          <p className="eyebrow mt-6 text-sm text-adjafi-yellow">
            La ZLECAF : pour stimuler la commercialisation de nos produits transformés et
            pérenniser les acquis
          </p>
          <h2 className="mt-4 font-open-sans text-lg text-white/80">22 août au 8 septembre 2024</h2>
          <h1 className="heading-display mt-6 text-4xl sm:text-6xl">La douzième</h1>
          <Link
            to="/a-propos"
            className="mt-8 inline-block rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
          >
            En savoir plus sur ADJAFI
          </Link>
        </div>
      </section>

      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="heading-display text-2xl sm:text-3xl">Participez à l'édition 13</h2>
          <p className="mt-6 font-open-sans leading-relaxed text-white/85">
            Rejoignez des centaines d'entrepreneurs et partenaires pour exposer, partager et
            innover. Une opportunité unique pour développer votre réseau, accroître votre
            visibilité et saisir de nouvelles opportunités de croissance. Inscrivez-vous et faites
            briller votre entreprise !
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <p className="mx-auto max-w-3xl text-center font-open-sans leading-relaxed text-adjafi-gray">
          La 12ème édition de la Foire Adjafi a été un véritable succès, réunissant un large
          public et des exposants venus de toute la région. Cette édition a non seulement renforcé
          la visibilité des produits transformés locaux, mais elle a aussi marqué les esprits par
          ses innovations et son rayonnement. Découvrez quelques chiffres clés qui témoignent de
          l'ampleur et de l'impact de cet événement incontournable pour l'entrepreneuriat togolais.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-adjafi-gray-light/50 p-8 text-center">
              <div className="heading-display text-4xl text-adjafi-green">{s.value}</div>
              <p className="mt-3 font-open-sans text-sm text-adjafi-gray">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Gallery
        title="La douzième Foire adjafi"
        paragraph="Un immense merci à tous les participants de la 12ème édition de la Foire Adjafi ! Grâce à votre énergie, vos talents et votre enthousiasme, cette édition a été un véritable succès. Exposants, partenaires, visiteurs et bénévoles, vous avez contribué à faire de cet événement un moment inoubliable pour tous. Nous vous invitons à revivre ces moments forts en explorant notre galerie photo et vidéo."
        linkTo="/adjafi-12"
        images={galleryImages}
      />
      <Contact />
    </>
  );
}
