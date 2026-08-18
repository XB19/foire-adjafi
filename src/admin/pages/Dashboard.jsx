import { Link } from "react-router-dom";
import { FaEnvelope, FaNewspaper, FaStore, FaHandshake, FaArrowRight } from "react-icons/fa6";
import { useApiTable } from "../hooks/useApiTable";
import ApiNotice from "../components/ApiNotice";
import { isApiConfigured } from "../../lib/apiClient";

export default function Dashboard() {
  const messages = useApiTable("contact_messages");
  const articles = useApiTable("journal_posts");
  const exposants = useApiTable("exposants");
  const partners = useApiTable("partners");

  const unread = messages.rows.filter((m) => !m.read).length;

  const cards = [
    {
      label: "Messages non lus",
      value: isApiConfigured ? unread : "—",
      total: messages.rows.length,
      icon: FaEnvelope,
      to: "/admin/messages",
      color: "bg-adjafi-green",
    },
    {
      label: "Articles publiés",
      value: isApiConfigured ? articles.rows.length : "—",
      icon: FaNewspaper,
      to: "/admin/articles",
      color: "bg-adjafi-ink",
    },
    {
      label: "Exposants",
      value: isApiConfigured ? exposants.rows.length : "—",
      icon: FaStore,
      to: "/admin/exposants",
      color: "bg-adjafi-yellow-dark",
    },
    {
      label: "Partenaires",
      value: isApiConfigured ? partners.rows.length : "—",
      icon: FaHandshake,
      to: "/admin/partenaires",
      color: "bg-adjafi-green",
    },
  ];

  return (
    <div>
      <h1 className="heading-display text-2xl text-adjafi-ink">Tableau de bord</h1>
      <p className="mt-2 font-open-sans text-sm text-adjafi-gray">
        Vue d'ensemble du contenu géré depuis cet espace.
      </p>

      <div className="mt-8">
        <ApiNotice />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light transition-shadow hover:shadow-md"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.color} text-white`}>
              <card.icon className="text-lg" />
            </div>
            <p className="heading-display mt-4 text-3xl text-adjafi-ink">{card.value}</p>
            <p className="mt-1 font-open-sans text-sm text-adjafi-gray">{card.label}</p>
            <p className="mt-3 flex items-center gap-1 font-mont-black text-xs tracking-wide text-adjafi-green opacity-0 transition-opacity group-hover:opacity-100">
              Gérer <FaArrowRight className="text-[10px]" />
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light">
          <h2 className="heading-display text-base text-adjafi-ink">Derniers messages</h2>
          {messages.rows.length === 0 ? (
            <p className="mt-4 font-open-sans text-sm text-adjafi-gray">Aucun message pour l'instant.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {messages.rows.slice(0, 4).map((m) => (
                <li key={m.id} className="border-b border-adjafi-gray-light pb-3 last:border-0 last:pb-0">
                  <p className="font-mont-black text-sm text-adjafi-ink">{m.name || "Anonyme"}</p>
                  <p className="truncate font-open-sans text-xs text-adjafi-gray">{m.message || m.phone}</p>
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/admin/messages"
            className="mt-4 inline-block font-mont-black text-xs tracking-wide text-adjafi-green hover:underline"
          >
            Voir tous les messages
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light">
          <h2 className="heading-display text-base text-adjafi-ink">Derniers articles</h2>
          {articles.rows.length === 0 ? (
            <p className="mt-4 font-open-sans text-sm text-adjafi-gray">Aucun article pour l'instant.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {articles.rows.slice(0, 4).map((a) => (
                <li key={a.id} className="border-b border-adjafi-gray-light pb-3 last:border-0 last:pb-0">
                  <p className="font-mont-black text-sm text-adjafi-ink">{a.title}</p>
                  <p className="font-open-sans text-xs text-adjafi-gray">{a.category}</p>
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/admin/articles"
            className="mt-4 inline-block font-mont-black text-xs tracking-wide text-adjafi-green hover:underline"
          >
            Gérer les articles
          </Link>
        </div>
      </div>
    </div>
  );
}
