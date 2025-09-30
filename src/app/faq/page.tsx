'use client';

import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

const faqs = [
  { question: 'Supported Platform', answer: 'Currently supports macOS.' },
  { question: 'Supported macOS Version', answer: 'Supports macOS 14.6 and above.' },
  { question: 'Can I use it on a MacBook without a notch?', answer: 'Yes, you can!' },
  { question: 'Does it support external monitors?', answer: 'Yes, it does.' },
  { question: 'Where can I contact you?', answer: 'Please email us at contact@example.com.' },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  id,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="rounded-xl border border-secondary-alt bg-secondary shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-5 py-4 text-left text-lg font-semibold transition hover:bg-secondary-alt"
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
      >
        <span>{faq.question}</span>
        {isOpen ? <Remove className="h-5 w-5" /> : <Add className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div
          id={`faq-${id}`}
          className="px-5 pb-4 text-sm leading-relaxed text-textlight/80"
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-textlight">
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 md:flex-row">
        {/* Left: Title */}
        <div className="flex items-start justify-center md:w-1/3 md:justify-start">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">FAQ</h1>
        </div>

        {/* Right: FAQ List */}
        <div className="space-y-4 md:w-2/3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              id={String(i)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
