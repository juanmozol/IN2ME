import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function CareInstructions() {
  const { lang } = useLang();
  const instructions = content.care.instructions;

  return (
    <section
      id="care"
      style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.care.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.care.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111' }}
            >
              {t(content.care.title, lang)}
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '32rem' }}
            >
              {t(content.care.intro, lang)}
            </p>
          </div>
        </div>

        {/* Care instruction grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px mb-12"
          style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
        >
          {instructions.map((inst, i) => {
            const label = t(inst.label, lang);
            const detail = t(inst.detail, lang);

            return (
              <div
                key={i}
                className="px-5 py-7 flex flex-col items-start gap-4 group transition-colors duration-250"
                style={{ backgroundColor: '#FFFFFF' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F5F4F1';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#FFFFFF';
                }}
              >
                {/* Symbol */}
                <div
                  className="flex items-center justify-center font-grotesk font-light"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    border: '1px solid #EDECE8',
                    fontSize: '0.65rem',
                    letterSpacing: '0.05em',
                    color: '#333333',
                    flexShrink: 0,
                  }}
                >
                  {inst.symbol}
                </div>
                <div>
                  <span
                    className="font-grotesk font-medium block mb-1.5"
                    style={{ fontSize: '0.8rem', color: '#111111' }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-montserrat leading-relaxed"
                    style={{ fontSize: '0.72rem', color: '#888888' }}
                  >
                    {detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Storage advice */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px"
          style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
        >
          <div className="px-8 py-8" style={{ backgroundColor: '#FFFFFF' }}>
            <span className="label block mb-4">{t(content.care.storageTitle, lang)}</span>
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.85rem', color: '#555555' }}
            >
              {t(content.care.storageText, lang)}
            </p>
          </div>
          <div
            className="px-8 py-8 flex items-center"
            style={{ backgroundColor: '#FAFAF8' }}
          >
            <p
              className="font-montserrat leading-body italic"
              style={{ fontSize: '0.85rem', color: '#888888' }}
            >
              {lang === 'en'
                ? 'With proper care, this garment is designed to remain in active use for years — not seasons.'
                : 'Con el cuidado adecuado, esta prenda está diseñada para permanecer en uso activo durante años, no temporadas.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
