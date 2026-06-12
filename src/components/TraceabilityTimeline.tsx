import { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { content, t } from '../lib/content';
import type { TimelineEvent } from '../types';

interface TraceabilityTimelineProps {
  timeline: TimelineEvent[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function TraceabilityTimeline({ timeline }: TraceabilityTimelineProps) {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="traceability"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #DEDEDE' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="index-num">{t(content.traceability.sectionNum, lang)}</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: '#AAAAAA' }} />
          <span className="label">{t(content.traceability.sectionLabel, lang)}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="font-grotesk font-light leading-editorial mb-6 whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111' }}
            >
              {t(content.traceability.title, lang)}
            </h2>
            <p
              className="font-montserrat leading-body mb-10"
              style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '22rem' }}
            >
              {t(content.traceability.subtitle, lang)}
            </p>

            {/* Counts */}
            <div
              className="grid grid-cols-3 gap-px"
              style={{ border: '1px solid #EDECE8', backgroundColor: '#EDECE8' }}
            >
              {[
                { num: timeline.length, label: t(content.traceability.stages, lang) },
                { num: timeline.filter(e => e.verified).length, label: t(content.traceability.verified, lang) },
                { num: new Set(timeline.map(e => e.country)).size, label: lang === 'en' ? 'Countries' : 'Países' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="px-4 py-5 text-center"
                  style={{ backgroundColor: '#FAFAF8' }}
                >
                  <span
                    className="font-grotesk font-light block mb-1"
                    style={{ fontSize: '2rem', color: '#111111', lineHeight: '1' }}
                  >
                    {num}
                  </span>
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical rule */}
              <div
                className="absolute top-0 bottom-0"
                style={{ left: '15px', width: '1px', backgroundColor: '#EDECE8' }}
              />

              <div className="flex flex-col">
                {timeline.map((event, index) => {
                  const isOpen = openId === event.id;
                  const stageName = lang === 'en' ? event.stage : event.stage_es;
                  const description = lang === 'en' ? event.description : event.description_es;

                  return (
                    <div key={event.id} className="relative pl-12 pb-0">
                      {/* Node */}
                      <div
                        className="absolute top-0 transition-all duration-300"
                        style={{
                          left: 0,
                          width: '31px',
                          height: '31px',
                          border: isOpen ? '1px solid #111111' : '1px solid #DEDEDE',
                          backgroundColor: isOpen ? '#111111' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          className="font-grotesk font-light"
                          style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.05em',
                            color: isOpen ? '#F5F4F1' : '#AAAAAA',
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Row */}
                      <button
                        className="w-full text-left group py-5"
                        style={{
                          borderBottom: '1px solid #EDECE8',
                          paddingBottom: isOpen ? '0' : '1.25rem',
                        }}
                        onClick={() => setOpenId(isOpen ? null : event.id)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              className="font-grotesk font-medium mb-1.5 transition-colors duration-200 group-hover:text-ink-900"
                              style={{ fontSize: '0.95rem', color: isOpen ? '#111111' : '#333333' }}
                            >
                              {stageName}
                            </h3>
                            <div className="flex items-center gap-3 flex-wrap">
                              <span
                                className="font-montserrat"
                                style={{ fontSize: '0.7rem', color: '#AAAAAA' }}
                              >
                                {event.location}, {event.country}
                              </span>
                              {event.event_date && (
                                <>
                                  <span style={{ color: '#DEDEDE', fontSize: '0.7rem' }}>·</span>
                                  <span
                                    className="font-montserrat"
                                    style={{ fontSize: '0.7rem', color: '#AAAAAA' }}
                                  >
                                    {formatDate(event.event_date)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                            {event.verified && (
                              <span
                                className="font-montserrat px-2 py-0.5"
                                style={{
                                  fontSize: '0.55rem',
                                  letterSpacing: '0.2em',
                                  textTransform: 'uppercase',
                                  color: '#888888',
                                  border: '1px solid #EDECE8',
                                }}
                              >
                                {t(content.traceability.verified, lang)}
                              </span>
                            )}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="#AAAAAA"
                              strokeWidth="1.5"
                              className="transition-transform duration-300"
                              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                              <polyline points="2,4 6,8 10,4" />
                            </svg>
                          </div>
                        </div>

                        {/* Expanded detail */}
                        <div
                          className="overflow-hidden transition-all duration-400"
                          style={{ maxHeight: isOpen ? '12rem' : '0', opacity: isOpen ? 1 : 0 }}
                        >
                          <p
                            className="font-montserrat leading-body pt-4 pb-5"
                            style={{
                              fontSize: '0.82rem',
                              color: '#555555',
                              borderLeft: '2px solid #DEDEDE',
                              paddingLeft: '1rem',
                            }}
                          >
                            {description}
                          </p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
