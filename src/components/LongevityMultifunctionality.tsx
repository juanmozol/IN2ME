import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';

export default function LongevityMultifunctionality() {
  const { lang } = useLang();
  const traits = content.longevity.traits;

  return (
    <section
      id="longevity"
      style={{ backgroundColor: '#111111', borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-32">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-grotesk font-light"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444444' }}
          >
            {t(content.longevity.sectionNum, lang)}
          </span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#333333' }} />
          <span
            className="font-montserrat"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#555555' }}
          >
            {t(content.longevity.sectionLabel, lang)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Title */}
          <div className="lg:col-span-5">
            <h2
              className="font-grotesk font-light leading-editorial whitespace-pre-line"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#F5F4F1' }}
            >
              {t(content.longevity.title, lang)}
            </h2>
          </div>

          {/* Body */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.longevity.body1, lang)}
            </p>
            <p
              className="font-montserrat font-medium leading-body"
              style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: '1.75' }}
            >
              {t(content.longevity.body2, lang)}
            </p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: '#1E1E1E', marginBottom: '3.5rem' }} />

        <span
          className="font-montserrat block mb-10"
          style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#444444' }}
        >
          {t(content.longevity.traitsTitle, lang)}
        </span>

        {/* Traits — horizontal list */}
        <div className="flex flex-col gap-0">
          {traits.map((trait, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 group"
              style={{ borderTop: '1px solid #1E1E1E' }}
            >
              <div
                className="md:col-span-1 py-7 pr-6 flex items-center"
              >
                <span
                  className="font-grotesk font-light"
                  style={{ fontSize: '0.6rem', color: '#333333', letterSpacing: '0.08em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div
                className="md:col-span-3 py-7 pr-8 flex items-center"
              >
                <h3
                  className="font-grotesk font-medium"
                  style={{ fontSize: '0.95rem', color: '#FFFFFF' }}
                >
                  {t(trait.label, lang)}
                </h3>
              </div>
              <div className="md:col-span-8 py-7 flex items-center">
                <p
                  className="font-montserrat font-medium leading-body"
                  style={{ fontSize: '0.82rem', color: '#FFFFFF', lineHeight: '1.65' }}
                >
                  {t(trait.text, lang)}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #1E1E1E' }} />
        </div>

        {/* Editorial garment image */}
        <div
          className="mt-16 overflow-hidden"
          style={{ aspectRatio: '21/8', backgroundColor: '#1A1A1A' }}
        >
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177339150241?w=1260&h=500&fit=crop"
            alt="IN2ME garment detail"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(30%) contrast(1.1)', opacity: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
