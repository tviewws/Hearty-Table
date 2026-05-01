import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import { PageTransition } from "../components/PageTransition";

// Import Gallery Images
import hearty1 from "../../../assets/hearty1.jpg";
import hearty2 from "../../../assets/hearty2.jpg";
import hearty3 from "../../../assets/hearty3.jpg";
import hearty4 from "../../../assets/hearty4.jpg";
import hearty5 from "../../../assets/hearty5.jpg";
import hearty6 from "../../../assets/hearty6.jpg";
import hearty8 from "../../../assets/hearty8.jpg";
import hearty9 from "../../../assets/hearty9.jpg";
import hearty10 from "../../../assets/hearty10.jpg";
import hearty12 from "../../../assets/hearty12.jpg";
import hearty13 from "../../../assets/hearty13.jpg";

const GALLERY_IMAGES = [
  { src: hearty1, caption: "Exquisite Dining — A Study in Precision" },
  { src: hearty3, caption: "Culinary Art — Rooted in Tradition" },
  { src: hearty4, caption: "The Craft — Moments of Intention" },
  { src: hearty5, caption: "Elevated Flavors — Reimagined" },
  { src: hearty6, caption: "Refined Textures — From the Land" },
  { src: hearty8, caption: "The Atmosphere — Warmth and Grace" },
  { src: hearty9, caption: "Curated Details — A Story Told in Courses" },
  { src: hearty10, caption: "The Evening Glow — Nairobi Nights" },
  { src: hearty12, caption: "Restrained Luxury — Minimalist Expression" },
  { src: hearty13, caption: "The Final Note — A Shared Memory" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 600);
  };

  const next = () => goTo((current + 1) % GALLERY_IMAGES.length);
  const prev = () => goTo((current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % GALLERY_IMAGES.length);
        setTransitioning(false);
      }, 600);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handlePrev = () => { resetTimer(); prev(); };
  const handleNext = () => { resetTimer(); next(); };

  return (
    <section style={{ backgroundColor: '#1E1E1C' }}>
      {/* heading */}
      <div className="text-center" style={{ paddingTop: '5rem', paddingBottom: '3.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.3em',
          fontSize: '0.65rem',
          color: '#6B6760',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
        }}>
          From Previous Events
        </p>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          letterSpacing: '0.15em',
          color: '#E5E1D8',
          fontWeight: 300,
        }}>
          GATHER IN MEMORY
        </h2>
      </div>

      {/* slide */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div style={{
          width: '100%',
          height: 'clamp(320px, 62vh, 700px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 0.6s ease',
          }}>
            <ImageWithFallback
              key={current}
              src={GALLERY_IMAGES[current].src}
              alt={GALLERY_IMAGES[current].caption}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.72)' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '45%',
              background: 'linear-gradient(to top, rgba(30,30,28,0.9) 0%, transparent 100%)',
            }} />
          </div>

          <div style={{
            position: 'absolute', bottom: '2.5rem', left: '3rem',
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 0.4s ease 0.25s',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
            }}>
              {GALLERY_IMAGES[current].caption}
            </p>
          </div>

          <div style={{ position: 'absolute', bottom: '2.5rem', right: '3rem' }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.3)',
            }}>
              {String(current + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          style={{
            position: 'absolute', top: '50%', left: '2rem',
            transform: 'translateY(-50%)',
            background: 'none', border: '1px solid rgba(255,255,255,0.12)',
            cursor: 'pointer', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            outline: 'none', transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="12" y1="8" x2="4" y2="8" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"/>
            <polyline points="8,4 4,8 8,12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          style={{
            position: 'absolute', top: '50%', right: '2rem',
            transform: 'translateY(-50%)',
            background: 'none', border: '1px solid rgba(255,255,255,0.12)',
            cursor: 'pointer', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            outline: 'none', transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="4" y1="8" x2="12" y2="8" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"/>
            <polyline points="8,4 12,8 8,12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
          </svg>
        </button>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', paddingTop: '2.5rem', paddingBottom: '5rem',
      }}>
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { resetTimer(); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
          >
            <span style={{
              display: 'block',
              width: i === current ? '36px' : '14px',
              height: '1px',
              backgroundColor: i === current ? '#E5E1D8' : '#3E3E3C',
              transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.5s ease',
            }} />
          </button>
        ))}
      </div>
    </section>
  );
}

export function Gather() {
  return (
    <PageTransition>
    <div className="min-h-screen" style={{ backgroundColor: '#2C2B29' }}>

      {/* HERO SECTION - Updated to force side-by-side flex-row on all screen sizes */}
      <section
        className="relative w-full overflow-hidden -mt-24 flex flex-row h-screen"
      >
        {/* Left Side: Image (Always 50%) */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <ImageWithFallback
            src={hearty2}
            alt="Gather dinner"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.55)' }}
            loading="eager"
          />
          <p style={{
            position: 'absolute', bottom: '2.5rem', left: '2.5rem',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.45rem, 1vw, 0.58rem)', letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase',
          }}>
            Nairobi · Kenya
          </p>
        </div>

        {/* Right Side: Content Panel (Always 50%) */}
        <div style={{
          backgroundColor: '#1E1E1C',
          width: '50%',
          height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(1rem, 5vw, 4rem)', position: 'relative',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.35em', fontSize: 'clamp(0.45rem, 1vw, 0.58rem)',
            color: '#6B6760', textTransform: 'uppercase', marginBottom: '2.5rem',
          }}>
            The Experience
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 8vw, 9rem)',
            letterSpacing: '0.2em', color: 'white',
            fontWeight: 300, lineHeight: 1, textAlign: 'center', marginBottom: '2.5rem',
          }}>
            GATHER
          </h1>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#3E3E3C', marginBottom: '2.5rem' }} />
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.65rem, 1.5vw, 1.1rem)',
            fontStyle: 'italic', color: '#9B9890',
            fontWeight: 300, textAlign: 'center', letterSpacing: '0.04em',
          }}>
            A curated dinner. <br className="md:hidden" /> A shared story.
          </p>
        </div>
      </section>

      {/* OPENING TEXT */}
      <section className="py-32 px-12" style={{ borderBottom: '1px solid #C8C4Be' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.25em', fontSize: '0.65rem',
              color: '#9B9690', textTransform: 'uppercase', marginBottom: '2rem',
            }}>
              About the Evening
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              fontStyle: 'italic', lineHeight: 1.7,
              color: '#2C2C2C', fontWeight: 300,
            }}>
              An intimate evening where Kenyan cuisine takes the stage at its most refined.
            </p>
          </div>
          <div style={{ paddingTop: '0.25rem' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem', lineHeight: 2,
              color: '#6B6760', fontWeight: 300, marginBottom: '1.5rem',
            }}>
              Gather is our signature multi-course dinner experience. Each course is a meditation on place, tradition, and the hands that shaped it — designed to bring people together through food, story, and shared space.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem', lineHeight: 2,
              color: '#6B6760', fontWeight: 300,
            }}>
              This is not a meal. It is a narrative. From the first bite to the last, you will experience Kenya through ingredients you thought you knew, prepared in ways you have never imagined.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ backgroundColor: '#1E1E1C', borderBottom: '1px solid #2A2A28' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3">
          {[
            { figure: 'Multi-Course', label: 'Format' },
            { figure: 'Intimate', label: 'Atmosphere' },
            { figure: 'Kenyan', label: 'Every Ingredient' },
          ].map((item, i) => (
            <div key={i} className="text-center py-14 px-8" style={{
              borderRight: i < 2 ? '1px solid #2A2A28' : 'none',
              borderBottom: i < 2 ? '1px solid #2A2A28' : 'none', 
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                letterSpacing: '0.08em', color: '#E5E1D8',
                fontWeight: 300, marginBottom: '0.75rem',
              }}>
                {item.figure}
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.58rem', letterSpacing: '0.25em',
                color: '#6B6760', textTransform: 'uppercase',
              }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-28 px-12" style={{ borderBottom: '1px solid #C8C4Be' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: '1.1rem',
            color: '#C8C4Be', letterSpacing: '0.6em', marginBottom: '2.5rem',
          }}>✦ ✦ ✦</div>
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.8vw, 1.9rem)',
            fontStyle: 'italic', color: '#2C2C2C',
            fontWeight: 300, lineHeight: 1.75, margin: 0,
          }}>
            "Quiet. Intentional. Unforgettable.<br />
            Dining as it was always meant to be."
          </blockquote>
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: '1.1rem',
            color: '#C8C4Be', letterSpacing: '0.6em', marginTop: '2.5rem',
          }}>✦ ✦ ✦</div>
        </div>
      </section>

      {/* THE EVENING IN DETAIL */}
      <section className="py-32 px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div style={{ position: 'sticky', top: '8rem' }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.25em', fontSize: '0.65rem',
              color: '#9B9690', textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              The Evening
            </p>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: '7rem',
              color: 'rgba(0,0,0,0.04)', fontWeight: 300,
              lineHeight: 1, userSelect: 'none',
            }}>
              G
            </div>
          </div>

          <div>
            {[
              {
                index: '01', heading: 'The Setting',
                body: 'Each Gather event is designed with care — from the plating to the pacing, from the lighting to the silence between courses. We create space to slow down, to taste fully, to be present with what is in front of you.',
              },
              {
                index: '02', heading: 'The Menu',
                body: 'Every dish reflects Hearty\'s philosophy of reimagined Kenyan cuisine. Ingredients are sourced primarily from Kenyan farmers and local food systems. The menu changes with the season, the harvest, and the story we want to tell.',
              },
              {
                index: '03', heading: 'The Collaboration',
                body: 'Gather is developed in collaboration with young Kenyan chefs — creating a platform for emerging culinary talent to express their voice and share their own relationship with Kenyan cuisine.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '2rem',
                paddingTop: i === 0 ? '0' : '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: i < 2 ? '1px solid #E8E4DE' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)', fontSize: '0.6rem',
                  letterSpacing: '0.2em', color: '#C8C4Be', paddingTop: '0.2rem',
                }}>
                  {item.index}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1rem',
                    letterSpacing: '0.12em', color: '#2C2C2C',
                    fontWeight: 400, marginBottom: '1rem',
                  }}>
                    {item.heading}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                    lineHeight: 2, color: '#6B6760', fontWeight: 300,
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* FOOTER STRIP */}
      <div style={{ borderTop: '1px solid #C8C4Be' }}>
        <p className="text-center py-10" style={{
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.25em', fontSize: '0.65rem',
          color: '#9B9690', textTransform: 'uppercase',
        }}>
          Hearty Table · Nairobi, Kenya
        </p>
      </div>
    </div>
    </PageTransition>
  );
}