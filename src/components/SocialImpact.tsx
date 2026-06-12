import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function SocialImpact() {
  const { lang } = useLang();

  const facts = [
    { label: t(content.social.foundationLabel, lang), val: t(content.social.foundationName, lang) },
    { label: t(content.social.workLabel, lang), val: t(content.social.workVal, lang) },
    { label: t(content.social.modelLabel, lang), val: t(content.social.modelVal, lang) },
  ];

  return (
    <section
      id="social"
      style={{ backgroundColor: '#111111', borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-32">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-grotesk font-light"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444444' }}
          >
            {t(content.social.sectionNum, lang)}
          </span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#333333' }} />
          <span
            className="font-montserrat"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#555555' }}
          >
            {t(content.social.sectionLabel, lang)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Title */}
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#F5F4F1' }}
            >
              {t(content.social.title, lang)}
            </h2>
          </div>

          {/* Body + link */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.social.body1, lang)}
            </p>
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.social.body2, lang)}
            </p>

            <a
              href="https://www.iguales.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light w-fit"
            >
              {t(content.social.learnMore, lang)}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: '#1E1E1E', marginBottom: '3.5rem' }} />

        {/* Foundation data */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {facts.map(({ label, val }) => (
            <div
              key={label}
              className="px-7 py-8"
              style={{ backgroundColor: '#111111' }}
            >
              <span
                className="font-montserrat block mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#444444' }}
              >
                {label}
              </span>
              <span
                className="font-grotesk font-medium leading-tight"
                style={{ fontSize: '1rem', color: '#FFFFFF' }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Design alignment note */}
        <div
          className="mt-12 px-8 py-8"
          style={{ borderLeft: '2px solid #2C2C2C' }}
        >
          <p
            className="font-montserrat font-medium leading-body italic"
            style={{ fontSize: '0.875rem', color: '#FFFFFF', lineHeight: '1.75', maxWidth: '44rem' }}
          >
            {t(content.social.genderlessNote, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
