import React from 'react'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    id: 'free',
    name: 'Free Plan',
    price: '0',
    featured: false,
    features: ['Basic Features', 'AI Insights', 'Community Support'],
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '499',
    featured: true,
    features: ['All Free Features', 'Advanced AI Tools', 'Priority Support'],
  },
  {
    id: 'team',
    name: 'Team Plan',
    price: '999',
    featured: false,
    features: ['All Pro Features', 'Team Management', 'Enhanced Security'],
  },
]

const ChoosePlan = () => {
  return (
    <section
      className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 font-[Poppins]"
      aria-labelledby="choose-plan-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 md:mb-14 text-center">
          <h2
            id="choose-plan-heading"
            className="text-2xl font-bold tracking-tight text-[#0056b3] sm:text-3xl md:text-4xl"
          >
            Choose the Right Plan for Your Team
          </h2>
          <p className="mt-3 text-base font-normal text-[#6c757d] sm:text-lg">
            Flexible and affordable pricing for teams of all sizes.
          </p>
        </header>

        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-end md:justify-center md:gap-6 lg:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={[
                'flex w-full flex-1 flex-col rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow',
                plan.featured
                  ? 'order-first border-0 bg-[#0066cc] px-6 py-8 text-white md:order-0 md:min-h-[440px] md:px-7 md:py-10 md:shadow-[0_8px_32px_rgba(0,102,204,0.35)]'
                  : 'order-2 border border-gray-200/90 bg-white px-6 py-7 md:order-0 md:min-h-[360px]',
              ].join(' ')}
            >
              <h3
                className={
                  plan.featured
                    ? 'text-center text-lg font-bold text-white'
                    : 'text-center text-lg font-bold text-[#0056b3]'
                }
              >
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline justify-center gap-0.5">
                <span
                  className={
                    plan.featured
                      ? 'text-4xl font-bold tabular-nums text-white sm:text-5xl'
                      : 'text-4xl font-bold tabular-nums text-[#0066cc] sm:text-5xl'
                  }
                >
                  ₹{plan.price}
                </span>
                <span
                  className={
                    plan.featured
                      ? 'text-sm font-medium text-white/90'
                      : 'text-sm font-medium text-[#0066cc]/80'
                  }
                >
                  /mo
                </span>
              </div>

              <ul className="mx-auto mt-8 w-full max-w-[240px] space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-left">
                    <span
                      className="mt-0.5 flex shrink-0"
                      aria-hidden
                    >
                      <FaCheck
                        className={
                          plan.featured
                            ? 'h-4 w-4 text-lime-400'
                            : 'h-4 w-4 text-[#28a745]'
                        }
                      />
                    </span>
                    <span
                      className={
                        plan.featured
                          ? 'text-sm font-normal text-white'
                          : 'text-sm font-normal text-gray-800'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="/register"
                  className={
                    plan.featured
                      ? 'block w-full rounded-lg bg-white py-3 text-center text-sm font-semibold text-[#0066cc] shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0066cc]'
                      : 'block w-full rounded-lg bg-[#0066cc] py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0056b3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066cc] focus-visible:ring-offset-2'
                  }
                >
                  Get Started
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChoosePlan
