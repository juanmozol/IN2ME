import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 fade-in">
          {/* Brand */}
          <div>
            <span
              className="font-grotesk font-semibold block mb-3 tracking-widest"
              style={{ fontSize: '1.1rem', color: '#111111', letterSpacing: '0.2em' }}
            >
              IN2ME
            </span>
            <p
              className="font-montserrat leading-body italic"
              style={{ fontSize: '0.85rem', color: '#777777', lineHeight: '1.6' }}
            >
              {t(content.footer.tagline, lang)}
            </p>
          </div>

          {/* Passport note */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="label block mb-3">{t(content.nav.passportLabel, lang)}</span>
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.8rem', color: '#777777', lineHeight: '1.6' }}
            >
              {t(content.footer.passportNote, lang)}
            </p>
          </div>

          {/* Contact */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="label block mb-3">{t(content.footer.contact, lang)}</span>
            <a
              href={`mailto:${t(content.footer.contactVal, lang)}`}
              className="font-montserrat transition-colors duration-200 block mb-4"
              style={{ fontSize: '0.85rem', color: '#555555', textDecoration: 'none', letterSpacing: '0.02em' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#111111')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#555555')}
            >
              {t(content.footer.contactVal, lang)}
            </a>
            <div>
              <span className="label block mb-1.5">{lang === 'en' ? 'Website' : 'Sitio web'}</span>
              <span className="font-montserrat" style={{ fontSize: '0.85rem', color: '#555555' }}>
                in2me.cl
              </span>
            </div>
          </div>
        </div>

        {/* Foundation Partnership Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 fade-in"
          style={{
            borderTop: '1px solid #EDECE8',
            borderBottom: '1px solid #EDECE8',
            paddingTop: '2rem',
            animationDelay: '0.3s'
          }}
        >
          <div>
            <p
              className="font-montserrat"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#999999',
                marginBottom: '0.75rem'
              }}
            >
              {lang === 'en' ? 'In partnership with' : 'En alianza con'}
            </p>
            <div className="flex items-center gap-4">
              {/* Fundación Iguales Logo Placeholder - can be replaced with actual logo */}
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  border: '1px solid #DEDEDE',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  fontSize: '0.65rem',
                  color: '#999999',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '0.5rem'
                }}
              >
                Fundación<br />Iguales
              </div>
              <div>
                <p
                  className="font-grotesk font-medium block mb-1"
                  style={{ fontSize: '0.85rem', color: '#111111' }}
                >
                  Fundación Iguales
                </p>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: '0.7rem',
                    color: '#888888',
                    maxWidth: '200px',
                    lineHeight: '1.4'
                  }}
                >
                  {lang === 'en'
                    ? 'Promoting LGBTQIA+ inclusion & equal rights'
                    : 'Promoción de inclusión LGBTQIA+ e igualdad'}
                </p>
              </div>
            </div>
          </div>

          <div
            className="md:text-right md:border-l md:pl-8"
            style={{ borderLeftColor: '#EDECE8' }}
          >
            <p
              className="font-montserrat"
              style={{
                fontSize: '0.75rem',
                color: '#666666',
                lineHeight: '1.65',
                marginBottom: '1rem'
              }}
            >
              {lang === 'en'
                ? 'Part of IN2ME proceeds support Fundación Iguales in their work advancing LGBTQIA+ rights in Chile.'
                : 'Parte de los ingresos de IN2ME apoyan a Fundación Iguales en su trabajo de promoción de derechos LGBTQIA+ en Chile.'}
            </p>
            <a
              href="https://iguales.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-medium transition-colors duration-200"
              style={{
                fontSize: '0.75rem',
                color: '#555555',
                textDecoration: 'none',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#111111')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#555555')}
            >
              {lang === 'en' ? 'Learn more →' : 'Saber más →'}
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="label">Structures AW 2025</span>
            <span style={{ color: '#DEDEDE', fontSize: '0.7rem' }}>·</span>
            <span className="label">Santiago, Chile</span>
          </div>
          <span className="label">{t(content.footer.rights, lang)}</span>
        </div>
      </div>
    </footer>
  );
}
