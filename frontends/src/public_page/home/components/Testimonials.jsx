import React from 'react'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: '1',
    quote: 'This platform boosted our productivity significantly.',
    name: 'Rahul Sharma',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '2',
    quote: 'A must-have tool for any team',
    name: 'Priya Mehta',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: '3',
    quote: 'Intuitive and efficient. Highly recommend!',
    name: 'Anil Verma',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
]

const Testimonials = () => {
  return (
    <section
      className="w-full bg-[#f8fafc] py-14 md:py-20 px-4 sm:px-6 font-[Poppins]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="text-center text-2xl font-bold tracking-tight text-[#1a2b4b] sm:text-3xl md:text-4xl"
        >
          What Our Clients Say
        </h2>

        <div className="mt-10 flex flex-col items-stretch gap-8 md:mt-14 md:flex-row md:justify-center md:gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-1 flex-col items-center rounded-[10px] bg-white px-8 py-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_14px_rgba(15,23,42,0.06)] md:max-w-sm md:py-9"
            >
              <div
                className="flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1a2b4b] p-1 ring-2 ring-[#1a2b4b]/20"
                aria-hidden="true"
              >
                <img
                  src={t.image}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <blockquote className="mt-5 text-base font-normal leading-relaxed text-[#475569] md:text-[0.95rem]">
                {`"${t.quote}"`}
              </blockquote>
              <p className="mt-4 text-base font-semibold text-[#0f172a]">- {t.name}</p>
              <div
                className="mt-4 flex justify-center gap-0.5 text-[#facc15]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-5 w-5" aria-hidden />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
