import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import { usePublicList } from "../hooks/usePublicList";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ExposantDetail() {
  const { slug } = useParams();
  const exposants = usePublicList("exposants", []);
  const exposant = exposants.find((e) => e.slug === slug);

  if (!exposant) {
    return (
      <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="heading-display text-3xl text-adjafi-ink">Exposant introuvable</h1>
        <Link to="/nos-exposants" className="mt-6 text-adjafi-green hover:underline">
          Retour aux exposants
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow="Exposant" title={exposant.name} />

      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        {exposant.image && (
          <img
            src={exposant.image}
            alt={exposant.name}
            className="w-full rounded-2xl object-cover"
          />
        )}
        {exposant.description && (
          <p className="mt-8 whitespace-pre-wrap font-open-sans leading-relaxed text-adjafi-gray">
            {exposant.description}
          </p>
        )}

        {(exposant.phone || exposant.email) && (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-adjafi-gray-light pt-6">
            {exposant.phone && (
              <a
                href={`tel:${exposant.phone}`}
                className="flex items-center gap-2 font-open-sans text-sm text-adjafi-ink hover:text-adjafi-green"
              >
                <FaPhone className="text-adjafi-green" /> {exposant.phone}
              </a>
            )}
            {exposant.email && (
              <a
                href={`mailto:${exposant.email}`}
                className="flex items-center gap-2 font-open-sans text-sm text-adjafi-ink hover:text-adjafi-green"
              >
                <FaEnvelope className="text-adjafi-green" /> {exposant.email}
              </a>
            )}
          </div>
        )}

        <div className="mt-10">
          <Link to="/nos-exposants" className="font-mont-black text-sm text-adjafi-green hover:underline">
            ← Retour aux exposants
          </Link>
        </div>
      </article>

      <Contact />
    </>
  );
}
