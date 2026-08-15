import { activities } from "../data/siteData";

function ActivityCard({ activity }) {
  return (
    <div className="group [perspective:1200px]">
      <div className="relative h-72 w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl text-center text-white [backface-visibility:hidden]">
          <img
            src={activity.image}
            alt={activity.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adjafi-ink via-adjafi-ink/50 to-adjafi-ink/10" />
          <div className="relative flex h-full flex-col items-center justify-end gap-2 p-6">
            <h3 className="heading-display text-lg leading-tight">{activity.title}</h3>
            <p className="font-open-sans text-xs uppercase tracking-wide text-adjafi-yellow">
              {activity.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-adjafi-ink p-6 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="heading-display text-base text-adjafi-yellow">{activity.title}</h3>
          <p className="font-open-sans text-xs leading-relaxed text-white/80">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <section className="bg-adjafi-gray-light/50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="eyebrow text-sm text-adjafi-green">Quels sont nos activités?</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Les 5 temps forts de la foire Adjafi 2026
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-open-sans leading-relaxed text-adjafi-gray">
          Découvrez les activités phares de la Foire Adjafi, où
          l'entrepreneuriat rencontre l'innovation pour dessiner l'avenir du
          Togo et de l'Afrique. Plongez dans l'univers d'Adjafi en explorant
          des initiatives inspirantes et des solutions novatrices, qui
          transforment et soutiennent le développement de nos entrepreneurs
          tout en façonnant la prochaine génération.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
