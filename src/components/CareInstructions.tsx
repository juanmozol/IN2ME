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
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20 fade-in">
          <span className="index-num">{t(content.care.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.care.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111', lineHeight: '1.15' }}
            >
              {t(content.care.title, lang)}
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.95rem', color: '#555555', maxWidth: '32rem', lineHeight: '1.65' }}
            >
              {t(content.care.intro, lang)}
            </p>
          </div>
        </div>

        {/* Care instruction grid - Clean aligned layout */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px mb-16 lg:mb-20 fade-in"
          style={{ 
            border: '1px solid #EDECE8', 
            backgroundColor: '#EDECE8',
            animationDelay: '0.2s'
          }}
        >
          {instructions.map((inst, i) => {
            const label = t(inst.label, lang);
            const detail = t(inst.detail, lang);

            return (
              <div
                key={i}
                className="px-5 py-8 flex flex-col items-start gap-4 group transition-colors duration-250"
                style={{ backgroundColor: '#FFFFFF' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F5F4F1';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#FFFFFF';
                }}
              >
                {/* Icon/Symbol in clean box */}
                <div
                  className="flex items-center justify-center font-grotesk font-light flex-shrink-0"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    border: '1px solid #EDECE8',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    color: '#333333',
                    borderRadius: '2px',
                  }}
                >
                  {inst.symbol}
                </div>
                
                {/* Label and technical detail */}
                <div className="w-full">
                  <span
                    className="font-grotesk font-medium block mb-2"
                    style={{ fontSize: '0.75rem', color: '#111111', letterSpacing: '0.05em' }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-montserrat leading-relaxed block"
                    style={{ fontSize: '0.65rem', color: '#666666', lineHeight: '1.4' }}
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-px fade-in"
          style={{ 
            border: '1px solid #EDECE8', 
            backgroundColor: '#EDECE8',
            animationDelay: '0.3s'
          }}
        >
          <div className="px-8 py-10" style={{ backgroundColor: '#FFFFFF' }}>
            <span className="label block mb-4">{t(content.care.storageTitle, lang)}</span>
            <p
              className="font-montserrat leading-body"
              style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.65' }}
            >
              {t(content.care.storageText, lang)}
            </p>
          </div>
          <div
            className="px-8 py-10 flex items-center"
            style={{ backgroundColor: '#FAFAF8' }}
          >
            <p
              className="font-montserrat leading-body italic"
              style={{ fontSize: '0.9rem', color: '#777777', lineHeight: '1.65' }}
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
