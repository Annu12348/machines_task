import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    id: '1',
    question: 'How does the AI assist in task management?',
    answer:
      'Our AI suggests priorities, summarizes progress, and flags risks so managers and teams spend less time on admin and more on delivery.',
  },
  {
    id: '2',
    question: 'Can employees upload files to tasks?',
    answer:
      'Yes. Team members can attach documents and images to tasks so context stays in one place.',
  },
  {
    id: '3',
    question: 'Is my data secure?',
    answer:
      'We use industry-standard encryption, access controls, and regular audits to protect your workspace data.',
  },
  {
    id: '4',
    question: 'Can I switch plans later?',
    answer:
      'You can upgrade or downgrade your plan anytime; changes apply on your next billing cycle.',
  },
]

const FaqCta = () => {
  const [openId, setOpenId] = useState(null)

  return (
    <>
      <section
        className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 font-[Poppins]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-center text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <ul className="mt-10 flex list-none flex-col gap-3 p-0 m-0 md:mt-12">
            {faqs.map((item) => {
              const isOpen = openId === item.id
              return (
                <li key={item.id} className="w-full">
                  <div
                    className="overflow-hidden rounded-lg border border-[#e2e8f0] bg-white transition-shadow"
                    style={{ boxShadow: isOpen ? '0 1px 2px rgba(15, 23, 42, 0.04)' : undefined }}
                  >
                    <button
                      type="button"
                      id={`faq-trigger-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-[1.125rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005bc5] focus-visible:ring-offset-2"
                    >
                      <span className="text-[0.95rem] font-semibold leading-snug text-[#334155] md:text-base">
                        {item.question}
                      </span>
                      <FaChevronDown
                        className={`h-4 w-4 shrink-0 text-[#64748b] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="border-t border-[#e2e8f0] px-5 pb-4 pt-3 text-sm font-normal leading-relaxed text-[#64748b] md:px-6 md:text-[0.95rem]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="w-full bg-[#f8fafc] py-14 md:py-20 px-4 sm:px-6 font-[Poppins]"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-[2rem] md:leading-tight"
          >
            Ready to Boost Your Team&apos;s Productivity with AI?
          </h2>
          <p className="mt-4 text-base font-normal text-[#64748b] md:text-lg">
            Start managing your team smarter today!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-[#005bc5] px-8 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(0,91,197,0.35)] transition-colors hover:bg-[#004a9f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005bc5] focus-visible:ring-offset-2"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqCta
