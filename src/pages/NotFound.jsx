import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="eyebrow text-sm text-adjafi-green">404</p>
      <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
        Page introuvable
      </h1>
      <p className="mt-4 font-open-sans text-adjafi-gray">
        La page que vous cherchez n'existe pas ou plus.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
}
