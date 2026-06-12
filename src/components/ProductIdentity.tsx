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
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20 fade-in">
          <span className="index-num">{t(content.identity.sectionNum, lang)}</span>
          <div className="section-rule" style={{ width: '2rem' }} />
          <span className="label">{t(content.identity.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left col: product image */}
          <div className="lg:col-span-5 fade-in" style={{ animationDelay: '0.1s' }}>
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
                className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-center justify-between"
                style={{ backgroundColor: 'rgba(245,244,241,0.95)', borderTop: '1px solid #DEDEDE' }}
              >
                <span className="label">{t(content.identity.passportId, lang)}</span>
                <span
                  className="font-montserrat text-ink-800 tracking-widest"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
                >
                  {product.passport_id}
                </span>
              </div>
            </div>
          </div>

          {/* Right col: details */}
          <div className="lg:col-span-7 flex flex-col justify-center fade-in" style={{ animationDelay: '0.2s' }}>
            <h2
              className="font-grotesk font-light leading-tight-heading mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111111', lineHeight: '1.15' }}
            >
              {productName}
            </h2>

            {description && (
              <p
                className="font-montserrat leading-body mb-12"
                style={{ fontSize: '0.95rem', color: '#555555', maxWidth: '36rem', lineHeight: '1.65' }}
              >
                {description}
              </p>
            )}

            {/* Meta grid */}
            <div
              className="grid grid-cols-2 gap-px mb-14"
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
                  className="px-6 py-5"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span className="label block mb-2.5">{label}</span>
                  <span
                    className="font-montserrat"
                    style={{ fontSize: '0.8rem', color: '#333333', letterSpacing: '0.02em', lineHeight: '1.5' }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-3 mb-14">
              {[
                t(content.identity.genderless, lang),
                t(content.identity.smallBatch, lang),
                'NEWME Pre-Fall 2026',
              ].map(tag => (
                <span
                  key={tag}
                  className="font-montserrat px-4 py-2"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    border: '1px solid #DEDEDE',
                    color: '#555555',
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
                <span className="label block mb-5">{t(content.identity.materialsTitle, lang)}</span>
                <div className="flex flex-col gap-2.5">
                  {primaryMaterials.map(mat => (
                    <div
                      key={mat.id}
                      className="flex items-center gap-4 px-5 py-4"
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
                        style={{ fontSize: '0.85rem', color: '#111111' }}
                      >
                        {lang === 'en' ? mat.name : mat.name_es}
                      </span>
                      <span
                        className="font-montserrat ml-auto"
                        style={{ fontSize: '0.75rem', color: '#999999' }}
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

        {/* Technical Sheet with QR and Verification Badge */}
        <div className="mt-20 lg:mt-28 pt-20 lg:pt-28 border-t border-gray-300" style={{ borderTopColor: '#DEDEDE' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* QR Code Section */}
            <div className="flex flex-col items-center fade-in" style={{ animationDelay: '0.3s' }}>
              <div
                className="relative mb-6"
                style={{
                  width: '180px',
                  height: '180px',
                  border: '1px solid #DEDEDE',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Placeholder QR - replace with actual QR component */}
                <svg viewBox="0 0 29 29" className="w-full h-full" style={{ padding: '8px' }}>
                  <rect x="0" y="0" width="29" height="29" fill="white" />
                  <rect x="0" y="0" width="7" height="7" fill="black" />
                  <rect x="22" y="0" width="7" height="7" fill="black" />
                  <rect x="0" y="22" width="7" height="7" fill="black" />
                  <rect x="11" y="11" width="7" height="7" fill="black" />
                </svg>
              </div>
              <p
                className="font-montserrat text-center tracking-wide"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                {lang === 'en' ? 'Scan to verify authenticity' : 'Escanea para verificar autenticidad'}
              </p>
            </div>

            {/* Verification Badge */}
            <div className="flex flex-col items-center justify-center fade-in" style={{ animationDelay: '0.4s' }}>
              <div
                className="flex flex-col items-center gap-4 mb-6"
                style={{
                  padding: '2rem',
                  border: '1px solid #DEDEDE',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {/* Check Icon */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2"
                  >
                    <polyline points="2,8 6,12 14,4" />
                  </svg>
                </div>
                <div className="text-center">
                  <p
                    className="font-montserrat font-medium block mb-1"
                    style={{ fontSize: '0.8rem', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  >
                    {lang === 'en' ? 'Status' : 'Estado'}
                  </p>
                  <p
                    className="font-grotesk font-medium"
                    style={{ fontSize: '1rem', color: '#22C55E' }}
                  >
                    {lang === 'en' ? 'Verified' : 'Verificado'}
                  </p>
                </div>
              </div>
              <p
                className="font-montserrat text-center"
                style={{
                  fontSize: '0.65rem',
                  color: '#999999',
                  maxWidth: '12rem',
                  lineHeight: '1.4',
                }}
              >
                {lang === 'en'
                  ? 'Authentic IN2ME Digital Passport'
                  : 'Pasaporte Digital IN2ME Auténtico'}
              </p>
            </div>

            {/* Passport ID Section */}
            <div className="flex flex-col items-center fade-in" style={{ animationDelay: '0.5s' }}>
              <div
                style={{
                  padding: '2rem',
                  border: '1px solid #DEDEDE',
                  backgroundColor: '#FAFAF8',
                  width: '100%',
                }}
              >
                <p
                  className="font-montserrat block mb-3"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#999999',
                  }}
                >
                  {lang === 'en' ? 'Passport ID' : 'ID de Pasaporte'}
                </p>
                <p
                  className="font-grotesk font-light mb-6"
                  style={{
                    fontSize: '1.2rem',
                    color: '#111111',
                    wordBreak: 'break-all',
                    lineHeight: '1.5',
                  }}
                >
                  {product.passport_id}
                </p>
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid #DEDEDE',
                  }}
                >
                  <p
                    className="font-montserrat block mb-2"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#999999',
                    }}
                  >
                    {lang === 'en' ? 'Edition' : 'Edición'}
                  </p>
                  <p
                    className="font-grotesk"
                    style={{
                      fontSize: '0.9rem',
                      color: '#333333',
                    }}
                  >
                    {lang === 'en' ? 'Limited Batch #01/50' : 'Lote Limitado #01/50'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
