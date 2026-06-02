import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import images from '../assets/images.js';
import { site, addressLine } from '../data/site.js';

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="The story and mission behind Senior Chess Academy — a patient chess and brain-training library founded for adults 50 and beyond."
      />
      <PageHeader
        eyebrow="Our story"
        title="A patient place to learn the most rewarding game ever invented"
        lead="Senior Chess Academy began with a simple conviction: that the best chess instruction for older adults should be unhurried, respectful, and genuinely deep."
      />

      <section className="container-wide grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="prose-article max-w-prose">
          <h2>How we began</h2>
          <p>
            Senior Chess Academy was founded in {site.founded} by {site.founder}, a former school
            teacher and lifelong club player who noticed a gap that bothered her. Chess instruction
            online was abundant, but almost all of it was built for the young and the hurried —
            rapid-fire videos, dense theory dumps, and an unspoken assumption that you should already
            know the basics. The adults she met at her local club in Columbus wanted something
            different: patient explanations, generous context, and the dignity of being taught as
            capable, curious people.
          </p>
          <p>
            She began writing guides at her kitchen table, printing them for the players at the
            Maple Grove community room and mailing them to friends who had taken up the game in
            retirement. The response was immediate and warm. Readers did not want to be rushed to a
            rating; they wanted to understand. They wanted to know <em>why</em> a knight belongs in
            the center, <em>why</em> the opposition wins king-and-pawn endings, and <em>why</em> the
            old masters still have so much to teach. Senior Chess Academy grew out of answering those
            questions, one careful article at a time.
          </p>

          <h2>Our mission</h2>
          <p>
            Our mission is to make deep, rewarding chess instruction accessible to adults aged 50 and
            beyond — and to do it in a way that honors how thoughtful people actually learn. We
            believe that understanding outlasts memorization, that patience is a strength rather than
            a limitation, and that a demanding hobby kept up over years is one of the great pleasures
            of later life.
          </p>
          <p>
            We write for the player returning to the game after fifty years and for the absolute
            beginner picking up the pieces for the first time. We assume nothing except curiosity. We
            never talk down, and we never rush. Every guide is designed to be read slowly, returned
            to often, and shared at the board with a friend.
          </p>

          <h2>What we believe about learning later in life</h2>
          <p>
            There is a stubborn myth that serious learning belongs to the young. We reject it
            entirely. The faculties chess rewards most — judgment, pattern recognition, patience, and
            the accumulated wisdom of experience — are precisely the ones that mature with age. We
            have watched readers in their seventies reach genuine club strength, win endgames they
            would once have lost, and start thriving chess clubs in their communities. Learning has
            no expiration date, and chess is one of its most generous teachers.
          </p>
          <p>
            We are also honest about what chess is and is not. It is a wonderful, demanding mental
            challenge and a source of real friendship and joy. It is not a medical treatment, and we
            make no health claims beyond what evidence supports. What we can promise is a library
            built with care, a tone that respects you, and a standard of writing we would be proud to
            put in front of any reader.
          </p>

          <blockquote>
            “The board is a place where age is an advantage. Patience, perspective, and a long memory
            for patterns are exactly what the game rewards.”
          </blockquote>

          <h2>Who is behind the academy</h2>
          <p>
            Today the academy is a small team of writers and club players. {site.founder} continues
            to lead our editorial direction. Marcus Holloway, a tournament player and coach, writes
            our strategy and tournament guides. Dr. Priya Raman, who has a long interest in
            cognition and healthy aging, contributes our brain-health articles with appropriate care
            and honesty. Together we read every message our readers send, and that correspondence
            shapes what we publish next.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="overflow-hidden rounded-xl border border-graphite/15 shadow-soft">
            <img
              src={images.studyBook}
              alt="A classic grandmaster chess book open beside an analog chess clock and walnut pieces"
              loading="lazy"
              decoding="async"
              width="640"
              height="480"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="card p-6">
            <h2 className="text-lg">Academy at a glance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-graphite/70">Founded</dt>
                <dd className="font-semibold text-matte">{site.founded}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-graphite/70">Founder</dt>
                <dd className="font-semibold text-matte">{site.founder}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-graphite/70">Based in</dt>
                <dd className="text-right font-semibold text-matte">Columbus, OH</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-graphite/70">Focus</dt>
                <dd className="text-right font-semibold text-matte">Adults 50+</dd>
              </div>
            </dl>
            <div className="mt-5 border-t border-graphite/15 pt-4 text-sm text-graphite">
              <p>{addressLine}</p>
              <p className="mt-1">
                <a href={`mailto:${site.email}`} className="text-walnut underline underline-offset-2">
                  {site.email}
                </a>
              </p>
            </div>
            <Link to="/contact" className="btn-primary mt-5 w-full">
              Contact the academy
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
