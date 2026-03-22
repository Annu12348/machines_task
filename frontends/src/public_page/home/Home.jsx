import React from 'react'
import PublicNavigation from '../../components/PublicNavigation'
import KeyFeatureCard from './components/KeyFeatureCard'
import Work from './components/Work'
import Payment from './components/Payment'
import ChoosePlan from './components/ChoosePlan'
import Testimonials from './components/Testimonials'
import FaqCta from './components/FaqCta'
import Footer from './components/Footer'

const Home = () => {
  
  return (
    <div className="w-full min-h-screen bg-neutral-100 text-gray-900 text-2xl font-semibold">
      <PublicNavigation />
      <div className="w-full flex-1 px-0 bg-gradient-to-b from-blue-50 to-amber-100 min-h-[calc(100vh-56px)]">
        <div className="relative w-full h-[70vh] max-h-[600px] flex items-center justify-center overflow-hidden">
          <img
            src="/hometop.webp"
            alt="Industrial Teamwork Illustration"
            className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 select-none pointer-events-none"
            loading="eager"
            decoding="async"
            style={{ minHeight: 340, filter: 'brightness(0.8)' }}
            draggable={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-800/60 via-transparent to-amber-300/50 z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6">
            <h1 className="text-4xl font-[Poppins] md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight text-center">
              AI-Powered Employee <span className="hidden md:inline">Task Management</span>
              <span className="block md:hidden">
                <br />
                <span className="text-blue-200">Task Management</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl font-[Poppins] text-white/90 font-normal max-w-2xl mt-5 mb-7 text-center drop-shadow">
              Experience professional-grade task management with{' '}
              <span className="font-bold text-blue-300">TaskPro</span>. AI developed to
              meet industrial standards, our platform streamlines workflows and provides actionable, reliable AI-driven insights for your team.
            </p>
            <nav aria-label="Homepage calls to action ">
              <ul className="flex flex-col md:flex-row gap-4 mt-2 justify-center items-center list-none p-0 m-0">
                <li>
                  <a
                    href="/register"
                    className="bg-blue-600 text-sm hover:bg-blue-700 font-[Poppins] text-white font-semibold rounded px-6 py-3 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="/feature"
                    className="bg-white/90 border text-sm font-[Poppins] border-blue-600 hover:bg-blue-50 text-blue-800 font-semibold rounded px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    See Features
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='p-3 w-full mt-6 bg-zinc-100 '>
          <KeyFeatureCard  />
        </div>
        <div className=' w-full '>
          <Work />
        </div>
        <div className=' w-full '>
          <Payment />
        </div>
        <div className=' w-full '>
          <ChoosePlan />
        </div>
        <div className="w-full">
          <Testimonials />
        </div>
        <div className="w-full">
          <FaqCta />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
