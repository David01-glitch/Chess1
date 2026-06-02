import Seo from '../components/Seo.jsx';
import GuideLayout from '../components/GuideLayout.jsx';
import Accordion from '../components/Accordion.jsx';

const motifs = [
  {
    name: 'The Fork',
    desc: 'One piece attacks two targets at once. The knight is the great forking piece because it leaps over obstacles and strikes in two directions no other piece can.',
  },
  {
    name: 'The Pin',
    desc: 'A piece cannot move without exposing a more valuable piece behind it. Pin an enemy knight to its king and the knight is, for the moment, frozen in place.',
  },
  {
    name: 'The Skewer',
    desc: 'The reverse of a pin: a valuable piece is attacked and, when it moves, a lesser piece behind it falls. Skewers along open lines win material with startling speed.',
  },
  {
    name: 'The Discovered Attack',
    desc: 'Moving one piece unveils an attack from another behind it. When the moving piece also gives check, the discovered attack becomes nearly unstoppable.',
  },
  {
    name: 'The Back-Rank Mate',
    desc: 'A king trapped behind its own unmoved pawns is mated by a rook or queen along the back rank. Recognizing this pattern teaches you both to deliver it and to make luft for your own king.',
  },
];

export default function ChessPuzzles() {
  return (
    <>
      <Seo
        title="Chess Puzzles"
        path="/chess-puzzles"
        description="Build pattern recognition with a daily diet of tactical motifs — forks, pins, skewers, discovered attacks, and back-rank mates — chosen for steady improvement."
      />
      <GuideLayout
        eyebrow="Daily training"
        title="Chess Puzzles &amp; Pattern Recognition"
        lead="Strong players do not calculate more than you — they recognize more. Puzzles build the visual library that makes good moves feel obvious."
        imageKey="puzzleNotebook"
        imageAlt="A chess puzzle position on a wooden board beside a notebook of handwritten move notation"
        current="/chess-puzzles"
      >
        <p>
          Ask a master how they found a brilliant move and they will often shrug: “I just saw it.”
          That is not false modesty. Years of exposure have built an internal library of patterns,
          and the right move announces itself before any calculation begins. The encouraging truth is
          that this library is learnable at any age — and puzzles are how you build it.
        </p>

        <h2>The motifs worth knowing cold</h2>
        <p>
          Tactics come in families, and a handful of motifs account for the overwhelming majority of
          combinations you will ever encounter. Learn to spot these five instantly and your results
          will climb on their own.
        </p>

        <div className="my-7 space-y-3">
          {motifs.map((m) => (
            <Accordion key={m.name} summary={m.name}>
              <p>{m.desc}</p>
            </Accordion>
          ))}
        </div>

        <h2>How to practice for fluency, not frustration</h2>
        <p>
          The fastest way to build recognition is repetition with variety. Solve <em>many easy</em>
          puzzles rather than a few hard ones. The aim is fluency — the moment when a pinned knight
          on f3 makes your eyes jump automatically to the squares it can no longer defend. Struggling
          for ten minutes over a single difficult puzzle feels virtuous but builds far less than
          twenty quick, confident solves.
        </p>

        <Accordion summary="Keep a pattern notebook">
          <p>
            When a puzzle catches you out, sketch the position in a small notebook and write the idea
            in a single sentence. The act of writing fixes the pattern in memory, and flipping back
            through your notebook becomes a personalized course in exactly the ideas you most need to
            absorb. Within weeks you will see those same patterns appear in your own games.
          </p>
        </Accordion>

        <Accordion summary="A simple daily puzzle habit">
          <p>
            Five minutes of puzzles a day, every day, beats an hour once a week. Tie the habit to
            something you already do — your morning coffee, the wait for the kettle — so it requires
            no willpower to begin. Consistency is the whole secret, and five honest minutes is enough
            to compound into real strength over a season.
          </p>
        </Accordion>

        <p>
          Pattern recognition is the quiet engine beneath every strong move. Build it patiently and
          you will find that calculation grows shorter and surer, because so much of the work is
          already done the instant you look at the board.
        </p>
      </GuideLayout>
    </>
  );
}
