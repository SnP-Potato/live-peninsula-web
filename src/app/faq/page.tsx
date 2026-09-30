'use client';

import { useState } from 'react';
import { Add } from '@mui/icons-material';

const faqs = [
  { question: 'Supported Platform', answer: 'Currently supports macOS.' },
  { question: 'Supported macOS Version', answer: 'Supports macOS 14.6 and above.' },
  { question: 'Can I use it on a MacBook without a notch?', answer: 'Yes, you can!' },
  { question: 'Does it support external monitors?', answer: 'Yes, it does.' },
  { question: 'Where can I contact you?', answer: 'Please email us at hoyeonpark0819@gmail.com.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-canvas text-label">
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-32 sm:pt-48">
        <h1
          className="type-display rise text-center"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          FAQ
        </h1>

        <ul
          className="rise mt-16 divide-y divide-hairline border-y border-hairline sm:mt-20"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={faq.question}>
                <h2>
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => toggle(i)}
                    className="-mx-4 flex w-[calc(100%+2rem)] items-center justify-between gap-6 rounded-2xl px-4 py-6 text-left text-[19px] font-semibold tracking-[-0.015em] transition-colors duration-200 hover:bg-white/[0.04] active:bg-white/[0.08] sm:text-[21px]"
                  >
                    <span>{faq.question}</span>
                    <Add
                      aria-hidden="true"
                      className={`shrink-0 text-label-secondary transition-transform duration-500 ease-(--spring) motion-reduce:transition-none ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </h2>

                {/* grid-rows 0fr → 1fr animates to the content's own height,
                    and retargets from wherever it is if toggled mid-flight. */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-(--spring) motion-reduce:duration-200 motion-reduce:ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-[17px] leading-relaxed text-label-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
