import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { PageTransition } from "../components/PageTransition";

// The import hearty7 line has been removed to allow the public folder to work correctly.

export function Home() {
  return (
    <PageTransition>
    <div className="min-h-screen" style={{ backgroundColor: '#2C2B29' }}>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden -mt-24">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1603073164070-d3d9280d8d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwcGxhdGVkJTIwQWZyaWNhbiUyMEtlbnlhbiUyMGN1aXNpbmUlMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc3NzQ3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hearty Table cuisine"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <div style={{ lineHeight: 1, marginBottom: '1.5rem' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(4rem, 11vw, 10rem)',
              letterSpacing: '0.35em',
              color: 'white',
              fontWeight: 300,
              display: 'block',
            }}>HEARTY</div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(4rem, 11vw, 10rem)',
              letterSpacing: '0.35em',
              color: 'white',
              fontWeight: 300,
              display: 'block',
              marginTop: '0.1em',
            }}>TABLE</div>
          </div>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'rgba(255,255,255,0.5)', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}>Kenyan cuisine, elevated.</p>
        </div>
        <div className="absolute bottom-10 w-full text-center">
          <p style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.25em',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
          }}>Nairobi · Kenya</p>
        </div>
      </section>

      {/* ── HAIRLINE ── */}
      <div className="w-full h-px" style={{ backgroundColor: '#3A3835' }} />

      {/* ── PHILOSOPHY ── */}
      <section className="py-16 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <img
              src="/assets/hearty8.jpg"
              alt="Hearty Table - Rooted, Refined, Intentional"
              className="w-full object-cover"
              style={{ height: '600px' }}
            />
          </div>
          <div style={{ paddingLeft: '0' }} className="md:pl-8">
            <p style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.22em',
              fontSize: '0.7rem',
              color: '#8A8680',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>Our Philosophy</p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              letterSpacing: '0.08em',
              color: '#E8E4DE',
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: '2rem',
            }}>
              ROOTED.<br />REFINED.<br />INTENTIONAL.
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#4A4845', marginBottom: '2rem' }} />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: '#B0ACA6',
              fontWeight: 300,
              maxWidth: '400px',
            }}>
              Kenyan ingredients and traditions are already luxurious — we just need to present them that way. Hearty reimagines local cuisine through a lens of restraint, storytelling, and culinary precision — without losing its identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── CENTRE RULE ── */}
      <div className="mx-auto" style={{ width: '80px', height: '1px', backgroundColor: '#3A3835' }} />

      {/* ── GATHER ── */}
      <section className="w-full py-20 md:py-40 px-4 md:px-8" style={{ backgroundColor: '#1A1A18' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.3em',
            fontSize: '0.65rem',
            color: '#6B6760',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}>The Experience</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            letterSpacing: '0.3em',
            color: '#E8E4DE',
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '2.5rem',
          }}>GATHER</h2>
          <div style={{ width: '50px', height: '1px', backgroundColor: '#4A4A48', margin: '0 auto 2.5rem' }} />
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            fontStyle: 'italic',
            color: '#C8C4B8',
            fontWeight: 300,
            marginBottom: '2rem',
            letterSpacing: '0.03em',
          }}>An intimate multi-course dinner.</p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            lineHeight: 1.9,
            color: '#9B9890',
            fontWeight: 300,
            maxWidth: '520px',
            margin: '0 auto 3rem',
          }}>
            A curated evening where Kenyan cuisine takes center stage. Each course tells a story of place, tradition, and innovation — creating a moment that is both personal and elevated.
          </p>
          <Link
            to="/gather"
            style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              color: '#C8C4B8',
              textDecoration: 'none',
              textTransform: 'uppercase',
              borderBottom: '1px solid #4A4A48',
              paddingBottom: '4px',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.borderColor = '#C8C4B8';
              (e.target as HTMLElement).style.color = '#E8E4DE';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.borderColor = '#4A4A48';
              (e.target as HTMLElement).style.color = '#C8C4B8';
            }}
          >Learn More &nbsp;→</Link>
        </div>
      </section>

      {/* ── INGREDIENT GALLERY ── */}
      <section className="py-16 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center" style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.25em',
            fontSize: '0.65rem',
            color: '#8A8680',
            textTransform: 'uppercase',
            marginBottom: '4rem',
          }}>From the Land</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1758221055278-cfff8d83b091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBpbmdyZWRpZW50cyUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzc0Nzk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1768158988918-cc3fa9191f89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBpbmdyZWRpZW50cyUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzc0Nzk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1758221055853-479a0de23e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBpbmdyZWRpZW50cyUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3Nzc0Nzk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ aspectRatio: '3/4' }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLElement;
                  if (img) img.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLElement;
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <ImageWithFallback
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)', transform: 'scale(1)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <div className="w-full h-px" style={{ backgroundColor: '#3A3835' }} />
      <section className="py-8 md:py-12 text-center px-4" style={{ backgroundColor: '#2C2B29' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.25em',
          fontSize: '0.65rem',
          color: '#8A8680',
          textTransform: 'uppercase',
        }}>Hearty Table · Nairobi, Kenya</p>
      </section>

    </div>
    </PageTransition>
  );
}