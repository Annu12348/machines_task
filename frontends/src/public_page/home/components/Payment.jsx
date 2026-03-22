import React from 'react'
import { FaShieldHalved } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'

const Payment = () => {
  const cards = [
    {
      id: 'automation',
      variant: 'plain',
      title: 'AI-Powered Automation',
      description: [
        'Streamline repetitive work with intelligent workflows that adapt to your team.',
        'Reduce manual overhead and keep everyone aligned on priorities every day.',
        'Built for scale so you can grow without losing clarity or control.',
      ],
      features: [
        'Personalized AI chat',
        'Task and progress tracking',
        'Generative task suggestions',
      ],
      cta: 'Get Started for Free',
      ctaClass:
        'w-full rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-900 font-semibold py-3 px-4 text-sm transition-colors',
    },
    {
      id: 'secure',
      variant: 'shield',
      title: 'Secure & Reliable',
      description: [
        'Enterprise-grade security keeps your data protected at every layer.',
        'Uptime you can trust with monitoring, backups, and resilient infrastructure.',
        'Role-based access so admins and employees see only what they need.',
        'Compliance-friendly practices designed for modern distributed teams.',
      ],
      features: [
        'Assign tasks & collaborate',
        'Granular access controls',
        'Administration audit trail',
      ],
      cta: 'Get Started for Free',
      ctaClass:
        'w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 text-sm shadow-sm transition-colors',
    },
    {
      id: 'pro',
      variant: 'pro',
      title: 'Pro',
      price: '$29',
      pricePeriod: '/month',
      badge: 'Popular',
      headerSubtitle: 'Everything you need for serious task operations.',
      features: [
        'Full task management',
        'Automated tasks & workflows',
        'Priority support',
      ],
      cta: 'Start 14 Day Free Trial',
      ctaClass:
        'w-full rounded-lg border-2 border-blue-500 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 text-sm transition-colors',
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 md:py-20 px-4 sm:px-6">
      {/* faint corner accents */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-50/90 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-sky-50/80 blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="font-[Poppins] text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Take a Look Inside
          </h2>
          <p className="mt-2 text-base font-normal text-slate-600 md:text-lg">
            Powerful Dashboards for Admins and Employees.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {cards.map((card) => {
            if (card.variant === 'pro') {
              return (
                <article
                  key={card.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
                >
                  <div className="relative rounded-t-xl bg-linear-to-br from-blue-700 to-blue-800 px-5 pb-6 pt-6 text-white">
                    <span className="absolute right-4 top-4 rounded-md rounded-br-none bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-800 shadow-sm">
                      {card.badge}
                    </span>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/25">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="font-[Poppins] text-lg font-bold">{card.title}</h3>
                    </div>
                    <p className="mb-1 text-3xl font-bold tracking-tight md:text-4xl">
                      {card.price}
                      <span className="text-lg font-semibold opacity-90">
                        {card.pricePeriod}
                      </span>
                    </p>
                    <p className="text-xs font-normal text-blue-100/90">
                      {card.headerSubtitle}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                    <ul className="mb-6 flex flex-col gap-3">
                      {card.features.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                            <FaCheck className="h-2.5 w-2.5" aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button type="button" className={card.ctaClass}>
                      {card.cta}
                    </button>
                  </div>
                </article>
              )
            }

            return (
              <article
                key={card.id}
                className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm md:p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  {card.variant === 'shield' && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FaShieldHalved className="h-4 w-4" aria-hidden />
                    </span>
                  )}
                  <h3 className="font-[Poppins] text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <div className="mb-5 space-y-1.5 text-sm leading-relaxed text-slate-500">
                  {card.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <ul className="mb-6 flex flex-col gap-3">
                  {card.features.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                        <FaCheck className="h-2.5 w-2.5" aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button type="button" className={card.ctaClass}>
                    {card.cta}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Payment
