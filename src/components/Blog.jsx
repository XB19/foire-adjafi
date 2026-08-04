import { Link } from "react-router-dom";
import { blogPosts } from "../data/siteData";
import BlogCard from "./BlogCard";

export default function Blog() {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <p className="eyebrow text-sm text-adjafi-green">Blog</p>
        <h1 className="heading-display mt-3 text-3xl text-adjafi-ink sm:text-4xl">
          Notre Journal
        </h1>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-12 text-center">
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
