import Seo from '../components/Seo.jsx';
import GuideLayout from '../components/GuideLayout.jsx';
import Accordion from '../components/Accordion.jsx';

export default function TournamentGuides() {
  return (
    <>
      <Seo
        title="Tournament Guides"
        path="/tournament-guides"
        description="Everything a thoughtful player needs for a first chess tournament: etiquette, the clock, algebraic notation, the touch-move rule, and calming first-event nerves."
      />
      <GuideLayout
        eyebrow="Your first event"
        title="Chess Etiquette &amp; Tournament Basics"
        lead="Your first tournament should feel exciting, not intimidating. Here is exactly what to expect at the board, from the opening handshake to the final scoresheet."
        imageKey="tournamentHall"
        imageAlt="A quiet chess tournament hall with rows of wooden boards, analog clocks, and players in concentration"
        current="/tournament-guides"
      >
        <p>
          A chess tournament is one of the most welcoming competitive environments you will ever
          enter. Players of every age sit side by side; a teenager may face a retiree two boards down
          from a club veteran, and good manners are woven into the culture of the game. Knowing the
          basic customs in advance removes nearly all of the first-event nerves.
        </p>

        <h2>Etiquette at the board</h2>
        <p>
          Before the game, offer a handshake and a quiet “good luck.” During play, observe the
          silence — conversation happens away from the boards, never over them. When the game ends,
          reset the pieces, shake hands again, and, if both players are willing, review the game
          together. This friendly post-mortem is the warm, collegial heart of tournament chess, and
          it is where the real learning happens.
        </p>

        <Accordion summary="The touch-move rule, explained simply" defaultOpen>
          <p>
            If you deliberately touch one of your pieces, you must move it if it has a legal move. If
            you touch an opponent’s piece, you must capture it if you legally can. If you merely need
            to straighten a piece on its square, say “adjust” (or the traditional “j’adoube”)
            <em> before</em> touching it, so your opponent knows you are not making a move. The rule
            sounds strict, but it simply asks you to think before you reach — a good habit anyway.
          </p>
        </Accordion>

        <Accordion summary="Using the chess clock">
          <p>
            Each player has a set amount of time for the whole game. After you make your move, you
            press your side of the clock with the <em>same hand</em> you used to move the piece,
            which starts your opponent’s time. If your flag falls — your time runs out — you
            generally lose, so glance at the clock regularly and do not agonize over simple moves.
            For one game the clock feels awkward; ever after, it feels natural.
          </p>
        </Accordion>

        <Accordion summary="Recording the game in algebraic notation">
          <p>
            In most events you record both players’ moves on a scoresheet using algebraic notation,
            where each square has a coordinate (e4, Nf3, and so on). It is simpler than it looks and
            becomes second nature within a single game. Your scoresheet lets you replay and learn from
            the game afterward — one of the most valuable study tools you will ever have.
          </p>
        </Accordion>

        <h2>Calming first-event nerves</h2>
        <p>
          Everyone is nervous at their first tournament, including the players who look perfectly
          calm. A few small things help enormously: arrive early so you are not rushed, bring water
          and a light snack, and remember that the tournament director is there to help — never
          hesitate to raise your hand and ask a question. Most importantly, set your goal as “play
          good moves and enjoy the games,” not “win every round.” Results follow naturally from
          good play, and the pressure lifts the moment you stop chasing them.
        </p>

        <h2>The benefits of lifelong strategic learning</h2>
        <p>
          Playing in tournaments, even occasionally, gives your study a purpose and your hobby a
          community. You will meet people of every generation who share your love of the game, and
          you will leave each event — win or lose — a stronger and more confident player than you
          arrived. That, in the end, is the quiet reward of taking the game seriously: not trophies,
          but growth, friendship, and the deep satisfaction of lifelong learning.
        </p>
      </GuideLayout>
    </>
  );
}
