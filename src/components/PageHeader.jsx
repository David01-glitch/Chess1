// Consistent editorial page header used across interior routes.
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="border-b border-graphite/15 bg-ivory">
      <div className="container-wide py-16 sm:py-20">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl text-balance sm:text-5xl">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lg text-graphite">{lead}</p> : null}
      </div>
    </header>
  );
}
