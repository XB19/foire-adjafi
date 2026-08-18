import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import { blogPosts } from "../data/siteData";
import { usePublicList } from "../hooks/usePublicList";

const seedExhibitors = blogPosts
  .filter((p) => p.category === "EXPOSANTS")
  .map((p) => ({
    slug: p.slug,
    name: p.title,
    image: p.image,
    description: p.excerpt,
    href: `/journal/${p.slug}`,
  }));

export default function NosExposants() {
  const managed = usePublicList("exposants", []).map(
    (e) => ({
      slug: e.slug,
      name: e.name,
      image: e.image,
      description: e.description,
      href: `/nos-exposants/${e.slug}`,
    })
  );
  const exhibitors = [...managed, ...seedExhibitors];

  return (
    <>
      <PageHero eyebrow="Nos exposants" title="Ils exposent à la Foire Adjafi" />

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {exhibitors.map((exhibitor) => (
            <div
              key={exhibitor.slug}
              className="overflow-hidden rounded-2xl border border-adjafi-gray-light shadow-sm"
            >
              {exhibitor.image ? (
                <img
                  src={exhibitor.image}
                  alt={exhibitor.name}
                  className="h-64 w-full object-cover"
                />
              ) : (
                <div className="h-64 w-full bg-adjafi-gray-light" />
              )}
              <div className="p-8 text-center">
                <h2 className="heading-display text-2xl text-adjafi-ink">{exhibitor.name}</h2>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {exhibitor.description}
                </p>
                <Link
                  to={exhibitor.href}
                  className="mt-6 inline-block rounded-full bg-adjafi-green px-6 py-3 font-mont-black text-xs tracking-wide text-white transition-transform hover:scale-105"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-adjafi-gray-light/50 p-10 text-center">
          <h3 className="heading-display text-xl text-adjafi-ink">Vous aussi, devenez exposant</h3>
          <p className="mx-auto mt-3 max-w-xl font-open-sans text-sm text-adjafi-gray">
            Rejoignez la communauté d'entrepreneurs qui font rayonner leur marque à la Foire
            Adjafi.
          </p>
          <Link
            to="/exposez"
            className="mt-6 inline-block rounded-full bg-adjafi-yellow px-6 py-3 font-mont-black text-xs tracking-wide text-adjafi-ink transition-transform hover:scale-105"
          >
            Exposez avec nous
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
