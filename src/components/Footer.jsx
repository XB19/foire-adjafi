import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";
import { socialLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-adjafi-ink py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 lg:flex-row lg:justify-between lg:px-8">
        <img src="/images/logo.png" alt="Foire Adjafi" className="h-12 w-auto object-contain" />

        <div className="flex items-center gap-4">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-adjafi-green"
          >
            <FaFacebookF />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="Tiktok"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-adjafi-green"
          >
            <FaTiktok />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-adjafi-green"
          >
            <FaYoutube />
          </a>
        </div>

        <p className="font-open-sans text-sm text-white/60">© 2024 La Foire Adjafi</p>
      </div>
    </footer>
  );
}
