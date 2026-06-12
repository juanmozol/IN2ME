import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';
import type { Material } from '../types';

const materialColors: Record<string, { bg: string; label: string }> = {
  Khaki: { bg: '#9B8B6E', label: '#FFFFFF' },
  Burgundy: { bg: '#6B1818', label: '#FFFFFF' },
  Cream: { bg: '#EDE5D8', label: '#555555' },
  'Antique Silver': { bg: '#888888', label: '#FFFFFF' },
};

interface MaterialsProps {
  materials: Material[];
}

export default function Materials({ materials }: MaterialsProps) {
  const { lang } = useLang();

  return (
    <section
      id="materials"
      style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.materials.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.materials.sectionLabel, lang)}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <h2
            className="font-grotesk font-light leading-editorial"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111' }}
          >
            {t(content.materials.title, lang)}
          </h2>
          <p
            className="font-montserrat leading-body lg:text-right"
            style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '26rem' }}
          >
            {t(content.materials.subtitle, lang)}
          </p>
        </div>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: '#EDECE8', marginBottom: '3rem' }} />

        {/* Material entries */}
        <div className="flex flex-col gap-0">
          {materials.map((material, index) => {
            const name = lang === 'en' ? material.name : material.name_es;
            const fabricType = lang === 'en' ? material.fabric_type : material.fabric_type_es;
            const composition = lang === 'en' ? material.composition_descriptor : material.composition_descriptor_es;
            const colorKey = material.color ?? 'Khaki';
            const colorData = materialColors[colorKey] ?? materialColors['Khaki'];

            return (
              <div
                key={material.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-0"
                style={{ borderBottom: '1px solid #EDECE8' }}
              >
                {/* Index + color swatch column */}
                <div
                  className="md:col-span-1 py-8 px-4 flex md:flex-col items-center md:items-start gap-4 md:gap-6"
                  style={{ borderRight: '1px solid #EDECE8' }}
                >
                  <span
                    className="font-grotesk font-light"
                    style={{ fontSize: '0.6rem', color: '#CCCCCC', letterSpacing: '0.1em' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      backgroundColor: colorData.bg,
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Material name column */}
                <div
                  className="md:col-span-3 py-8 px-6 flex items-center"
                  style={{ borderRight: '1px solid #EDECE8' }}
                >
                  <div>
                    <h3
                      className="font-grotesk font-medium mb-1"
                      style={{ fontSize: '1.1rem', color: '#111111' }}
                    >
                      {name}
                    </h3>
                    <span className="label">{fabricType}</span>
                  </div>
                </div>

                {/* Composition column */}
                <div
                  className="md:col-span-4 py-8 px-6"
                  style={{ borderRight: '1px solid #EDECE8' }}
                >
                  <span className="label block mb-3">
                    {t(content.materials.composition, lang)}
                  </span>
                  <p
                    className="font-montserrat leading-body"
                    style={{ fontSize: '0.82rem', color: '#555555' }}
                  >
                    {composition}
                  </p>
                </div>

                {/* Origin + supplier column */}
                <div className="md:col-span-4 py-8 px-6">
                  <div className="mb-5">
                    <span className="label block mb-2">
                      {t(content.materials.origin, lang)}
                    </span>
                    <span
                      className="font-montserrat"
                      style={{ fontSize: '0.82rem', color: '#333333' }}
                    >
                      {material.origin_region
                        ? `${material.origin_region}, ${material.origin_country}`
                        : material.origin_country}
                    </span>
                  </div>
                  {material.supplier_name && (
                    <div>
                      <span className="label block mb-2">
                        {t(content.materials.supplier, lang)}
                      </span>
                      <span
                        className="font-montserrat"
                        style={{ fontSize: '0.82rem', color: '#333333' }}
                      >
                        {material.supplier_name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
