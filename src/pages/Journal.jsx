import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";
import { blogPosts, blogCategories, socialLinks } from "../data/siteData";
import { usePublicList } from "../hooks/usePublicList";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Journal() {
  const [category, setCategory] = useState("All Post");
  const allPosts = usePublicList("journal_posts", blogPosts);

  const filtered = useMemo(() => {
    if (category === "All Post") return allPosts;
    return allPosts.filter((p) => p.category === category);
  }, [allPosts, category]);

  return (
    <>
      <PageHero eyebrow="Blog" title="Média &amp; Presse" />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-5 py-2 font-mont-black text-xs tracking-wide transition-colors ${
                    category === cat
                      ? "bg-adjafi-green text-white"
                      : "bg-adjafi-gray-light/60 text-adjafi-ink hover:bg-adjafi-gray-light"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div className="rounded-2xl bg-adjafi-gray-light/50 p-6">
              <h4 className="heading-display text-sm text-adjafi-ink">
                La foire Adjafi sur les réseaux sociaux
              </h4>
              <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
                Suivez-nous sur les réseaux sociaux pour ne rien manquer des actualités de la
                Foire Adjafi !
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-green text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-green text-white"
                >
                  <FaTiktok />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-green text-white"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-adjafi-gray-light/50 p-6">
              <h4 className="heading-display text-sm text-adjafi-ink">Articles récents</h4>
              <ul className="mt-4 space-y-3">
                {allPosts.slice(0, 4).map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/journal/${post.slug}`}
                      className="font-open-sans text-sm text-adjafi-gray hover:text-adjafi-green"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-adjafi-green p-6 text-white">
              <h4 className="heading-display text-sm">Revivre la 12ème</h4>
              <p className="mt-3 font-open-sans text-sm leading-relaxed text-white/85">
                Revivez les moments forts de la 12ème édition de la Foire Adjafi ! Plongez dans les
                souvenirs, les innovations et les rencontres marquantes.
              </p>
              <Link
                to="/adjafi-12"
                className="mt-4 inline-block rounded-full bg-white px-5 py-2 font-mont-black text-xs tracking-wide text-adjafi-green"
              >
                REVIVRE
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Contact />
    </>
  );
}
