import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaFileAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import PublicNavigation from '../../components/PublicNavigation'
import Footer from '../home/components/Footer'

/** Full mockup or hero asset in `public/contact-hero.png` — cropped from top for banner */
const heroBg = '/contact-hero.png'

const mapEmbedSrc =
  'https://www.google.com/maps?q=Nehru+Place+New+Delhi+India&output=embed'

const inputIconRow =
  'relative flex w-full items-center rounded-lg border border-gray-300 bg-white transition-colors focus-within:border-[#1D63D3]/50 focus-within:ring-2 focus-within:ring-[#1D63D3]/20'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen w-full bg-[#f3f4f6] font-[Poppins]">
      <PublicNavigation />

      {/* Banner — same asset as design; top-crop + blur + overlay if file is full-page mockup */}
      <section className="relative min-h-[300px] w-full overflow-hidden md:min-h-[380px] lg:min-h-[420px]">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover object-top blur-[3px]"
          decoding="async"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/68" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full min-h-[300px] max-w-6xl items-center px-4 py-12 sm:px-6 md:min-h-[380px] md:py-16 lg:min-h-[420px]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-[3.25rem]">
              Contact Us
            </h1>
            <p className="mt-3 text-base font-normal text-white/95 md:text-xl">
              Get in Touch with Us
            </p>
          </div>
        </div>
      </section>

      {/* Main: info + form */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Contact information */}
          <div className="flex flex-col rounded-2xl bg-[#3E4B5B] p-8 text-white shadow-lg md:p-10">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Contact Information
            </h2>
            <ul className="mt-8 flex flex-col gap-0">
              <li className="border-b border-white/15 pb-8">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden />
                  <div>
                    <p className="font-bold text-white">Our Office:</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/90 md:text-base">
                      123 Industrial Park, New Delhi, India
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-b border-white/15 py-8">
                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden />
                  <div>
                    <p className="font-bold text-white">Email Us:</p>
                    <a
                      href="mailto:info@yourcompany.com"
                      className="mt-1.5 block text-sm text-white/90 underline-offset-2 hover:underline md:text-base"
                    >
                      info@yourcompany.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="pt-8">
                <div className="flex gap-4">
                  <FaPhone className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden />
                  <div>
                    <p className="font-bold text-white">Call Us:</p>
                    <a
                      href="tel:+919876543210"
                      className="mt-1.5 block text-sm text-white/90 underline-offset-2 hover:underline md:text-base"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form card */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-10">
            <h2 className="text-xl font-bold text-[#111827] md:text-2xl">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Have any questions or need assistance? Send us a message.
            </p>
            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className={inputIconRow}>
                  <FaUser
                    className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-400"
                    aria-hidden
                  />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border-0 bg-transparent py-3.5 pl-11 pr-4 text-[#111827] placeholder:text-gray-400 focus:outline-none"
                    autoComplete="name"
                  />
                </div>
                <div className={inputIconRow}>
                  <FaEnvelope
                    className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-400"
                    aria-hidden
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full rounded-lg border-0 bg-transparent py-3.5 pl-11 pr-4 text-[#111827] placeholder:text-gray-400 focus:outline-none"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className={inputIconRow}>
                <FaFileAlt
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-lg border-0 bg-transparent py-3.5 pl-11 pr-4 text-[#111827] placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3.5 text-[#111827] placeholder:text-gray-400 focus:border-[#1D63D3]/50 focus:outline-none focus:ring-2 focus:ring-[#1D63D3]/20"
              />
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#1D63D3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1857bd] focus:outline-none focus:ring-2 focus:ring-[#1D63D3] focus:ring-offset-2 md:text-base"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 grid grid-cols-1 gap-0 rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_24px_rgb(0,0,0,0.06)] md:grid-cols-3 md:gap-0 md:p-0">
          <div className="flex flex-col justify-center border-b border-gray-200 p-8 md:border-b-0 md:border-r md:p-10">
            <div className="flex items-start gap-3">
              <FaClock className="mt-0.5 h-5 w-5 shrink-0 text-[#3E4B5B]" aria-hidden />
              <div>
                <p className="font-bold text-[#111827]">Working Hours:</p>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-b border-gray-200 p-8 text-center md:border-b-0 md:border-r md:p-10">
            <p className="font-bold text-[#111827]">Follow Us:</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition hover:opacity-90"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:opacity-90"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a3a3a] text-white transition hover:opacity-90"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white transition hover:opacity-90"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="min-h-[220px] overflow-hidden bg-gray-100 p-4 md:min-h-[240px] md:p-5">
            <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg border border-gray-200 md:min-h-[220px]">
              <iframe
                title="Our office location"
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Callout-style tooltip toward map pin */}
              <div className="pointer-events-none absolute bottom-[28%] left-1/2 z-10 max-w-[min(100%,220px)] -translate-x-1/2">
                <div className="relative rounded-md bg-white px-3 py-2 text-center text-[11px] font-semibold leading-snug text-[#111827] shadow-lg md:text-xs">
                  123 Industrial Park, New Delhi, India
                  <span
                    className="absolute left-1/2 top-full -translate-x-1/2 border-[7px] border-transparent border-t-white drop-shadow-sm"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
