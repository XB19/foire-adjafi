import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { contactPhone, contactPhoneHref } from "../data/siteData";

export default function Contact() {
  return (
    <section className="bg-adjafi-green py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
        <h1 className="heading-display text-3xl sm:text-4xl">
          Pour plus d'informations
        </h1>
        <p className="mt-6 font-open-sans leading-relaxed text-white/85">
          Vous souhaitez en savoir plus sur la Foire Adjafi ? N'hésitez pas à
          nous appeler, nous écrire, ou à nous suivre sur nos réseaux sociaux
          pour rester informé des dernières actualités et nouveautés. Nous
          sommes là pour répondre à toutes vos questions et vous accueillir
          dans l'aventure Adjafi !
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contactPhoneHref}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green transition-transform hover:scale-105"
          >
            <FaPhone /> appelez nous
          </a>
          <Link
            to="/contact"
            className="rounded-full border-2 border-white px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-colors hover:bg-white hover:text-adjafi-green"
          >
            Laissez nous un message
          </Link>
        </div>

        <p className="mt-6 font-open-sans text-sm text-white/70">{contactPhone}</p>
      </div>
    </section>
  );
}
