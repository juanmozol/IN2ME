import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
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
              style={{ fontSize: '0.8rem', color: '#888888' }}
            >
              {t(content.footer.tagline, lang)}
            </p>
          </div>

          {/* Passport note */}
          <div>
            <span className="label block mb-3">{t(content.nav.passportLabel, lang)}</span>
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.75rem', color: '#888888' }}
            >
              {t(content.footer.passportNote, lang)}
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="label block mb-3">{t(content.footer.contact, lang)}</span>
            <a
              href={`mailto:${t(content.footer.contactVal, lang)}`}
              className="font-montserrat transition-colors duration-200"
              style={{ fontSize: '0.82rem', color: '#555555', textDecoration: 'none', letterSpacing: '0.02em' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#111111')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#555555')}
            >
              {t(content.footer.contactVal, lang)}
            </a>
            <div className="mt-4">
              <span className="label block mb-1.5">{lang === 'en' ? 'Website' : 'Sitio web'}</span>
              <span className="font-montserrat" style={{ fontSize: '0.82rem', color: '#555555' }}>
                in2me.cl
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid #EDECE8' }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="label">Structures AW 2025</span>
            <span style={{ color: '#DEDEDE', fontSize: '0.7rem' }}>·</span>
            <span className="label">Santiago, Chile</span>
            <span style={{ color: '#DEDEDE', fontSize: '0.7rem' }}>·</span>
            <span className="label">
              {lang === 'en' ? 'Supporting Fundación Iguales' : 'Apoyando Fundación Iguales'}
            </span>
          </div>
          <span className="label">{t(content.footer.rights, lang)}</span>
        </div>
      </div>
    </footer>
  );
}
