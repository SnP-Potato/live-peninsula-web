'use client';

import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

const faqs = [
  {
    question: 'Supported Platform',
    answer: 'Currently supports MacOS.',
  },
  {
    question: 'Supported macOS Version',
    answer: 'Supports macOS 14.6 and above.',
  },
  {
    question: 'Can I use it on a MacBook without a notch?',
    answer: 'Yes, you can!',
  },
  {
    question: 'Does it support external monitors?',
    answer: 'Yes, it does.',
  },
  {
    question: 'Where can I contact you?',
    answer: 'Please email us at contact@example.com.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-primary text-textlight min-h-screen px-6 py-16 pt-16">
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 md:flex-row">
        {/* 왼쪽: 큰 타이틀 */}
        <div className="flex items-start justify-center md:w-1/3 md:justify-start">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            FAQ
          </h1>
        </div>

        {/* 오른쪽: 질문/답변 */}
        <div className="space-y-4 md:w-2/3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-secondary-alt bg-secondary rounded-xl border shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="hover:bg-secondary-alt flex w-full items-center justify-between rounded-xl px-5 py-4 text-left text-lg font-semibold transition"
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <Add className="h-5 w-5" />
                ) : (
                  <Remove className="h-5 w-5" />
                )}
              </button>
              {openIndex === i && (
                <div className="text-textlight/80 px-5 pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
