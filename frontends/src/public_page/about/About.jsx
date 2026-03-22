import React from 'react'
import {
  FaUsersCog,
  FaHeart,
  FaCubes,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaCrosshairs,
} from 'react-icons/fa'
import PublicNavigation from '../../components/PublicNavigation'
import Footer from '../home/components/Footer'

const heroBg =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80'
const heroInset =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
const missionImg =
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80'
const storyImg =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80'

const team = [
  {
    name: 'Anil Sharma',
    role: 'CEO & Founder',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Chief Operating Officer',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Raj Verma',
    role: 'Lead Engineer',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Neha Gupta',
    role: 'Marketing Manager',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const SectionTitle = ({ children }) => (
  <div className="mb-12 flex items-center gap-4 px-4 sm:px-6">
    <div className="h-px flex-1 bg-gray-200" aria-hidden />
    <h2 className="whitespace-nowrap text-center text-2xl font-bold text-[#111827] font-[Poppins] md:text-3xl">
      {children}
    </h2>
    <div className="h-px flex-1 bg-gray-200" aria-hidden />
  </div>
)

const iconWrap =
  'flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#1e40af]/10 text-[#1e40af]'

const About = () => {
  return (
    <div className="min-h-screen w-full bg-white ">
      <PublicNavigation />

      {/* Hero */}
      <section className="relative min-h-[420px] w-full overflow-hidden md:min-h-[480px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center blur-md"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#1e3a8a]/55" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md font-[Poppins] md:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-xl text-lg font-normal leading-relaxed text-white/95 font-[Poppins]">
              Learn more about our mission, vision, and the team behind our success.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div
              className="h-[280px] w-full max-w-md rounded-lg bg-cover bg-center bg-no-repeat shadow-2xl ring-4 ring-white/20 sm:h-[320px] md:h-[340px]"
              style={{ backgroundImage: `url(${heroInset})` }}
              role="img"
              aria-label="Two professionals in business attire wearing safety helmets"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#111827] font-[Poppins] md:text-3xl">
              Our Mission
            </h2>
            <div className="mt-3 h-px max-w-[120px] bg-gray-200" aria-hidden />
            <p className="mt-6 text-base leading-relaxed font-[Poppins]">
              Empowering businesses with innovative solutions to achieve greater efficiency and
              growth.
            </p>
          </div>
          <div>
            <img
              src={missionImg}
              alt="Team reviewing data on a tablet in an industrial setting"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9fafb] py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Why Choose Us</SectionTitle>
          <div className="grid gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className={iconWrap}>
                <FaUsersCog className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#111827] font-[Poppins]">
                Expertise &amp; Experience
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-[Poppins]">
                Years of industry knowledge and expertise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className={iconWrap}>
                <FaHeart className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#111827] font-[Poppins]">
                Customer Focused
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-[Poppins]">
                Dedicated to client satisfaction and success.
              </p>
            </div>
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
              <div className={iconWrap}>
                <FaCubes className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#111827] font-[Poppins]">
                Cutting-Edge Technology
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-[Poppins]">
                Utilizing the latest tools and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div className="order-2 md:order-1">
            <img
              src={storyImg}
              alt="Team collaborating over a laptop"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#111827] font-[Poppins] md:text-3xl">
              Our Story
            </h2>
            <div className="mt-3 h-px max-w-[120px] bg-gray-200" aria-hidden />
            <p className="mt-6 text-base leading-relaxed font-[Poppins]">
              Founded in 2010, we have grown from a small startup to a leading provider of
              industrial solutions. Our journey is driven by a passion for excellence and a
              commitment to our clients&apos; success.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-[#f9fafb] py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Meet Our Team</SectionTitle>
          <div className="grid gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-100"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-[#111827] font-[Poppins]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#4b5563] font-[Poppins]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Our Values</SectionTitle>
          <div className="grid gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {[
              { label: 'Integrity', Icon: FaShieldAlt },
              { label: 'Innovation', Icon: FaLightbulb },
              { label: 'Collaboration', Icon: FaHandshake },
              { label: 'Excellence', Icon: FaCrosshairs },
            ].map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md ring-1 ring-gray-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#1e40af]/10 text-[#1e40af]">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="text-base font-semibold text-[#111827] font-[Poppins]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
