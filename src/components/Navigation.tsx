import { useState, useEffect } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

const sections = [
  { key: 'identity', href: '#identity', label: 'Identidad' },
  { key: 'manifesto', href: '#manifesto', label: 'Manifiesto' },
  { key: 'traceability', href: '#traceability', label: 'Trazabilidad' },
  { key: 'materials', href: '#materials', label: 'Materiales' },
  { key: 'manufacturing', href: '#manufacturing', label: 'Manufactura' },
  { key: 'localProduction', href: '#local-production', label: 'Producción Local' },
  { key: 'longevity', href: '#longevity', label: 'Longevidad' },
  { key: 'care', href: '#care', label: 'Cuidados' },
  { key: 'social', href: '#social', label: 'Impacto Social' },
  { key: 'circularity', href: '#circularity', label: 'Circularidad' },
] as const;

// Agrupar secciones en categorías para menú organizado
const navigationGroups = [
  {
    title: 'Información del Producto',
    items: sections.slice(0, 2),
  },
  {
    title: 'Producción & Trazabilidad',
    items: sections.slice(2, 5),
  },
  {
    title: 'Propiedades & Impacto',
    items: sections.slice(5, 10),
  },
];

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

          {/* Desktop nav — Optimized for space */}
          <nav className="hidden lg:flex items-center gap-6">
            {sections.map(({ key, href }) => (
              <a key={key} href={href} className="nav-link whitespace-nowrap">
                {t(content.nav[key] as { en: string; es: string }, lang)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-5 ml-auto lg:ml-0">
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

            {/* Mobile/Tablet burger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
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

      {/* Mobile menu — Organized by category */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '32rem' : '0',
          backgroundColor: '#F5F4F1',
          borderBottom: menuOpen ? '1px solid #DEDEDE' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navigationGroups.map((group) => (
            <div key={group.title}>
              <p
                className="label mb-3"
                style={{ color: '#999999', fontSize: '0.55rem' }}
              >
                {group.title}
              </p>
              <div className="flex flex-col gap-2.5">
                {group.items.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(content.nav[key] as { en: string; es: string }, lang)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
