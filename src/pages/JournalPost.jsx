import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import { blogPosts } from "../data/siteData";
import { usePublicList } from "../hooks/usePublicList";

function Block({ block }) {
  if (block.type === "h3") {
    return <h3 className="heading-display mt-8 text-xl text-adjafi-ink">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2 font-open-sans text-adjafi-gray">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-adjafi-green" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mt-4 font-open-sans leading-relaxed text-adjafi-gray">{block.text}</p>
  );
}

export default function JournalPost() {
  const { slug } = useParams();
  const allPosts = usePublicList("journal_posts", blogPosts);
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="heading-display text-3xl text-adjafi-ink">Article introuvable</h1>
        <Link to="/journal" className="mt-6 text-adjafi-green hover:underline">
          Retour au journal
        </Link>
      </section>
    );
  }

  const others = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} subtitle={post.date} />

      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover" />
        <div className="mt-10">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-adjafi-gray-light pt-8">
          <Link to="/journal" className="font-mont-black text-sm text-adjafi-green hover:underline">
            ← Retour au journal
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-adjafi-gray-light/50 py-16">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <h2 className="heading-display text-center text-2xl text-adjafi-ink">
              Vous pouvez aussi aimer ces articles
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/journal/${p.slug}`}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <p className="font-open-sans text-xs text-adjafi-gray">{p.date}</p>
                    <h3 className="heading-display mt-2 text-base text-adjafi-ink">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}
