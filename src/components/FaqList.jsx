import Accordion from './Accordion.jsx';

// FAQ accordion list. Every answer is rendered into the static HTML; the
// <details> elements simply toggle visibility, so all answers are present in
// View Source and accessible without JavaScript.
export default function FaqList({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <Accordion key={i} summary={item.q}>
          <p>{item.a}</p>
        </Accordion>
      ))}
    </div>
  );
}
