import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageTransition } from "../components/PageTransition";

import hearty11 from "../../../assets/hearty11.jpg";

export function About() {
  return (
    <PageTransition>
    <div className="min-h-screen" style={{ backgroundColor: '#2C2B29' }}>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden -mt-24" style={{ height: '80vh' }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768849352374-f50f9e304a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGVmJTIwaGFuZHMlMjBwbGF0aW5nJTIwZm9vZCUyMGVsZWdhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3NzQ3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kitchen detail"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-12 pb-0">
          <p style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.3em',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>Nairobi · Kenya</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            letterSpacing: '0.15em',
            color: 'white',
            fontWeight: 300,
            lineHeight: 0.9,
            marginBottom: '-0.12em',
            position: 'relative',
            zIndex: 2,
          }}>
            WHO<br />WE ARE
          </h1>
        </div>
      </section>

      {/* ── INTRO PROSE ── */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20" style={{ borderBottom: '1px solid #3A3835', backgroundColor: '#2C2B29' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
              fontStyle: 'italic',
              lineHeight: 1.65,
              color: '#E8E4DE',
              fontWeight: 300,
            }}>
              A culinary concept rooted in the desire to shift how Kenyan food is seen, experienced, and valued.
            </p>
          </div>
          <div style={{ paddingTop: '0.4rem' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 2,
              color: '#B0ACA6',
              fontWeight: 300,
              marginBottom: '1.5rem',
            }}>
              Hearty Table is a fine dining concept built on a simple but powerful belief — that Kenyan ingredients and traditions are already luxurious. They simply need to be presented with the care and restraint they have always deserved.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 2,
              color: '#B0ACA6',
              fontWeight: 300,
            }}>
              Through curated dining experiences, we explore how refinement, intention, and storytelling can transform familiar flavors into something elevated — without losing their identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ backgroundColor: '#1A1A18' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3">
          {[
            { figure: 'Nairobi', label: 'Home & Origin' },
            { figure: 'Local First', label: 'Sourcing Philosophy' },
            { figure: 'Gather', label: 'Signature Experience' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-12 md:py-16 px-6 md:px-8"
              style={{ borderBottom: i < 2 ? '1px solid #2E2E2C' : 'none' }}
            >
              <style>{`@media (min-width: 768px) {
                .stat-item-${i} { border-right: ${i < 2 ? '1px solid #2E2E2C' : 'none'} !important; border-bottom: none !important; }
              }`}</style>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: '0.1em',
                color: '#E5E1D8',
                fontWeight: 300,
                marginBottom: '0.75rem',
              }}>{stat.figure}</p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                color: '#6B6760',
                textTransform: 'uppercase',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-16 md:py-32 px-4 md:px-12" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-8 md:gap-24 items-center">
          <div style={{ position: 'relative' }}>
            <img
              src={hearty11}
              alt="Hearty Table - Precision and Intention"
              className="w-full object-cover"
              style={{ height: '620px' }}
            />
            <p style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
            }}>Precision · Intention · Story</p>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.25em',
              fontSize: '0.65rem',
              color: '#8A8680',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>What We Do</p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '0.08em',
              color: '#E8E4DE',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '2rem',
            }}>TURNING<br />INWARD.</h2>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#4A4845', marginBottom: '2rem' }} />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 2,
              color: '#B0ACA6',
              fontWeight: 300,
              marginBottom: '1.5rem',
            }}>
              Hearty exists to demystify what "luxury food" means within the Kenyan context. For too long, fine dining has been defined by imported ingredients and global influences. We challenge this by turning inward.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 2,
              color: '#B0ACA6',
              fontWeight: 300,
            }}>
              We draw inspiration from Michelin-level precision — not to replicate it, but to reinterpret it. Techniques and attention to detail are applied to Kenyan ingredients and narratives, creating dishes that feel both grounded and elevated.
            </p>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-24 px-12" style={{ borderTop: '1px solid #3A3835', borderBottom: '1px solid #3A3835', backgroundColor: '#2C2B29' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div aria-hidden style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            color: '#4A4845',
            marginBottom: '2rem',
            letterSpacing: '0.5em',
          }}>✦ ✦ ✦</div>
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontStyle: 'italic',
            color: '#E8E4DE',
            fontWeight: 300,
            lineHeight: 1.7,
            margin: 0,
          }}>
            "Kenyan food doesn't need validation from the outside.<br />
            It is already complete, already rich,<br />
            already deserving of reverence."
          </blockquote>
          <div aria-hidden style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            color: '#4A4845',
            marginTop: '2rem',
            letterSpacing: '0.5em',
          }}>✦ ✦ ✦</div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="py-32 px-12" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '8rem' }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.25em',
              fontSize: '0.65rem',
              color: '#8A8680',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>Why We Exist</p>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '8rem',
              color: 'rgba(255,255,255,0.04)',
              fontWeight: 300,
              lineHeight: 1,
              userSelect: 'none',
            }}>H</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              {
                heading: 'A Gap Worth Closing',
                body: 'There is a gap in how Kenyan cuisine is positioned within conversations around luxury and fine dining. While global cuisines are celebrated, local food is rarely given the same treatment — despite its richness and depth. Hearty exists within this space.',
              },
              {
                heading: 'A Growing Audience',
                body: 'There is an audience seeking more meaningful and culturally connected dining experiences. A generation ready to see themselves reflected in the food that is put in front of them — not just the cuisine of somewhere else.',
              },
              {
                heading: 'A New Generation of Chefs',
                body: 'There is also a generation of young Kenyan chefs and creatives ready to redefine what Kenyan food can look and feel like. Hearty creates space for that talent — in the kitchen, at the table, and in the story.',
              },
            ].map((item, i) => (
              <div key={i} style={{ paddingBottom: '2.5rem', borderBottom: i < 2 ? '1px solid #3A3835' : 'none' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.1em',
                  color: '#E8E4DE',
                  fontWeight: 400,
                  marginBottom: '1rem',
                }}>{item.heading}</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 2,
                  color: '#B0ACA6',
                  fontWeight: 300,
                }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING LINE ── */}
      <section className="py-24 px-12 text-center" style={{ borderTop: '1px solid #3A3835', backgroundColor: '#2C2B29' }}>
        <div className="max-w-xl mx-auto space-y-6">
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontStyle: 'italic',
            lineHeight: 1.8,
            color: '#C8C4BE',
            fontWeight: 300,
          }}>
            We are Hearty Table.<br />And we are just getting started.
          </p>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#4A4845', margin: '0 auto' }} />
          <p style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.25em',
            fontSize: '0.65rem',
            color: '#8A8680',
            textTransform: 'uppercase',
          }}>Hearty Table · Nairobi, Kenya</p>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}