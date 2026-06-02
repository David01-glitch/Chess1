import Seo from '../components/Seo.jsx';
import GuideLayout from '../components/GuideLayout.jsx';
import Accordion from '../components/Accordion.jsx';

export default function EndgameTechniques() {
  return (
    <>
      <Seo
        title="Endgame Techniques"
        path="/endgame-techniques"
        description="Master the endgames that decide most amateur games: the opposition, king-and-pawn races, and essential rook endings like Lucena and Philidor."
      />
      <GuideLayout
        eyebrow="Strategy guide"
        title="Endgame Techniques"
        lead="Most amateur games are decided in the endgame, yet most amateurs study it least. A small investment here pays the largest dividends in chess."
        imageKey="endgameKP"
        imageAlt="A king-and-pawn endgame on a marble chessboard, lit by soft dramatic side light"
        current="/endgame-techniques"
      >
        <p>
          The endgame is the most learnable phase of chess. Openings drift in and out of fashion and
          middlegames are gloriously chaotic, but a king-and-pawn endgame has a definite, knowable
          truth. Learn that truth once and you own it for the rest of your chess life. This is
          wonderful news for the patient player, because the endgame rewards exactly the temperament
          that improves with age.
        </p>

        <h2>Begin with the opposition</h2>
        <p>
          The single most important endgame idea is the <strong>opposition</strong>. When the two
          kings stand on the same file (or rank) with one square between them, the player who is{' '}
          <em>not</em> to move usually controls the key squares and can make progress. Mastering the
          opposition lets you win countless king-and-pawn endings and draw many that look lost. It is
          the foundation on which all other endgame knowledge rests.
        </p>

        <h2>The rule that wins rook endings</h2>
        <p>
          Rook endgames are the most common of all endings, and one principle will save you half
          points for the rest of your life: <strong>the rook belongs behind the passed pawn</strong>
          — yours, to shepherd it forward, or your opponent’s, to restrain it. Add two named positions
          to your repertoire — the <strong>Lucena</strong> (the technique for winning with an extra
          pawn) and the <strong>Philidor</strong> (the technique for holding the draw a pawn down) —
          and you will navigate rook endings with quiet, well-founded confidence.

        </p>

        <Accordion summary="The three endgames worth memorizing first">
          <p>
            If you study nothing else, study these three: (1) king and pawn versus king, using the
            opposition to escort your pawn home; (2) the Lucena position, the bedrock winning method
            in rook endings; and (3) the Philidor position, the bedrock drawing method. These three
            cover an astonishing proportion of the endgames you will actually reach over the board.
          </p>
        </Accordion>

        <Accordion summary="Why patience is the endgame player’s superpower">
          <p>
            In the endgame, the player who keeps calculating accurately when the position looks
            drawish is the one who wins. There are no shortcuts and no bluffs — only careful,
            unglamorous precision. Older players are frequently superb technicians precisely because
            we are willing to do the slow work that younger, faster players rush past.
          </p>
          <p>
            Treat each endgame as a small, solvable puzzle rather than a chore to be hurried through.
            Slow down, count the moves in a pawn race twice, and trust the principles. The half-points
            you save will quietly transform your results.
          </p>
        </Accordion>

        <h2>How to practice endgames</h2>
        <p>
          Set up a single endgame position on a real board and play it against yourself from both
          sides until the winning or drawing method feels automatic. Five minutes a day on one
          position is far more effective than an hour of scattered study. Endgame knowledge, once
          built, is remarkably durable — it stays with you in a way that memorized opening lines
          never do.
        </p>
      </GuideLayout>
    </>
  );
}
