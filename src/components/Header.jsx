import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import { navLinks } from "../data/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-adjafi-gray-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Link to="/" className="shrink-0">
          <img src="/images/logo.png" alt="Foire Adjafi" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <button className="flex items-center gap-1 px-3 py-2 font-mont-black text-[13px] tracking-wide text-adjafi-ink transition-colors hover:text-adjafi-green">
                  {item.label}
                  <FaChevronDown className="text-[10px]" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="block px-3 py-2 font-mont-black text-[13px] tracking-wide text-adjafi-ink transition-colors hover:text-adjafi-green"
                >
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[190px] rounded-md border border-adjafi-gray-light bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 font-mont-black text-[12px] tracking-wide text-adjafi-ink hover:bg-adjafi-gray-light hover:text-adjafi-green"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden shrink-0 rounded-full bg-adjafi-green px-6 py-3 font-mont-black text-[13px] tracking-wide text-white transition-colors hover:bg-adjafi-green-dark lg:inline-block"
        >
          Nous contacter
        </Link>

        <button
          className="text-2xl text-adjafi-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-adjafi-gray-light bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((item) => (
            <div key={item.label} className="border-b border-adjafi-gray-light/60 py-2">
              {item.children ? (
                <details>
                  <summary className="cursor-pointer list-none py-2 font-mont-black text-sm tracking-wide">
                    {item.label}
                  </summary>
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-2 font-mont-black text-sm tracking-wide text-adjafi-ink/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={item.href}
                  className="block py-2 font-mont-black text-sm tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-4 block rounded-full bg-adjafi-green px-6 py-3 text-center font-mont-black text-sm tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            Nous contacter
          </Link>
        </nav>
      )}
    </header>
  );
}
