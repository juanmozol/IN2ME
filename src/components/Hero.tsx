import { useState, useEffect } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';
import type { Product } from '../types';

interface HeroProps {
  products: Product[];
  activeProduct: Product | null;
  onProductChange: (product: Product) => void;
}

export default function Hero({ products, activeProduct, onProductChange }: HeroProps) {
  const { lang } = useLang();
  const [showBack, setShowBack] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    setShowBack(false);
    setImageLoaded(false);
    setTransitionKey(prev => prev + 1);
  }, [activeProduct]);

  const heroImage =
    (showBack ? activeProduct?.back_image_url : activeProduct?.hero_image_url) ||
    'https://images.unsplash.com/photo-1509631179647-0177339150241?w=1260&h=750&fit=crop';

  const productName = activeProduct
    ? (lang === 'en' ? activeProduct.name : activeProduct.name_es)
    : '';
  const collectionName = activeProduct
    ? (lang === 'en' ? activeProduct.collection : activeProduct.collection_es)
    : '';
  const otherProduct = products.find(p => p.id !== activeProduct?.id) ?? null;

  return (
    <section className="relative min-h-screen bg-ink-900 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          key={transitionKey}
          src={heroImage}
          alt={productName}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover object-top"
          style={{
            opacity: imageLoaded ? 0.55 : 0,
            transition: 'opacity 0.8s ease',
            filter: 'grayscale(15%)',
          }}
        />
        {/* Gradient: strong at bottom, subtle at top */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.7) 85%, rgba(10,10,10,0.95) 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0) 50%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col">
        {/* Spacer for nav */}
        <div className="h-20 md:h-24" />

        {/* Top meta bar */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <span
              className="font-montserrat tracking-widest uppercase"
              style={{ fontSize: '0.55rem', letterSpacing: '0.28em', color: '#888888' }}
            >
              {t(content.hero.eyebrow, lang)}
            </span>
          </div>
          {activeProduct && (
            <span
              className="font-montserrat tracking-widest"
              style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: '#666666' }}
            >
              {activeProduct.passport_id}
            </span>
          )}
        </div>

        {/* Main title area — pushed to bottom */}
        <div className="flex-1 flex flex-col justify-end pb-14 md:pb-20">
          {/* Collection + season row */}
          <div className="flex items-center gap-6 mb-6">
            {[
              { label: t(content.hero.collection, lang), val: collectionName },
              { label: t(content.hero.season, lang), val: activeProduct?.season ?? '' },
            ].map(({ label, val }) => (
              <div key={label}>
                <span
                  className="font-montserrat block mb-1"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.28em', color: '#666666', textTransform: 'uppercase' }}
                >
                  {label}
                </span>
                <span
                  className="font-grotesk font-light"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.12em', color: '#BBBBBB' }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* Product name — large editorial */}
          <h1
            className="font-grotesk font-light text-white leading-editorial mb-8"
            style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)', color: '#F5F4F1', lineHeight: '1.0' }}
          >
            {productName}
          </h1>

          {/* Bottom controls row */}
          <div className="flex items-end justify-between flex-wrap gap-6">
            {/* View toggle */}
            <div className="flex items-center gap-0">
              {[
                { label: t(content.hero.viewFront, lang), active: !showBack, onClick: () => setShowBack(false) },
                ...(activeProduct?.back_image_url
                  ? [{ label: t(content.hero.viewBack, lang), active: showBack, onClick: () => setShowBack(true) }]
                  : []),
              ].map(({ label, active, onClick }, i) => (
                <button
                  key={i}
                  onClick={onClick}
                  className="font-montserrat transition-colors duration-200"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: active ? '#F5F4F1' : '#555555',
                    paddingBottom: '2px',
                    borderBottom: active ? '1px solid #F5F4F1' : '1px solid transparent',
                    marginRight: '1.5rem',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Other product switcher */}
            {otherProduct && (
              <button
                onClick={() => onProductChange(otherProduct)}
                className="group flex items-center gap-3"
              >
                <div
                  className="overflow-hidden"
                  style={{ width: '2.5rem', height: '3rem', border: '1px solid #333333', flexShrink: 0 }}
                >
                  {otherProduct.hero_image_url && (
                    <img
                      src={otherProduct.hero_image_url}
                      alt=""
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'grayscale(30%)' }}
                    />
                  )}
                </div>
                <div className="text-left">
                  <span
                    className="font-montserrat block mb-0.5"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: '#555555', textTransform: 'uppercase' }}
                  >
                    {t(content.hero.switchLabel, lang)}
                  </span>
                  <span
                    className="font-grotesk font-light transition-colors duration-200 group-hover:text-white"
                    style={{ fontSize: '0.85rem', color: '#888888' }}
                  >
                    {lang === 'en' ? otherProduct.name : otherProduct.name_es}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="pb-6 flex items-center gap-3"
          style={{ borderTop: '1px solid #222222', paddingTop: '1rem' }}
        >
          <div
            className="h-4 w-px animate-pulse"
            style={{ background: 'linear-gradient(to bottom, #444, transparent)' }}
          />
          <span
            className="font-montserrat"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: '#444444', textTransform: 'uppercase' }}
          >
            {t(content.hero.scrollHint, lang)}
          </span>
        </div>
      </div>
    </section>
  );
}
