import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import FaqList from '../components/FaqList.jsx';
import Accordion from '../components/Accordion.jsx';
import images from '../assets/images.js';
import { categories } from '../data/categories.js';
import { articles } from '../data/articles.js';
import { testimonials } from '../data/testimonials.js';
import { faqs } from '../data/faqs.js';
import { grandmasters } from '../data/grandmasters.js';
import { site, addressLine, organizationJsonLd, faqJsonLd } from '../data/site.js';

export default function Home() {
  const trending = articles.slice(0, 6);
  const spotlight = grandmasters.slice(0, 3);
  const stories = testimonials.slice(0, 3);

  return (
    <>
      <Seo
        path="/"
        description="Senior Chess Academy is a chess strategy and brain-training blog for adults 50+. Patient guides on openings, endgames, cognitive health, classic grandmasters, puzzles, and tournaments."
        jsonLd={[organizationJsonLd(), faqJsonLd(faqs)]}
      />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden border-b border-graphite/15 bg-ivory">
        <div className="container-wide grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Strategy &amp; brain training for ages 50+</p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
              The unhurried path to becoming a stronger chess player.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-graphite">
              Senior Chess Academy is a quiet, in-depth library of chess strategy and cognitive
              training, written for thoughtful adults who value understanding over memorization.
              Learn the openings, endgames, and ideas that genuinely improve your game — at the pace
              that suits you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/opening-strategies" className="btn-primary">
                Start with the openings
              </Link>
              <Link to="/chess-for-brain-health" className="btn-outline">
                Explore brain health
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-graphite/15 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-graphite/60">Founded</dt>
                <dd className="font-display text-2xl text-matte">{site.founded}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-graphite/60">Guides</dt>
                <dd className="font-display text-2xl text-matte">120+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-graphite/60">Readers</dt>
                <dd className="font-display text-2xl text-matte">38k</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-graphite/15 shadow-lift">
              <img
                src={images.hero}
                alt="A luxury wooden chessboard with hand-carved marble pieces in mid-game, lit by soft natural light"
                width="1024"
                height="576"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-xl bg-chess bg-[length:24px_24px] sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* 2 — Featured Strategy Categories */}
      <section aria-labelledby="categories-heading" className="container-wide py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Where to begin</p>
          <h2 id="categories-heading" className="mt-3 text-3xl sm:text-4xl">
            Featured strategy categories
          </h2>
          <p className="mt-4 text-graphite">
            Six pillars of practical improvement. Each one is a full guide, written to be read slowly
            and returned to often.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.to} to={cat.to} className="card group flex flex-col overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-ivory">
                <img
                  src={images[cat.imageKey]}
                  alt={`${cat.title} — illustrated guide`}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="400"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{cat.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-ink/85">{cat.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-walnut">
                  View guide
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 — Trending Chess Articles */}
      <section aria-labelledby="trending-heading" className="border-y border-graphite/15 bg-ivory">
        <div className="container-wide py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">From the journal</p>
              <h2 id="trending-heading" className="mt-3 text-3xl sm:text-4xl">
                Trending chess articles
              </h2>
              <p className="mt-4 text-graphite">
                Our most-read guides this season. Open any one to read the full article right here on
                the page.
              </p>
            </div>
            <Link to="/blog" className="btn-outline">
              Browse the full blog
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trending.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Grandmaster Spotlight */}
      <section aria-labelledby="spotlight-heading" className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="eyebrow">Grandmaster spotlight</p>
            <h2 id="spotlight-heading" className="mt-3 text-3xl sm:text-4xl">
              Learn from the masters who shaped the game
            </h2>
            <p className="mt-4 text-graphite">
              Each champion is a different teacher. Borrow the temperament that fits you — Capablanca’s
              clarity, Lasker’s grit, or Tal’s daring — and let their habits of thought shape your own.
            </p>
            <Link to="/classic-grandmasters" className="btn-primary mt-6">
              Meet the grandmasters
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {spotlight.map((gm) => (
              <div key={gm.name} className="card p-5">
                <h3 className="font-display text-lg leading-snug">{gm.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold">{gm.style}</p>
                <p className="mt-3 text-sm text-ink/85">{gm.lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Brain Training Highlights */}
      <section aria-labelledby="brain-heading" className="border-y border-graphite/15 bg-matte text-ivory">
        <div className="container-wide grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-ivory/10">
            <img
              src={images.seniorStudy}
              alt="An older adult studying a chess position at a desk with handwritten analysis notes and a chess clock"
              loading="lazy"
              decoding="async"
              width="1024"
              height="768"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !text-gold">Brain training highlights</p>
            <h2 id="brain-heading" className="mt-3 text-3xl text-marble sm:text-4xl">
              A fifteen-minute daily workout for a sharper mind
            </h2>
            <p className="mt-4 text-ivory/80">
              Chess asks your brain to remember, visualize, and plan all at once. Our brain-training
              approach turns that demand into a gentle, repeatable routine you can enjoy with your
              morning coffee.
            </p>
            <ul className="mt-6 space-y-3 text-ivory/85">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-gold" aria-hidden="true" />
                Five minutes of pattern-recognition puzzles to build fluency.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-gold" aria-hidden="true" />
                Five minutes replaying a classic game, guessing each move.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-gold" aria-hidden="true" />
                Five minutes of visualization to strengthen your mental board.
              </li>
            </ul>
            <Link to="/chess-for-brain-health" className="btn mt-7 bg-gold text-matte hover:bg-golddim">
              See the full routine
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — Community Stories */}
      <section aria-labelledby="community-heading" className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-graphite/15 shadow-soft">
            <img
              src={images.clubRoom}
              alt="A group of cheerful senior adults playing chess together in a bright community club room"
              loading="lazy"
              decoding="async"
              width="1024"
              height="576"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Community stories</p>
            <h2 id="community-heading" className="mt-3 text-3xl sm:text-4xl">
              Chess is better with company
            </h2>
            <p className="mt-4 text-graphite">
              From library back rooms to retirement-community common areas, our readers are building
              welcoming clubs across the country. Learn how a handful of boards and one regular
              evening can become the highlight of a community’s week.
            </p>
            <Link to="/community" className="btn-outline mt-6">
              Visit the community
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Testimonials */}
      <section aria-labelledby="testimonials-heading" className="border-y border-graphite/15 bg-ivory">
        <div className="container-wide py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">In their words</p>
            <h2 id="testimonials-heading" className="mt-3 text-3xl sm:text-4xl">
              What our readers say
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((t) => (
              <figure key={t.name} className="card flex flex-col p-6">
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-graphite">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-graphite/15 pt-4">
                  <span className="block font-semibold text-matte">{t.name}</span>
                  <span className="text-sm text-graphite/70">{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Newsletter */}
      <Newsletter />

      {/* 9 — FAQ */}
      <section aria-labelledby="faq-heading" className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Questions, answered</p>
            <h2 id="faq-heading" className="mt-3 text-3xl sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-graphite">
              Everything new readers tend to ask, from study habits to starting a local club. Still
              curious? <Link to="/contact" className="text-walnut underline underline-offset-2">Write to us</Link>.
            </p>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* 10 — Contact */}
      <section aria-labelledby="contact-heading" className="border-t border-graphite/15 bg-matte text-ivory">
        <div className="container-wide grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-gold">Get in touch</p>
            <h2 id="contact-heading" className="mt-3 text-3xl text-marble sm:text-4xl">
              We read every message
            </h2>
            <p className="mt-4 max-w-xl text-ivory/80">
              Whether you have a question about a guide, an idea for an article, or news of a club
              you are starting, we would love to hear from you. Senior Chess Academy is a real
              operation run by real people, and your notes shape what we publish next.
            </p>
            <Link to="/contact" className="btn mt-7 bg-gold text-matte hover:bg-golddim">
              Go to the contact page
            </Link>
          </div>
          <div className="rounded-xl border border-ivory/15 bg-ink p-6">
            <h3 className="font-display text-xl text-marble">Senior Chess Academy</h3>
            <address className="mt-4 space-y-3 not-italic text-ivory/85">
              <p>{addressLine}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${site.email}`} className="underline decoration-gold underline-offset-2">
                  {site.email}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href={`tel:${site.phoneHref}`} className="underline decoration-gold underline-offset-2">
                  {site.phone}
                </a>
              </p>
              <p className="text-ivory/60">{site.hours}</p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
