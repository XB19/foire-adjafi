import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const href = `/journal/${post.slug}`;
  return (
    <article className="overflow-hidden rounded-2xl border border-adjafi-gray-light shadow-sm transition-shadow hover:shadow-lg">
      <Link to={href}>
        <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-adjafi-green/10 px-3 py-1 font-mont-black text-[10px] tracking-wide text-adjafi-green">
            {post.category}
          </span>
          <p className="font-open-sans text-xs text-adjafi-gray">{post.date}</p>
        </div>
        <h3 className="heading-display mt-3 text-base leading-snug text-adjafi-ink">
          <Link to={href} className="hover:text-adjafi-green">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 font-open-sans text-sm leading-relaxed text-adjafi-gray">
          {post.excerpt}
        </p>
        <Link
          to={href}
          className="mt-4 inline-block font-mont-black text-xs tracking-wide text-adjafi-green hover:underline"
        >
          Lire plus
        </Link>
      </div>
    </article>
  );
}
