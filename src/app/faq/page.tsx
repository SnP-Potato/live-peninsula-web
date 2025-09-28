'use client';

import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

const faqs = [
  {
    question: '이 앱은 어떻게 사용하나요?',
    answer: '앱을 다운로드하고 설치한 후, 로그인 없이 바로 사용할 수 있어요.',
  },
  {
    question: '다운로드는 어디서 하나요?',
    answer:
      '홈페이지 상단의 "다운로드" 버튼을 클릭하면 다운로드 페이지로 이동합니다.',
  },
  {
    question: '지원하는 플랫폼은 무엇인가요?',
    answer: '현재는 MacOS를 지원하고 있습니다.',
  },
  {
    question: '문의는 어디로 하나요?',
    answer: '문의는 contact@example.com 으로 메일 주세요.',
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
