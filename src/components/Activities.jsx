import {
  FaHandshakeAngle,
  FaMusic,
  FaChessQueen,
  FaPeopleGroup,
  FaUserGraduate,
  FaChampagneGlasses,
  FaStar,
  FaHandPeace,
} from "react-icons/fa6";
import { activities } from "../data/siteData";

const icons = {
  handshake: FaHandshakeAngle,
  music: FaMusic,
  chess: FaChessQueen,
  people: FaPeopleGroup,
  graduate: FaUserGraduate,
  glass: FaChampagneGlasses,
  star: FaStar,
  peace: FaHandPeace,
};

function ActivityCard({ activity }) {
  const Icon = icons[activity.icon];
  return (
    <div className="group [perspective:1200px]">
      <div className="relative h-72 w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-adjafi-green p-6 text-center text-white [backface-visibility:hidden]">
          <Icon className="text-4xl text-adjafi-yellow" />
          <h3 className="heading-display text-lg leading-tight">{activity.title}</h3>
          <p className="font-open-sans text-xs uppercase tracking-wide text-white/70">
            {activity.subtitle}
          </p>
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
          Les activités de la foire Adjafi
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
