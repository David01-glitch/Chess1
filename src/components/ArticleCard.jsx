import images from '../assets/images.js';
import Accordion from './Accordion.jsx';

// Article preview card. The full body is rendered inside an inline accordion so
// the complete article text is present in the static HTML and readable with JS
// off — no redirect, no modal, no new tab.
export default function ArticleCard({ article, eager = false }) {
  const img = images[article.imageKey];
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-ivory">
        <img
          src={img}
          alt={`${article.title} — ${article.category} guide from Senior Chess Academy`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width="640"
          height="400"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="eyebrow !text-gold">{article.category}</span>
          <span className="text-graphite/60">{article.readingTime}</span>
        </div>
        <h3 className="mt-3 text-xl text-balance">{article.title}</h3>
        <p className="mt-2 text-sm text-graphite/60">By {article.author}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">{article.excerpt}</p>
        <div className="mt-5">
          <Accordion summary="Read the full guide">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Accordion>
        </div>
      </div>
    </article>
  );
}
