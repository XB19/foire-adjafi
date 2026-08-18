import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaGauge,
  FaEnvelope,
  FaNewspaper,
  FaStore,
  FaHandshake,
  FaBars,
  FaXmark,
  FaArrowRightFromBracket,
  FaEye,
} from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/admin", label: "Tableau de bord", icon: FaGauge, end: true },
  { to: "/admin/messages", label: "Messages", icon: FaEnvelope },
  { to: "/admin/articles", label: "Journal", icon: FaNewspaper },
  { to: "/admin/exposants", label: "Exposants", icon: FaStore },
  { to: "/admin/partenaires", label: "Partenaires", icon: FaHandshake },
];

function SidebarContent({ onNavigate, onClose }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-6 py-6">
        <img src="/images/logo.png" alt="Foire Adjafi" className="h-9 w-auto object-contain" />
        <span className="font-mont-black text-xs uppercase tracking-widest text-white/60">Admin</span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="ml-auto text-lg text-white/60 hover:text-white"
          >
            <FaXmark />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-mont-black text-[13px] tracking-wide transition-colors ${
                isActive
                  ? "bg-adjafi-green text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <item.icon className="text-base" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-white/10 px-3 py-4">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl px-4 py-3 font-mont-black text-[13px] tracking-wide text-white/70 hover:bg-white/10 hover:text-white"
        >
          <FaEye className="text-base" />
          Voir le site
        </a>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-mont-black text-[13px] tracking-wide text-white/70 hover:bg-white/10 hover:text-white"
        >
          <FaArrowRightFromBracket className="text-base" />
          Déconnexion
        </button>
        {user?.email && (
          <p className="truncate px-4 pt-2 font-open-sans text-xs text-white/40">{user.email}</p>
        )}
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-adjafi-gray-light/40">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 bg-adjafi-ink lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 bg-adjafi-ink">
            <SidebarContent onNavigate={() => setMobileOpen(false)} onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-adjafi-gray-light bg-white px-4 py-3 lg:px-8">
          <button
            type="button"
            className="text-xl text-adjafi-ink lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <FaBars />
          </button>
          <p className="font-mont-black text-sm uppercase tracking-wide text-adjafi-ink">
            Espace administrateur
          </p>
        </header>

        <main className="px-4 py-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
