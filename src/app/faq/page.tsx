'use client';

import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

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
    <main className="min-h-screen bg-primary text-textlight px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* 왼쪽: 큰 타이틀 */}
        <div className="md:w-1/3 flex items-start justify-center md:justify-start">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            FAQ
          </h1>
        </div>

        {/* 오른쪽: 질문/답변 */}
        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-secondary-alt rounded-xl bg-secondary shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-semibold hover:bg-secondary-alt transition rounded-xl"
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <HiMinus className="w-5 h-5" />
                ) : (
                  <HiPlus className="w-5 h-5" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-textlight/80 leading-relaxed text-sm">
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
