import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import Contact from "../components/Contact";
import {
  edition14,
  context,
  theme,
  objectives,
  strategicAxes,
  innovations,
  targets,
  expectedResults,
  perspectives,
  positioning,
  activities,
  sponsorOpportunities,
  sponsorTiers,
  budget,
  sponsorSteps,
  calendar,
  conclusion,
  gallery14,
  contacts14,
} from "../data/adjafi14";
import { FaEnvelope, FaGlobe, FaLocationDot, FaPhone } from "react-icons/fa6";

function SectionTitle({ eyebrow, title, dark = false }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className={`eyebrow text-sm ${dark ? "text-adjafi-yellow" : "text-adjafi-green"}`}>
          {eyebrow}
        </p>
      )}
      <h1
        className={`heading-display mt-3 text-3xl sm:text-4xl ${
          dark ? "text-white" : "text-adjafi-ink"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}

export default function Adjafi14() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-adjafi-ink text-white">
        <div className="absolute inset-0">
          <img src="/images/adjafi14/cover.jpg" alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/75 to-adjafi-ink/50" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <img
            src="/images/adjafi14/logo.png"
            alt="Adjafi 14 — La foire des jeunes entrepreneurs"
            className="mx-auto h-28 w-auto object-contain sm:h-36"
          />
          <p className="eyebrow mt-8 text-sm text-adjafi-yellow">{edition14.tagline}</p>
          <p className="mx-auto mt-5 max-w-2xl font-open-sans text-white/85">
            {edition14.heroText}
          </p>
          <h2 className="heading-display mt-8 text-xl sm:text-2xl">{edition14.dates}</h2>
          <p className="mt-2 font-open-sans text-sm text-white/70">{edition14.location}</p>

          <Link
            to="/exposez"
            className="mt-10 inline-block rounded-full bg-adjafi-green px-10 py-4 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105 hover:bg-adjafi-green-dark"
          >
            ALLONS Y
          </Link>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <p className="eyebrow text-sm text-adjafi-green">Contexte et justification</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          {context.title}
        </h1>
        {context.paragraphs.map((p) => (
          <p key={p} className="mt-6 font-open-sans leading-relaxed text-adjafi-gray">
            {p}
          </p>
        ))}
      </section>

      {/* THEME */}
      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="eyebrow text-sm text-white/80">Thème officiel 2026 – 2030</p>
          <h1 className="heading-display mt-4 text-2xl sm:text-3xl">« {theme.main} »</h1>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur">
            <p className="eyebrow text-xs text-adjafi-yellow">{theme.subLabel}</p>
            <p className="mt-3 font-open-sans text-lg italic">« {theme.sub} »</p>
          </div>

          {theme.paragraphs.map((p) => (
            <p key={p} className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-white/85">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Vision stratégique 2026–2030" title="Objectifs de l'édition 2026" />
        <p className="mx-auto mt-6 max-w-3xl text-center font-open-sans leading-relaxed text-adjafi-gray">
          {objectives.intro}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.items.map((item, i) => (
            <div key={item} className="flex gap-4 rounded-2xl bg-adjafi-gray-light/50 p-5">
              <span className="heading-display shrink-0 text-2xl text-adjafi-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-open-sans text-sm leading-relaxed text-adjafi-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AXES STRATEGIQUES */}
      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle eyebrow="Feuille de route" title="Axes stratégiques de programmation" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategicAxes.map((axis) => (
              <div key={axis.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-display text-base text-adjafi-green">{axis.title}</h3>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {axis.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIONS */}
      <section className="bg-adjafi-ink py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTitle eyebrow="Nouveau" title="Innovations majeures de la 14ᵉ édition" dark />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {innovations.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-adjafi-yellow" />
                <p className="font-open-sans text-sm text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE (contexte innovations) */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src="/images/adjafi14/gallery-vr-demo.jpg"
            alt="Démonstration réalité virtuelle à la Foire Adjafi"
            className="h-72 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/adjafi14/gallery-startups.jpg"
            alt="Espace Startups Innovantes"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* CIBLES */}
      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle eyebrow="Un écosystème large et diversifié" title="Cibles prioritaires" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targets.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-display text-base text-adjafi-ink">{t.title}</h3>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTATS ATTENDUS + PERSPECTIVES */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sm text-adjafi-green-dark">Résultats attendus</p>
            <h2 className="heading-display mt-3 text-2xl text-adjafi-ink">
              Des effets concrets et mesurables
            </h2>
            {expectedResults.map((p) => (
              <p key={p} className="mt-4 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow text-sm text-adjafi-yellow-dark">Perspectives 2026–2030</p>
            <h2 className="heading-display mt-3 text-2xl text-adjafi-ink">
              Un cycle quinquennal ambitieux
            </h2>
            {perspectives.map((p) => (
              <p key={p} className="mt-4 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="heading-display text-2xl sm:text-3xl">Positionnement de l'évènement</h2>
          <p className="mx-auto mt-6 max-w-2xl font-open-sans leading-relaxed text-white/85">
            {positioning.intro}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {positioning.dimensions.map((d) => (
              <div key={d.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h3 className="heading-display text-lg text-adjafi-yellow">{d.title}</h3>
                <p className="mt-2 font-open-sans text-sm text-white/85">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPALES ACTIVITES */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Le programme" title="Principales activités" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <div key={a.title} className="rounded-2xl border border-adjafi-gray-light p-6">
              <h3 className="heading-display text-base text-adjafi-green">{a.title}</h3>
              <ul className="mt-4 space-y-2 font-open-sans text-sm text-adjafi-gray">
                {a.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-adjafi-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OPPORTUNITES SPONSORS */}
      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle eyebrow="Ils nous soutiennent" title="Opportunités pour les sponsors" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorOpportunities.map((o) => (
              <div key={o.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h3 className="heading-display text-base text-adjafi-ink">{o.title}</h3>
                <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES DE SPONSORING */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Formules de partenariat" title="Les offres de sponsoring" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-adjafi-gray-light"
            >
              <div className="p-6 text-white" style={{ backgroundColor: tier.color }}>
                <h3 className="heading-display text-2xl">{tier.name}</h3>
                <p className="mt-1 font-mont-black text-sm">{tier.price}</p>
              </div>
              <ul className="flex-1 space-y-2 p-6 font-open-sans text-sm text-adjafi-gray">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: tier.color }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-adjafi-ink py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTitle eyebrow="Transparence" title="Budget prévisionnel" dark />
          <p className="mx-auto mt-6 max-w-3xl text-center font-open-sans leading-relaxed text-white/80">
            {budget.intro}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {budget.lines.map((line) => (
              <div key={line.label} className="rounded-2xl bg-white/10 p-5">
                <p className="font-open-sans text-sm text-white/70">{line.label}</p>
                <p className="heading-display mt-1 text-lg text-adjafi-yellow">{line.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-adjafi-green-dark p-8 text-center">
            <p className="heading-display text-3xl sm:text-4xl">{budget.total}</p>
            <p className="mt-2 font-open-sans text-sm text-white/85">{budget.totalWords}</p>
          </div>
        </div>
      </section>

      {/* COMMENT DEVENIR SPONSOR */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="4 étapes simples" title="Comment devenir sponsor ?" />
        <div className="mt-12 space-y-8">
          {sponsorSteps.map((step, i) => (
            <div key={step} className="flex gap-6">
              <span className="heading-display shrink-0 text-4xl text-adjafi-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-open-sans leading-relaxed text-adjafi-gray">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <Countdown />

      {/* GALERIE PHOTO */}
      <section className="bg-adjafi-gray-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle eyebrow="Édition précédente" title="Galerie photo" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery14.map((img) => (
              <div key={img.src} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.category}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-adjafi-ink/70 px-3 py-1 font-mont-black text-[10px] tracking-wide text-white">
                  {img.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDRIER */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Save the date" title="Calendrier des activités 2026" />

        <div className="mt-12">
          <h3 className="heading-display text-center text-lg text-adjafi-green">
            Forum de l'édition
          </h3>
          <div className="mt-6 space-y-4">
            {calendar.forum.map((entry) => (
              <div
                key={entry.day}
                className="flex flex-col gap-3 rounded-2xl bg-adjafi-green-dark p-5 text-white sm:flex-row sm:items-center"
              >
                <span className="font-mont-black text-sm sm:w-48 sm:shrink-0">{entry.day}</span>
                <div className="space-y-1">
                  {entry.items.map((item) => (
                    <p key={item.label} className="font-open-sans text-sm">
                      <span className="text-adjafi-yellow">{item.time}</span> — {item.label}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="heading-display text-center text-lg text-adjafi-green">
            Période de la foire
          </h3>
          <div className="mt-6 space-y-4">
            {calendar.fair.map((entry) => (
              <div
                key={entry.day}
                className="flex flex-col gap-3 rounded-2xl bg-adjafi-green-dark p-5 text-white sm:flex-row sm:items-start"
              >
                <span className="font-mont-black text-sm sm:w-48 sm:shrink-0">{entry.day}</span>
                <div className="space-y-1">
                  {entry.items.map((item) => (
                    <p key={item.label} className="font-open-sans text-sm">
                      <span className="text-adjafi-yellow">{item.time}</span> — {item.label}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-adjafi-green py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="heading-display text-3xl sm:text-4xl">Conclusion</h1>
          <p className="mt-6 font-open-sans leading-relaxed text-white/85">{conclusion.text}</p>
          <Link
            to="/sponsorisez"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green transition-transform hover:scale-105"
          >
            Devenir partenaire
          </Link>
        </div>
      </section>

      {/* CONTACTS SPECIFIQUES 14 */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">
        <h2 className="heading-display text-xl text-adjafi-ink">Nos contacts</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-2xl text-adjafi-green" />
            <p className="font-open-sans text-sm text-adjafi-gray">{contacts14.email}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGlobe className="text-2xl text-adjafi-green" />
            <p className="font-open-sans text-sm text-adjafi-gray">{contacts14.website}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLocationDot className="text-2xl text-adjafi-green" />
            <p className="font-open-sans text-sm text-adjafi-gray">{contacts14.address}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaPhone className="text-2xl text-adjafi-green" />
            <p className="font-open-sans text-sm text-adjafi-gray">
              {contacts14.phones.join(" / ")}
            </p>
          </div>
        </div>
        <p className="mt-8 font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
          {contacts14.org}
        </p>
      </section>

      <Contact />
    </>
  );
}
