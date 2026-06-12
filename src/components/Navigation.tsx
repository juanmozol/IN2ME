import { useState, useEffect } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

const sections = [
  { key: 'identity', href: '#identity' },
  { key: 'manifesto', href: '#manifesto' },
  { key: 'traceability', href: '#traceability' },
  { key: 'materials', href: '#materials' },
  { key: 'manufacturing', href: '#manufacturing' },
  { key: 'localProduction', href: '#local-production' },
  { key: 'longevity', href: '#longevity' },
  { key: 'care', href: '#care' },
  { key: 'social', href: '#social' },
  { key: 'circularity', href: '#circularity' },
] as const;

export default function Navigation() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper-50 border-b border-rule' : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: '#F5F4F1', borderBottomColor: '#DEDEDE' } : {}}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Brand mark */}
          <div className="flex items-baseline gap-3">
            <span className="font-grotesk font-semibold text-ink-800 tracking-widest text-sm">
              IN2ME
            </span>
            <span
              className="hidden sm:block label"
              style={{ color: '#AAAAAA', fontSize: '0.55rem', letterSpacing: '0.2em' }}
            >
              {t(content.nav.passportLabel, lang)}
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {sections.map(({ key, href }) => (
              <a key={key} href={href} className="nav-link">
                {t(content.nav[key] as { en: string; es: string }, lang)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5"
              aria-label="Toggle language"
            >
              <span
                className={`font-montserrat text-xs tracking-widest uppercase transition-colors duration-200 ${
                  lang === 'en' ? 'text-ink-800' : 'text-ink-200'
                }`}
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
              >
                EN
              </span>
              <span className="w-px h-3" style={{ backgroundColor: '#DEDEDE' }} />
              <span
                className={`font-montserrat text-xs tracking-widest uppercase transition-colors duration-200 ${
                  lang === 'es' ? 'text-ink-800' : 'text-ink-200'
                }`}
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
              >
                ES
              </span>
            </button>

            {/* Mobile burger */}
            <button
              className="xl:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-px bg-ink-700 transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-ink-700 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-ink-700 transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="xl:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '28rem' : '0',
          backgroundColor: '#F5F4F1',
          borderBottom: menuOpen ? '1px solid #DEDEDE' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-5 gap-5">
          {sections.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(content.nav[key] as { en: string; es: string }, lang)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
