import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';
import type { PassportData } from '../types';

interface ProductIdentityProps {
  data: PassportData;
}

export default function ProductIdentity({ data }: ProductIdentityProps) {
  const { lang } = useLang();
  const { product, materials } = data;

  const productName = lang === 'en' ? product.name : product.name_es;
  const description = lang === 'en' ? product.description : product.description_es;
  const collectionName = lang === 'en' ? product.collection : product.collection_es;

  const primaryMaterials = materials.filter(m =>
    m.name === 'Casimir Blend' || m.name === 'Faya'
  );

  return (
    <section id="identity" style={{ backgroundColor: '#F5F4F1', borderTop: '1px solid #DEDEDE' }}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.identity.sectionNum, lang)}</span>
          <div className="section-rule" style={{ width: '2rem' }} />
          <span className="label">{t(content.identity.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left col: product image */}
          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '3/4', backgroundColor: '#EDECE8' }}
            >
              {product.hero_image_url ? (
                <img
                  src={product.hero_image_url}
                  alt={productName}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'grayscale(8%)' }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop"
                  alt={productName}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'grayscale(15%)' }}
                />
              )}
              {/* Bottom data strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
                style={{ backgroundColor: 'rgba(245,244,241,0.92)', borderTop: '1px solid #DEDEDE' }}
              >
                <span className="label">{t(content.identity.passportId, lang)}</span>
                <span
                  className="font-montserrat text-ink-800 tracking-widest"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
                >
                  {product.passport_id}
                </span>
              </div>
            </div>
          </div>

          {/* Right col: details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              className="font-grotesk font-light leading-tight-heading mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111111' }}
            >
              {productName}
            </h2>

            {description && (
              <p
                className="font-montserrat leading-body mb-10"
                style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '36rem' }}
              >
                {description}
              </p>
            )}

            {/* Meta grid */}
            <div
              className="grid grid-cols-2 gap-px mb-12"
              style={{ border: '1px solid #DEDEDE', backgroundColor: '#DEDEDE' }}
            >
              {[
                { label: t(content.identity.sku, lang), val: product.sku },
                { label: t(content.identity.collection, lang), val: collectionName },
                { label: t(content.identity.season, lang), val: product.season },
                { label: t(content.identity.origin, lang), val: t(content.identity.originVal, lang) },
                { label: t(content.identity.design, lang), val: t(content.identity.localVal, lang) },
                { label: t(content.identity.production, lang), val: t(content.identity.localVal, lang) },
              ].map(({ label, val }) => (
                <div
                  key={label}
                  className="px-5 py-4"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span className="label block mb-2">{label}</span>
                  <span
                    className="font-montserrat"
                    style={{ fontSize: '0.78rem', color: '#333333', letterSpacing: '0.02em' }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mb-12">
              {[
                t(content.identity.genderless, lang),
                t(content.identity.smallBatch, lang),
                'NEWME Pre-Fall 2026',
              ].map(tag => (
                <span
                  key={tag}
                  className="font-montserrat px-3 py-1.5"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    border: '1px solid #DEDEDE',
                    color: '#666666',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Materials quick-view */}
            {primaryMaterials.length > 0 && (
              <div>
                <span className="label block mb-4">{t(content.identity.materialsTitle, lang)}</span>
                <div className="flex flex-col gap-2">
                  {primaryMaterials.map(mat => (
                    <div
                      key={mat.id}
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ border: '1px solid #EDECE8', backgroundColor: '#FAFAF8' }}
                    >
                      <div
                        className="w-5 h-5 flex-shrink-0"
                        style={{
                          backgroundColor:
                            mat.color === 'Burgundy'
                              ? '#7A1E1E'
                              : mat.color === 'Khaki'
                              ? '#9B8B6E'
                              : mat.color === 'Silver'
                              ? '#C0C0C0'
                              : mat.color === 'Cream'
                              ? '#F3EDE5'
                              : '#9B8B6E',
                        }}
                      />
                      <span
                        className="font-grotesk font-medium"
                        style={{ fontSize: '0.8rem', color: '#111111' }}
                      >
                        {lang === 'en' ? mat.name : mat.name_es}
                      </span>
                      <span
                        className="font-montserrat ml-auto"
                        style={{ fontSize: '0.7rem', color: '#999999' }}
                      >
                        {lang === 'en' ? mat.fabric_type : mat.fabric_type_es}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
