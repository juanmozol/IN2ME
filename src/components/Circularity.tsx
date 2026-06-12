import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function Circularity() {
  const { lang } = useLang();

  const blocks = [
    {
      title: t(content.circularity.packagingTitle, lang),
      text: t(content.circularity.packagingText, lang),
    },
    {
      title: t(content.circularity.remnantsTitle, lang),
      text: t(content.circularity.remnantsText, lang),
    },
    {
      title: t(content.circularity.returnTitle, lang),
      text: t(content.circularity.returnText, lang),
    },
    {
      title: t(content.circularity.repairTitle, lang),
      text: t(content.circularity.repairText, lang),
    },
  ];

  return (
    <section
      id="circularity"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.circularity.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.circularity.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111111' }}
            >
              {t(content.circularity.title, lang)}
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '32rem' }}
            >
              {t(content.circularity.subtitle, lang)}
            </p>
          </div>
        </div>

        {/* Four blocks */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-16"
          style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
        >
          {blocks.map(({ title, text }, i) => (
            <div
              key={i}
              className="px-8 py-8 flex flex-col gap-4"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-grotesk font-light flex-shrink-0 pt-0.5"
                  style={{ fontSize: '0.6rem', color: '#CCCCCC', letterSpacing: '0.08em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="font-grotesk font-medium mb-3"
                    style={{ fontSize: '1rem', color: '#111111' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-montserrat leading-body"
                    style={{ fontSize: '0.82rem', color: '#666666' }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 py-10"
          style={{ border: '1px solid #111111', backgroundColor: '#FAFAF8' }}
        >
          <div>
            <span className="label block mb-2">{t(content.circularity.ctaText, lang)}</span>
            <a
              href={`mailto:${t(content.circularity.ctaEmail, lang)}`}
              className="font-grotesk font-light"
              style={{ fontSize: '1.2rem', color: '#111111', textDecoration: 'none', letterSpacing: '0.02em' }}
            >
              {t(content.circularity.ctaEmail, lang)}
            </a>
          </div>
          <a
            href={`mailto:${t(content.circularity.ctaEmail, lang)}`}
            className="btn-primary flex-shrink-0"
          >
            {t(content.circularity.ctaText, lang)}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
