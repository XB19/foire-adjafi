import { Link } from "react-router-dom";

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
  eyebrow = "Merci pour votre participation!",
  title = "La treizième Foire adjafi",
  paragraph = "Un immense merci à tous les participants de la 13ème édition de la Foire Adjafi ! Grâce à votre énergie, vos talents et votre enthousiasme, cette édition a été un véritable succès. Exposants, partenaires, visiteurs et bénévoles, vous avez contribué à faire de cet événement un moment inoubliable pour tous. Nous vous invitons à revivre ces moments forts en explorant notre galerie photo et vidéo.",
  linkTo = "/adjafi-13",
  images = defaultImages,
}) {
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

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {images.map((src, i) => (
          <div
            key={src}
            className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={src}
              alt={`Foire Adjafi ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
