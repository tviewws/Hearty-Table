import { Outlet, Link, useLocation } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { AnimatePresence } from "motion/react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", path: "/about" },
    { label: "PHILOSOPHY", path: "/philosophy" },
    { label: "THE EXPERIENCE", path: "/gather" },
    { label: "COLLABORATE", path: "/collaborate" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <ScrollToTop />
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-12 flex-1">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link transition-all duration-300 hover:border-b border-[#2C2C2C]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.2em',
                  fontSize: '0.75rem',
                  color: '#B0ACA6',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="flex-shrink-0 md:mx-0 mx-auto">
            <img
              src={new URL('../../imports/H-7-1.png', import.meta.url).href}
              alt="Hearty Table"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-12 flex-1 justify-end">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link transition-all duration-300 hover:border-b border-[#2C2C2C]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.2em',
                  fontSize: '0.75rem',
                  color: '#B0ACA6',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-4 flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.15em',
                fontSize: '0.6rem',
                color: '#B0ACA6',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="pt-24">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <footer className="py-20 text-center" style={{ backgroundColor: '#2C2B29' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/">
            <img
              src={new URL('../../imports/H-7-1.png', import.meta.url).href}
              alt="Hearty Table"
              className="h-10 w-auto mx-auto mb-8"
            />
          </Link>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 flex-wrap">
            {[
              { label: 'ABOUT', path: '/about' },
              { label: 'PHILOSOPHY', path: '/philosophy' },
              { label: 'GATHER', path: '/gather' },
              { label: 'COLLABORATE', path: '/collaborate' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.15em',
                  fontSize: '0.7rem',
                  color: '#6B6760',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2C2C2C'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B6760'}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B0ACA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/heartytable_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B0ACA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
          <p style={{ fontSize: '0.7rem', color: '#8B8680', letterSpacing: '0.05em' }}>
            © 2026 Hearty Table. Nairobi, Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
}
