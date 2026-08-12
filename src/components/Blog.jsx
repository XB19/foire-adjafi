import { Link } from "react-router-dom";
import { journalHighlights } from "../data/adjafi14";
import BlogCard from "./BlogCard";

export default function Blog() {
  const featured = journalHighlights;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <p className="eyebrow text-sm text-adjafi-green">Blog</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Notre Journal
        </h1>
      </div>

      <div className="mt-14 overflow-hidden">
        <div className="marquee-track flex gap-6 px-4 py-4">
          {[...featured, ...featured].map((post, index) => (
            <div key={`${post.slug}-${index}`} className="min-w-[320px] max-w-[320px] flex-none">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/journal"
          className="inline-block rounded-full border-2 border-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-adjafi-green transition-colors hover:bg-adjafi-green hover:text-white"
        >
          Voir tous les articles
        </Link>
      </div>
    </section>
  );
}
