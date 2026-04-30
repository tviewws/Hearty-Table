import { PageTransition } from "../components/PageTransition";

export function Philosophy() {

  // ── Botanical SVG icons, each unique to the section ──────────────────────
  const LeafSprig = () => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="36" x2="14" y2="8" stroke="#9B9690" strokeWidth="0.8"/>
      <path d="M14 24 C14 24 6 20 5 13 C4 7 10 4 14 8 C18 4 24 7 23 13 C22 20 14 24 14 24Z" stroke="#9B9690" strokeWidth="0.8" fill="none"/>
      <path d="M14 14 C14 14 9 13 8 11" stroke="#9B9690" strokeWidth="0.6" strokeDasharray="1.5 1.5"/>
      <path d="M14 14 C14 14 19 13 20 11" stroke="#9B9690" strokeWidth="0.6" strokeDasharray="1.5 1.5"/>
    </svg>
  );

  const SeedlingIcon = () => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="36" x2="14" y2="20" stroke="#9B9690" strokeWidth="0.8"/>
      <path d="M14 20 C14 20 14 10 7 6 C4 15 10 20 14 20Z" stroke="#9B9690" strokeWidth="0.8" fill="none"/>
      <path d="M14 20 C14 20 14 12 21 8 C24 17 18 20 14 20Z" stroke="#9B9690" strokeWidth="0.8" fill="none"/>
      <path d="M14 16 C12 14 10 13 9 12" stroke="#9B9690" strokeWidth="0.6" strokeDasharray="1.5 1.5"/>
      <path d="M14 16 C16 14 18 13 19 12" stroke="#9B9690" strokeWidth="0.6" strokeDasharray="1.5 1.5"/>
    </svg>
  );

  const FlameLeafIcon = () => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="36" x2="14" y2="22" stroke="#9B9690" strokeWidth="0.8"/>
      <path d="M14 22 C14 22 6 18 7 10 C8 4 13 2 14 6 C15 2 20 4 21 10 C22 18 14 22 14 22Z" stroke="#9B9690" strokeWidth="0.8" fill="none"/>
      <path d="M14 17 C14 17 11 14 11 11" stroke="#9B9690" strokeWidth="0.6" strokeDasharray="1.5 1.5"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="36" x2="14" y2="22" stroke="#9B9690" strokeWidth="0.8"/>
      <circle cx="14" cy="14" r="8" stroke="#9B9690" strokeWidth="0.8" fill="none"/>
      <path d="M14 8 L15.2 12 L19.4 12 L16 14.6 L17.2 18.6 L14 16.2 L10.8 18.6 L12 14.6 L8.6 12 L12.8 12 Z" stroke="#9B9690" strokeWidth="0.7" fill="none"/>
    </svg>
  );

  const sections = [
    {
      number: '01',
      Icon: LeafSprig,
      title: 'SUSTAINABILITY &\nCONSCIOUS SOURCING',
      content: `Every ingredient carries the fingerprint of the land it came from. At Hearty, we source primarily from Kenyan farmers and local food systems — not as a marketing position, but as a core conviction.

Working within what is locally available creates an honest constraint that makes the food more interesting, not less. It also means that every plate strengthens a local economy, reduces the distance from farm to table, and keeps the cuisine tethered to the culture it belongs to.`,
    },
    {
      number: '02',
      Icon: SeedlingIcon,
      title: 'KITCHEN CULTURE\n& WORKING PHILOSOPHY',
      content: `Fine dining has long carried with it a culture of hierarchy, exhaustion, and silence. Hearty is a deliberate departure from that.

We believe that the quality of food is inseparable from the conditions in which it is made. A kitchen built on collaboration, rest, and creative freedom produces better food — and better people. This is especially important for the next generation of Kenyan chefs, who deserve spaces that challenge them without diminishing them.`,
    },
    {
      number: '03',
      Icon: FlameLeafIcon,
      title: 'REINTERPRETING\nFINE DINING',
      content: `Hearty draws inspiration from Michelin-level precision — not to replicate it, but to borrow its discipline and apply it to a different story. The techniques, the attention to detail, the intentionality of plating — all of it is in service of Kenyan ingredients and Kenyan narratives.

This is not fusion. It is not imitation. It is translation — taking the rigour of classical fine dining and using it to speak a language that is entirely our own.`,
    },
    {
      number: '04',
      Icon: StarIcon,
      title: 'CULINARY\nIDENTITY',
      content: `Kenyan cuisine does not need external validation. It is already complete. Already rich. Already deserving of reverence.

For too long, local food has been positioned as informal while imported influences are treated as aspirational. Hearty exists to reverse that assumption — to present what is already here with the restraint, care, and intentionality it has always deserved. The goal is not to make Kenyan food seem luxurious. It already is.`,
    },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen" style={{ backgroundColor: '#F2EFE9' }}>

      {/* ── PAGE HEADER ── */}
      <header
        className="relative py-20 md:py-36 px-4 md:px-8 text-center overflow-hidden"
        style={{ borderBottom: '1px solid #C8C4BE' }}
      >
        {/* decorative large watermark letter */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-serif)',
            fontSize: '28vw',
            color: 'rgba(0,0,0,0.03)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          H
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.3em',
            fontSize: '0.65rem',
            color: '#9B9690',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          Hearty Table
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            letterSpacing: '0.2em',
            color: '#2C2C2C',
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: '2.5rem',
          }}
        >
          OUR<br />PHILOSOPHY
        </h1>

        <div
          style={{
            width: '50px',
            height: '1px',
            backgroundColor: '#C8C4BE',
            margin: '0 auto 2.5rem',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontStyle: 'italic',
            lineHeight: 1.8,
            color: '#6B6760',
            fontWeight: 300,
            maxWidth: '520px',
            margin: '0 auto',
          }}
        >
          A manifesto of intentionality,<br />culture, and culinary excellence.
        </p>
      </header>

      {/* ── OPENING PULL QUOTE ── */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#1E1E1C' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: '#6B6760',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            ❧
          </div>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              fontStyle: 'italic',
              color: '#E5E1D8',
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: '0.02em',
              margin: 0,
            }}
          >
            "Kenyan ingredients and traditions are already luxurious.<br />
            We just need to present them that way."
          </blockquote>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: '#6B6760',
              textTransform: 'uppercase',
              marginTop: '2rem',
            }}
          >
            ❧
          </div>
        </div>
      </section>

      {/* ── SECTION PILLARS ── */}
      <section className="py-16 md:py-32 px-4 md:px-8">
        <div
          className="max-w-5xl mx-auto"
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index}>
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]"
                  style={{
                    gap: '0',
                    padding: '3rem 0',
                    alignItems: 'start',
                  }}
                >
                <style>
                  {`@media (min-width: 768px) {
                    .grid { padding: 5rem 0 !important; }
                  }`}
                </style>
                  {/* LEFT: number + icon (even) OR content (odd) */}
                  {isEven ? (
                    <div
                      style={{
                        paddingRight: '4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        textAlign: 'right',
                        paddingTop: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.25em',
                          color: '#C8C4BE',
                          marginBottom: '1.5rem',
                          display: 'block',
                        }}
                      >
                        {section.number}
                      </span>
                      <section.Icon />
                    </div>
                  ) : (
                    <div style={{ paddingRight: '4rem', paddingTop: '0.25rem' }}>
                      {section.content.split('\n\n').map((para, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            lineHeight: 2,
                            color: '#6B6760',
                            fontWeight: 300,
                            marginBottom: i < section.content.split('\n\n').length - 1 ? '1.25rem' : 0,
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* CENTRE RULE */}
                  <div
                    style={{
                      width: '1px',
                      backgroundColor: '#C8C4BE',
                      alignSelf: 'stretch',
                      margin: '0 auto',
                    }}
                  />

                  {/* RIGHT: content (even) OR number + icon (odd) */}
                  {isEven ? (
                    <div style={{ paddingLeft: '4rem', paddingTop: '0.25rem' }}>
                      <h2
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                          letterSpacing: '0.12em',
                          color: '#2C2C2C',
                          fontWeight: 400,
                          lineHeight: 1.3,
                          whiteSpace: 'pre-line',
                          marginBottom: '2rem',
                        }}
                      >
                        {section.title}
                      </h2>
                      <div
                        style={{
                          width: '30px',
                          height: '1px',
                          backgroundColor: '#C8C4BE',
                          marginBottom: '2rem',
                        }}
                      />
                      {section.content.split('\n\n').map((para, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            lineHeight: 2,
                            color: '#6B6760',
                            fontWeight: 300,
                            marginBottom: i < section.content.split('\n\n').length - 1 ? '1.25rem' : 0,
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        paddingLeft: '4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingTop: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.25em',
                          color: '#C8C4BE',
                          marginBottom: '1.5rem',
                          display: 'block',
                        }}
                      >
                        {section.number}
                      </span>
                      <section.Icon />
                      <h2
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                          letterSpacing: '0.12em',
                          color: '#2C2C2C',
                          fontWeight: 400,
                          lineHeight: 1.3,
                          whiteSpace: 'pre-line',
                          marginTop: '2rem',
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>
                  )}
                </div>

                {/* horizontal rule between sections, not after last */}
                {index < sections.length - 1 && (
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#E8E4DE' }} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section
        className="py-32 px-8 text-center"
        style={{ borderTop: '1px solid #C8C4BE', backgroundColor: '#F2EFE9' }}
      >
        <div className="max-w-2xl mx-auto space-y-8">
          {/* small botanical ornament */}
          <svg
            width="48"
            height="60"
            viewBox="0 0 48 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: '0 auto', display: 'block', marginBottom: '2rem' }}
          >
            <line x1="24" y1="60" x2="24" y2="28" stroke="#C8C4BE" strokeWidth="0.8"/>
            <path d="M24 44 C24 44 10 36 10 24 C10 13 18 8 24 14 C30 8 38 13 38 24 C38 36 24 44 24 44Z" stroke="#C8C4BE" strokeWidth="0.8" fill="none"/>
            <path d="M24 34 C20 30 16 28 14 26" stroke="#C8C4BE" strokeWidth="0.6" strokeDasharray="2 2"/>
            <path d="M24 34 C28 30 32 28 34 26" stroke="#C8C4BE" strokeWidth="0.6" strokeDasharray="2 2"/>
            <path d="M24 26 C22 23 20 22 18 21" stroke="#C8C4BE" strokeWidth="0.5" strokeDasharray="1.5 1.5"/>
            <path d="M24 26 C26 23 28 22 30 21" stroke="#C8C4BE" strokeWidth="0.5" strokeDasharray="1.5 1.5"/>
          </svg>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.2em',
              fontSize: '0.65rem',
              color: '#9B9690',
              textTransform: 'uppercase',
            }}
          >
            Finally
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: '#4A4642',
              fontWeight: 300,
            }}
          >
            Hearty is more than a dining concept.<br />
            It is an exploration of value, identity,<br />
            and possibility within Kenyan cuisine.
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#C8C4BE',
              margin: '0 auto',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              lineHeight: 1.9,
              color: '#9B9690',
              fontWeight: 300,
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Through intentional collaborations and carefully curated experiences, Hearty aims to contribute to a broader shift in how Kenyan food is understood — not just locally, but globally.
          </p>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <div style={{ borderTop: '1px solid #C8C4Be' }}>
        <p
          className="text-center py-10"
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.25em',
            fontSize: '0.65rem',
            color: '#9B9690',
            textTransform: 'uppercase',
          }}
        >
          Hearty Table · Nairobi, Kenya
        </p>
      </div>

    </div>
    </PageTransition>
  );
}