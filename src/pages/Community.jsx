import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Accordion from '../components/Accordion.jsx';
import images from '../assets/images.js';
import { testimonials } from '../data/testimonials.js';

const stories = [
  {
    title: 'The Tuesday two o’clock club, Columbus',
    body:
      'When Patricia Lindqvist retired, she missed the rhythm of a standing appointment more than the work itself. She set out four boards in her community center’s common room and posted a single index card: “Chess, Tuesdays at two. Beginners especially welcome.” Four people came the first week. Today twenty-two regulars fill the room, a waiting list has formed for the informal ladder, and the Tuesday game has become, in her words, “the appointment I would never miss.”',
  },
  {
    title: 'A grandfather and grandson, one board between them',
    body:
      'Walter Reyes learned the moves as a boy and forgot them for half a century. When his grandson took up chess at school, Walter dusted off the rules to keep up. He read one of our opening guides each morning and played the ideas out that evening over video call. A year on, the two of them analyze games together as equals, and Walter plays every week at his library club. “The game gave me my grandson’s attention,” he says, “and gave me back a part of myself.”',
  },
  {
    title: 'The hospital recovery group',
    body:
      'After a stroke, Samuel Okafor’s therapist suggested a daily mental challenge to rebuild focus. He started with our fifteen-minute brain-training routine and, within months, had organized a small chess group among others in his recovery program. The group is not about competition; it is about structure, conversation, and the quiet pride of solving a puzzle that seemed impossible the week before.',
  },
];

const steps = [
  {
    summary: 'Step 1 — Choose a consistent time and protect it',
    body:
      'The single biggest predictor of a club’s survival is a reliable, recurring time. “Whenever we feel like it” clubs fade within weeks; “every Tuesday at two” clubs become institutions. Pick a slot, put it on the community calendar, and guard it even on weeks when only two people show up. Consistency builds the habit, and the habit builds the club.',
  },
  {
    summary: 'Step 2 — Gather a few inexpensive boards',
    body:
      'You do not need tournament equipment to begin. Four to six standard plastic sets with weighted pieces are perfect and inexpensive. A couple of inexpensive clocks are a nice addition later, but they are not required for casual play. Many libraries and senior centers are happy to store a small box of sets between meetings.',
  },
  {
    summary: 'Step 3 — Make beginners feel genuinely welcome',
    body:
      'Pair newcomers with patient members for friendly, unrated games rather than dropping them into competition. Keep a one-page handout on hand covering how the pieces move and the value of development, so no one ever feels lost. The goal of a community club is belonging first and improvement second; the rating points take care of themselves.',
  },
  {
    summary: 'Step 4 — Add gentle structure as you grow',
    body:
      'Once a core group forms, introduce light structure: an informal ladder, a monthly evening built around a famous game, or a friendly match against another community. Structure gives members something to look forward to without ever making the club feel like an obligation. Write to us and we will gladly share our starter handouts.',
  },
];

export default function Community() {
  return (
    <>
      <Seo
        title="Community"
        path="/community"
        description="Real stories from senior chess clubs and a practical blueprint for starting your own — boards, timing, and a welcoming culture."
      />
      <PageHeader
        eyebrow="Community"
        title="Chess is better with company"
        lead="The most rewarding chess often happens away from any screen — in library back rooms and community common areas, over a board shared with a friend."
      />

      <section className="container-wide py-16">
        <div className="overflow-hidden rounded-xl border border-graphite/15 shadow-soft">
          <img
            src={images.clubRoom}
            alt="Senior adults gathered around wooden chessboards in a bright, welcoming community club room"
            loading="eager"
            decoding="async"
            width="1024"
            height="576"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="stories-heading" className="container-wide pb-8">
        <h2 id="stories-heading" className="text-3xl sm:text-4xl">
          Stories from our readers
        </h2>
        <p className="mt-3 max-w-2xl text-graphite">
          These are the moments that remind us why we do this work. Names are shared with permission.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {stories.map((s) => (
            <article key={s.title} className="card p-6">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="blueprint-heading" className="border-y border-graphite/15 bg-ivory">
        <div className="container-wide grid gap-10 py-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">A practical blueprint</p>
            <h2 id="blueprint-heading" className="mt-3 text-3xl sm:text-4xl">
              How to start a chess club in your community
            </h2>
            <p className="mt-4 text-graphite">
              We have helped readers launch clubs in retirement communities, libraries, and senior
              centers across the country. The recipe is simpler than you might think. Expand each step
              to read the details.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Ask for our starter kit
            </Link>
          </div>
          <div className="space-y-3">
            {steps.map((step) => (
              <Accordion key={step.summary} summary={step.summary}>
                <p>{step.body}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="voices-heading" className="container-wide py-16">
        <h2 id="voices-heading" className="text-3xl sm:text-4xl">
          More voices from the community
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
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
      </section>
    </>
  );
}
