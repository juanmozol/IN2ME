import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function Manufacturing() {
  const { lang } = useLang();
  const steps = content.manufacturing.steps;

  return (
    <section
      id="manufacturing"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.manufacturing.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.manufacturing.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: photography */}
          <div className="lg:col-span-6">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/3', backgroundColor: '#EDECE8' }}
            >
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753a8c5?w=1260&h=750&fit=crop"
                alt="IN2ME Atelier, Santiago"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              />
              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
                style={{ backgroundColor: 'rgba(245,244,241,0.9)', borderTop: '1px solid #DEDEDE' }}
              >
                <span className="label">{t(content.manufacturing.workshopLabel, lang)}</span>
                <span className="font-montserrat" style={{ fontSize: '0.7rem', color: '#666666' }}>
                  {t(content.manufacturing.workshopName, lang)} — {t(content.manufacturing.workshopLocation, lang)}
                </span>
              </div>
            </div>

            {/* Second image — detail */}
            <div
              className="relative overflow-hidden mt-3"
              style={{ aspectRatio: '16/7', backgroundColor: '#EDECE8' }}
            >
              <img
                src="https://images.unsplash.com/photo-1594938298603-c914edb15853?w=1260&h=500&fit=crop"
                alt="Garment detail"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(20%)', objectPosition: 'center 30%' }}
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2
                className="font-grotesk font-light leading-editorial mb-6 whitespace-pre-line"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111111' }}
              >
                {t(content.manufacturing.title, lang)}
              </h2>
              <p
                className="font-montserrat leading-body mb-10"
                style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '32rem' }}
              >
                {t(content.manufacturing.subtitle, lang)}
              </p>

              {/* Small batch note */}
              <div
                className="mb-12 px-6 py-5"
                style={{ border: '1px solid #EDECE8', backgroundColor: '#FAFAF8' }}
              >
                <span
                  className="font-grotesk font-medium block mb-2"
                  style={{ fontSize: '0.85rem', color: '#111111' }}
                >
                  {t(content.manufacturing.smallBatch, lang)}
                </span>
                <p
                  className="font-montserrat leading-body"
                  style={{ fontSize: '0.8rem', color: '#777777' }}
                >
                  {t(content.manufacturing.smallBatchDetail, lang)}
                </p>
              </div>
            </div>

            {/* Production stages */}
            <div>
              <span className="label block mb-6">
                {t(content.manufacturing.stepsTitle, lang)}
              </span>
              <div
                className="grid grid-cols-2 gap-px"
                style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
              >
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 flex items-center gap-4"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    <span
                      className="font-grotesk font-light flex-shrink-0"
                      style={{ fontSize: '0.65rem', color: '#CCCCCC', letterSpacing: '0.08em', minWidth: '1.4rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-montserrat"
                      style={{ fontSize: '0.78rem', color: '#444444' }}
                    >
                      {t(step, lang)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
