import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function DesignManifesto() {
  const { lang } = useLang();
  const principles = content.manifesto.principles;

  return (
    <section
      id="manifesto"
      style={{ backgroundColor: '#111111', borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-32">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-grotesk font-light" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444444' }}>
            {t(content.manifesto.sectionNum, lang)}
          </span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#333333' }} />
          <span
            className="font-montserrat"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#555555' }}
          >
            {t(content.manifesto.sectionLabel, lang)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Large title */}
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: '#F5F4F1' }}
            >
              {t(content.manifesto.title, lang)}
            </h2>
          </div>

          {/* Body text */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.manifesto.body1, lang)}
            </p>
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.manifesto.body2, lang)}
            </p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: '#1E1E1E', marginBottom: '3.5rem' }} />

        {/* Principles */}
        <div className="mb-8">
          <span
            className="font-montserrat"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#444444' }}
          >
            {t(content.manifesto.principlesTitle, lang)}
          </span>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {principles.map((principle, i) => (
            <div
              key={i}
              className="px-7 py-8 group transition-colors duration-300"
              style={{ backgroundColor: '#111111' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#161616';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#111111';
              }}
            >
              <span
                className="font-grotesk font-light block mb-5"
                style={{ fontSize: '0.6rem', color: '#333333', letterSpacing: '0.1em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-grotesk font-medium mb-4"
                style={{ fontSize: '1rem', color: '#FFFFFF' }}
              >
                {t(principle.title, lang)}
              </h3>
              <p
                className="font-montserrat font-medium leading-body"
                style={{ fontSize: '0.8rem', color: '#FFFFFF', lineHeight: '1.65' }}
              >
                {t(principle.text, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
