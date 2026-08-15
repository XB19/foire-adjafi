import { FaHeart } from "react-icons/fa6";

const slogans = [
  { tag: "#MadeWithHeart", image: null },
  { tag: "#FeelTheEnergy", image: "/images/slogans/feel-the-energy.png" },
  { tag: "#CelebrateTogether", image: "/images/slogans/celebrate-together.png" },
  { tag: "#ConstruisonsLAvenir", image: "/images/slogans/construisons-lavenir.png" },
];

export default function Slogans() {
  return (
    <section className="bg-adjafi-ink py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <p className="eyebrow text-center text-xs text-white/60">La philosophie de la campagne 2026</p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {slogans.map((slogan) => (
            <div key={slogan.tag} className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 p-3 sm:h-28 sm:w-28">
                {slogan.image ? (
                  <img src={slogan.image} alt={slogan.tag} className="h-full w-full object-contain" />
                ) : (
                  <FaHeart className="text-3xl text-adjafi-yellow sm:text-4xl" />
                )}
              </div>
              <p className="font-mont-black text-xs text-white sm:text-sm">{slogan.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
