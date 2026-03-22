import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaViber,
} from 'react-icons/fa'

const headerRule = 'pb-2 mb-3 border-b border-sky-400/45'

const Footer = () => {
  return (
    <footer
      className="w-full bg-[#1e3a5f] font-[Poppins] text-sm font-normal text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Quick Links — bulleted */}
          <nav aria-labelledby="footer-quick">
            <h2 id="footer-quick" className={`text-base font-bold text-white ${headerRule}`}>
              Quick Links
            </h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {[
                { to: '/', label: 'Home' },
                { to: '/feature', label: 'Features' },
                { to: '/#choose-plan-heading', label: 'Pricing' },
                { to: 'mailto:info@example.com', label: 'Contact Us', external: true },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-white" aria-hidden />
                  {item.external ? (
                    <a href={item.to} className="text-white/95 transition-colors hover:text-white">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="text-white/95 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Company — no bullets */}
          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className={`text-base font-bold text-white ${headerRule}`}>
              Company
            </h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <Link to="/about" className="text-white/95 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/95 transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/95 transition-colors hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* Support — bulleted */}
          <nav aria-labelledby="footer-support">
            <h2 id="footer-support" className={`text-base font-bold text-white ${headerRule}`}>
              Support
            </h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {['Help Center', 'FAQs', 'Privacy Policy'].map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-white" aria-hidden />
                  <a href="#" className="text-white/95 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in Touch */}
          <div>
            <h2 className={`text-base font-bold text-white ${headerRule}`}>Get in Touch</h2>
            <a
              href="mailto:info@example.com"
              className="flex items-center gap-2.5 text-white/95 transition-colors hover:text-white"
            >
              <FaEnvelope className="h-4 w-4 shrink-0 text-white" aria-hidden />
              <span>info@example.com</span>
            </a>
            <div className="my-4 h-px w-full bg-sky-400/45" aria-hidden />
            <p className="mb-3 text-sm font-normal text-white/90">Follow Us</p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[#1877f2] text-white transition-opacity hover:opacity-90"
              >
                <FaFacebookF className="h-3 w-3" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[#1da1f2] text-white transition-opacity hover:opacity-90"
              >
                <FaTwitter className="h-3 w-3" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[#0a66c2] text-white transition-opacity hover:opacity-90"
              >
                <FaLinkedinIn className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Viber"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[#7360f2] text-white transition-opacity hover:opacity-90"
              >
                <FaViber className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-linear-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-opacity hover:opacity-90"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-sky-400/50" aria-hidden />
        <p className="mt-6 text-center text-sm font-normal text-white/85">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
