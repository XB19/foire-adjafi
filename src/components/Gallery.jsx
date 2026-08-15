import { Link } from "react-router-dom";
import TouchCarousel from "./TouchCarousel";

const defaultImages = [
  "/images/adjafi14/gallery-vip-row.jpg",
  "/images/adjafi14/gallery-ribbon-cutting.jpg",
  "/images/adjafi14/gallery-audience.jpg",
  "/images/adjafi14/gallery-vr-demo.jpg",
  "/images/adjafi14/gallery-startups.jpg",
  "/images/adjafi14/gallery-products.jpg",
  "/images/adjafi14/gallery-fashion-stand.jpg",
  "/images/adjafi14/gallery-spices-stand.jpg",
  "/images/adjafi14/gallery-electronics-stand.jpg",
  "/images/adjafi14/gallery-crowd.jpg",
];

export default function Gallery({
  eyebrow = "En avant pour 2026",
  title = "Cap sur la 14ème édition",
  paragraph = "Découvrez l'esprit de la Foire Adjafi à travers des images inspirantes et préparez-vous à vivre une expérience encore plus dynamique.",
  linkTo = "/adjafi-14",
  images = defaultImages,
}) {
  const scrollImages = images.slice(0, 8);

  return (
    <section className="bg-adjafi-ink py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="eyebrow text-sm text-adjafi-yellow">{eyebrow}</p>
        <h1 className="heading-display mt-3 text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-6 font-open-sans leading-relaxed text-white/80">{paragraph}</p>
        <Link
          to={linkTo}
          className="mt-8 inline-block rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
        >
          découvrir la galerie
        </Link>
      </div>

      <div className="mx-auto mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
        <TouchCarousel itemClassName="min-w-[260px]" className="no-scrollbar px-6 py-6">
          {scrollImages.map((src, index) => (
            <div key={`${src}-${index}`} className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={src}
                alt={`Foire Adjafi ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </TouchCarousel>
      </div>
    </section>
  );
}
