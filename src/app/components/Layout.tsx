import { Outlet, Link, useLocation } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { AnimatePresence } from "motion/react";

// 1. Import the logo from your root assets folder
import logoImg from "../../../assets/Logo.png";

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
            {/* 2. Updated Header Logo to use the imported variable */}
            <img
              src={logoImg}
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
            {/* 3. Updated Footer Logo to use the imported variable */}
            <img
              src={logoImg}
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
          {/* ... rest of the footer ... */}
        </div>
      </footer>
    </div>
  );
}