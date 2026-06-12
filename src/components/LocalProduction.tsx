import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function LocalProduction() {
  const { lang } = useLang();

  const facts = [
    { label: t(content.localProduction.designLabel, lang), val: t(content.localProduction.designVal, lang) },
    { label: t(content.localProduction.sourcingLabel, lang), val: t(content.localProduction.sourcingVal, lang) },
    { label: t(content.localProduction.manufacturingLabel, lang), val: t(content.localProduction.manufacturingVal, lang) },
    { label: t(content.localProduction.networkLabel, lang), val: t(content.localProduction.networkVal, lang) },
  ];

  return (
    <section
      id="local-production"
      style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.localProduction.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.localProduction.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: large title */}
          <div className="lg:col-span-4">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111111' }}
            >
              {t(content.localProduction.title, lang)}
            </h2>
          </div>

          {/* Right: body + data */}
          <div className="lg:col-span-8">
            <p
              className="font-montserrat leading-relaxed-body mb-6"
              style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.75' }}
            >
              {t(content.localProduction.body1, lang)}
            </p>
            <p
              className="font-montserrat leading-relaxed-body mb-12"
              style={{ fontSize: '0.9rem', color: '#777777', lineHeight: '1.75' }}
            >
              {t(content.localProduction.body2, lang)}
            </p>

            {/* Supply chain facts */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-px"
              style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
            >
              {facts.map(({ label, val }) => (
                <div
                  key={label}
                  className="px-5 py-6"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span className="label block mb-3">{label}</span>
                  <span
                    className="font-grotesk font-light leading-tight"
                    style={{ fontSize: '0.9rem', color: '#111111' }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width map-style graphic */}
        <div
          className="mt-16 relative overflow-hidden"
          style={{ height: '240px', backgroundColor: '#EDECE8', border: '1px solid #DEDEDE' }}
        >
          <img
            src="https://images.unsplash.com/photo-1518610258421-9b0d5eb64f58?w=1260&h=400&fit=crop"
            alt="Santiago, Chile"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(35%) contrast(0.9)', opacity: 0.7 }}
          />
          <div
            className="absolute inset-0 flex items-end px-8 pb-8"
            style={{ background: 'linear-gradient(to right, rgba(245,244,241,0.7) 0%, rgba(245,244,241,0) 60%)' }}
          >
            <div>
              <span className="label block mb-2">{lang === 'en' ? 'Production region' : 'Región de producción'}</span>
              <span
                className="font-grotesk font-light"
                style={{ fontSize: '1.6rem', color: '#111111' }}
              >
                Santiago Metropolitan Region, Chile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
