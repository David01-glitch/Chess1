import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import { articles } from '../data/articles.js';

export default function Blog() {
  const categoriesPresent = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <Seo
        title="Chess Blog"
        path="/blog"
        description="Long-form chess strategy and brain-training articles for adults 50+: openings, endgames, cognitive health, classic grandmasters, puzzles, and tournament play."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Senior Chess Academy Blog',
          url: 'https://www.seniorchessacademy.com/blog',
          blogPost: articles.map((a) => ({
            '@type': 'BlogPosting',
            headline: a.title,
            author: { '@type': 'Person', name: a.author },
            articleSection: a.category,
          })),
        }}
      />
      <PageHeader
        eyebrow="The journal"
        title="Chess strategy, written to be read slowly"
        lead="Every article opens right here on the page — no jumping around. Expand any guide to read it in full, then keep it open while you play it out on a board."
      />

      <section className="container-wide py-10">
        <p className="text-sm text-graphite">
          Browsing {articles.length} guides across {categoriesPresent.length} categories:{' '}
          <span className="text-walnut">{categoriesPresent.join(' · ')}</span>
        </p>
      </section>

      <section aria-label="All articles" className="container-wide pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.id} article={a} eager={i < 3} />
          ))}
        </div>
      </section>
    </>
  );
}
