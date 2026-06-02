import Seo from '../components/Seo.jsx';
import GuideLayout from '../components/GuideLayout.jsx';
import { grandmasters } from '../data/grandmasters.js';

export default function ClassicGrandmasters() {
  return (
    <>
      <Seo
        title="Classic Grandmasters"
        path="/classic-grandmasters"
        description="Study the styles of Capablanca, Lasker, Tal, Petrosian, Karpov, and Menchik — and borrow the temperament that suits your own play."
      />
      <GuideLayout
        eyebrow="Masters of the game"
        title="Classic Grandmasters and Their Styles"
        lead="The great champions are a gallery of personalities. Studying them is the most efficient way to absorb ideas — find the master who speaks to you."
        imageKey="studyBook"
        imageAlt="A classic grandmaster chess book open beside an analog chess clock and walnut pieces"
        current="/classic-grandmasters"
      >
        <p>
          Studying the classics is not nostalgia — it is the most efficient path to real
          improvement, because the old masters played with a clarity of purpose that modern,
          engine-driven chess sometimes obscures. Each champion offers a distinct lesson in
          temperament as much as in technique, and one of them is almost certainly a natural teacher
          for you.
        </p>

        <h2>A gallery of teachers</h2>
        <p>
          Below are six champions whose games reward slow study. Read their one-line lessons, then
          pick the one whose description makes you nod, and play through twenty of their games at a
          leisurely pace. You are not memorizing; you are marinating. Over time their habits of
          thought seep into your own play.
        </p>

        <div className="my-8 grid gap-5 sm:grid-cols-2">
          {grandmasters.map((gm) => (
            <article key={gm.name} className="rounded-xl border border-graphite/15 bg-marble p-5">
              <h3 className="font-display text-xl leading-snug text-matte">{gm.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-gold">{gm.era}</p>
              <p className="mt-1 text-sm font-semibold text-walnut">{gm.style}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{gm.lesson}</p>
            </article>
          ))}
        </div>

        <h2>How to study a master’s games</h2>
        <p>
          Choose one champion and twenty of their games. Set up a real board and play through each
          game slowly, pausing at the critical moments to ask what the player was trying to achieve.
          Do not worry about memorizing variations. The aim is to absorb the <em>questions</em> a
          strong player asks of a position — where are the weak squares, which piece is worst placed,
          what does my opponent want — far more than the specific answers.
        </p>
        <p>
          A practical pairing: if you value calm and economy, begin with Capablanca and Karpov. If
          you are drawn to fighting spirit, start with Lasker and Tal. If you love defense and
          prevention, Petrosian is your teacher. Whichever you choose, you will emerge with a richer
          sense of what good chess feels like from the inside.
        </p>

        <blockquote>
          “When you study the classics, you are not learning moves. You are learning how a great mind
          weighs a position — and that is a skill that transfers to every game you will ever play.”
        </blockquote>
      </GuideLayout>
    </>
  );
}
