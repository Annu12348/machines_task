import React from 'react'
import { FiSearch, FiBell, FiMoreVertical, FiMousePointer } from 'react-icons/fi'
import { FaHouse, FaListCheck, FaChartLine, FaClipboardList, FaCheck } from 'react-icons/fa6'
import { FaCheck as FaCheckSolid } from 'react-icons/fa'

/** Reference-matched tokens */
const NAVY = '#1a2b4b'
const ACTION_BLUE = '#1a73e8'
const ACTION_BLUE_DEEP = '#1557b0'
const MUTED = '#6b7280'
const BG_TOP = '#f0f7ff'

function WaveBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute -left-[8%] top-[8%] h-[min(55vh,480px)] w-[130%] text-sky-100/90"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200C240 100 480 280 720 180C960 80 1200 240 1440 140V400H0V200Z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M0 260C320 160 560 320 880 220C1120 140 1320 280 1440 240V400H0V260Z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
      <svg
        className="absolute -right-[6%] bottom-[-5%] h-[min(45vh,400px)] w-[115%] text-blue-50"
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
      >
        <path
          d="M0 80C200 180 440 40 720 120C1000 200 1240 60 1440 160V360H0V80Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}

/** Step 1: simplified male avatar — blue jacket, white shirt */
function AvatarStepIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#dbeafe" />
      <path
        d="M24 10c-3.5 0-6 2.8-6 6.2c0 2.1 1 4 2.5 5.1c-2.8 1-4.5 3.4-4.5 6.2h16c0-2.8-1.7-5.2-4.5-6.2c1.5-1.1 2.5-3 2.5-5.1C30 12.8 27.5 10 24 10z"
        fill="#c4a574"
      />
      <path d="M15 14c0-5 4-9 9-9s9 4 9 9c0 1.2-.2 2.3-.6 3.3c-1.5-2-3.9-3.3-6.4-3.3c-3.8 0-7 2.6-7.8 6.1C16.8 18.5 15 16.4 15 14z" fill="#1e293b" />
      <path d="M14 32c0-4 4.5-7 10-7s10 3 10 7v3H14v-3z" fill={ACTION_BLUE} />
      <path d="M18 30c2-1.5 4.5-2.5 6-2.5s4 .8 6 2.2L28 35H20l-2-5z" fill="#ffffff" />
    </svg>
  )
}

/** Step 3: bars + rising trend line */
function ChartStepIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
      <rect x="8" y="28" width="6" height="12" rx="1" fill={ACTION_BLUE} />
      <rect x="17" y="22" width="6" height="18" rx="1" fill={ACTION_BLUE_DEEP} />
      <rect x="26" y="26" width="6" height="14" rx="1" fill={ACTION_BLUE} opacity="0.85" />
      <rect x="35" y="18" width="6" height="22" rx="1" fill="#3b82f6" />
      <polyline
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="9,26 20,16 29,20 38,12"
      />
    </svg>
  )
}

const steps = [
  {
    title: '1. Sign Up & Login',
    description: 'Create your account and log in easily.',
    icon: <AvatarStepIcon />,
  },
  {
    title: '2. Assign Tasks',
    description: 'Assign tasks to your team with ease.',
    icon: (
      <div className="relative flex h-9 w-9 items-center justify-center">
        <FaClipboardList className="text-2xl" style={{ color: ACTION_BLUE }} aria-hidden />
        <span
          className="absolute -bottom-0.5 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full text-white shadow-md ring-2 ring-sky-100"
          style={{ backgroundColor: ACTION_BLUE_DEEP }}
          aria-hidden
        >
          <FaCheckSolid className="text-[9px]" />
        </span>
      </div>
    ),
  },
  {
    title: '3. Track & Analyze',
    description: 'Monitor progress and gain insights.',
    icon: <ChartStepIcon />,
  },
]

function DashboardMockup() {
  const pieGradient =
    'conic-gradient(#1a73e8 0% 28%, #0c4a6e 28% 48%, #f97316 48% 68%, #eab308 68% 100%)'

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,640px)] select-none" aria-hidden>
      <div
        className="relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_32px_64px_-12px_rgba(26,43,75,0.28)]"
        style={{ boxShadow: '0 28px 70px -15px rgba(26, 115, 232, 0.22), 0 0 0 1px rgba(15,23,42,0.04)' }}
      >
        <div className="flex min-h-[300px] md:min-h-[360px]">
          <aside
            className="flex w-[68px] shrink-0 flex-col items-center gap-5 py-5 text-white md:w-[76px]"
            style={{ background: `linear-gradient(180deg, ${ACTION_BLUE} 0%, ${ACTION_BLUE_DEEP} 100%)` }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-xs font-bold tracking-tight">
              TP
            </div>
            <FaHouse className="text-lg opacity-95" />
            <FaListCheck className="text-lg opacity-75" />
            <FaChartLine className="text-lg opacity-75" />
            <div className="mt-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <span className="text-xs opacity-80">•••</span>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col bg-[#eef2f7]">
            <header className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3 py-2.5 md:px-4">
              <span className="text-sm font-bold md:text-[15px]" style={{ color: NAVY }}>
                Dashboard
              </span>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  type="button"
                  tabIndex={-1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50"
                >
                  <FiSearch className="text-lg" />
                </button>
                <button
                  type="button"
                  tabIndex={-1}
                  className="relative flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50"
                >
                  <FiBell className="text-lg" />
                  <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-orange-500" />
                </button>
                <div
                  className="h-8 w-8 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200"
                  style={{
                    background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)',
                  }}
                />
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-2.5 p-2.5 md:gap-3 md:p-3">
              <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Quick stats
                  </p>
                  <div className="mt-2 flex gap-6">
                    <div>
                      <p className="text-2xl font-extrabold leading-none" style={{ color: NAVY }}>
                        22
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">Active</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold leading-none" style={{ color: NAVY }}>
                        355
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">Total</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full w-[68%] rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${ACTION_BLUE}, #38bdf8)`,
                      }}
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                  <p className="text-[10px] font-semibold text-slate-500">Task statistics</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div
                      className="h-[72px] w-[72px] shrink-0 rounded-full shadow-inner ring-4 ring-slate-50 md:h-[80px] md:w-[80px]"
                      style={{ background: pieGradient }}
                    />
                    <div className="min-w-0 flex-1 space-y-1.5 text-[9px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#1a73e8]" />
                        Done
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0c4a6e]" />
                        Progress
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-[10px] font-bold text-slate-600">Active status</span>
                  <span className="text-[9px] text-slate-400">Today</span>
                </div>
                <div className="space-y-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg bg-slate-50/80 px-2 py-1.5"
                    >
                      <div className="h-8 w-8 shrink-0 rounded-md bg-slate-200/90" />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="h-1.5 w-[55%] rounded bg-slate-300" />
                        <div className="h-1 w-[35%] rounded bg-slate-200" />
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                        Active
                      </span>
                      <FiMoreVertical className="shrink-0 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
                <p className="mb-1 text-[10px] font-semibold text-slate-500">Performance</p>
                <svg viewBox="0 0 280 72" className="h-14 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="workLineFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 52 L48 38 L88 44 L128 28 L168 36 L208 22 L248 30 L272 18 L272 68 L8 68 Z"
                    fill="url(#workLineFill)"
                  />
                  <polyline
                    fill="none"
                    stroke="#1a73e8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="8,52 48,38 88,44 128,28 168,36 208,22 248,30 272,18"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating: task list (bottom-left) */}
      <div className="absolute -bottom-2 left-0 z-10 w-[48%] max-w-[280px] rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-[0_16px_40px_-8px_rgba(26,43,75,0.35)] md:-bottom-3 md:p-3">
        <p className="text-[10px] font-bold" style={{ color: NAVY }}>
          Project tasks
        </p>
        <div className="mt-2 space-y-2">
          {[0.9, 0.75, 0.6].map((w, i) => (
            <div key={i} className="flex items-start gap-2">
              <FaCheck className="mt-0.5 shrink-0 text-emerald-500 text-xs" />
              <div className="min-w-0 flex-1">
                <div className="h-1.5 rounded bg-slate-200" style={{ width: `${w * 100}%` }} />
                <div className="mt-1 h-1 w-2/3 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating: status tags (bottom-right) */}
      <div className="absolute -bottom-1 right-0 z-10 w-[44%] max-w-[260px] rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-[0_16px_40px_-8px_rgba(26,43,75,0.35)] md:p-3">
        <p className="text-[10px] font-bold" style={{ color: NAVY }}>
          Team status
        </p>
        <ul className="mt-2 space-y-2">
          {['Design', 'Dev', 'QA'].map((label, i) => (
            <li
              key={label}
              className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2 py-1.5"
            >
              <span className="truncate text-[10px] font-medium text-slate-600">{label}</span>
              <span
                className="shrink-0 rounded-md px-2 py-0.5 text-[9px] font-semibold text-white"
                style={{
                  backgroundColor: i === 0 ? ACTION_BLUE : i === 1 ? '#0d9488' : '#ca8a04',
                }}
              >
                {i === 0 ? 'On track' : i === 1 ? 'Review' : 'Queued'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <section
      className="relative overflow-hidden py-16 font-[Poppins] md:py-24"
      style={{
        background: `linear-gradient(180deg, ${BG_TOP} 0%, #ffffff 45%, #f8fbff 100%)`,
      }}
      aria-labelledby="how-it-works-heading"
    >
      <WaveBackdrop />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2
            id="how-it-works-heading"
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            How It Works
          </h2>
          <p className="mt-2 text-base font-medium md:text-lg" style={{ color: MUTED }}>
            Get Started in Three Easy Steps
          </p>
        </header>

        <div className="mt-14 grid items-start gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="relative mx-auto w-full max-w-md lg:col-span-4 lg:mx-0 lg:max-w-none">
            <div
              className="absolute left-[31px] top-[48px] bottom-[48px] w-px bg-sky-200 md:left-[35px]"
              aria-hidden
            />
            <ol className="relative m-0 flex list-none flex-col gap-11 p-0 md:gap-14">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-5 md:gap-6">
                  <div
                    className="relative z-1 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full shadow-md ring-[5px] ring-white md:h-[70px] md:w-[70px]"
                    style={{
                      background: 'linear-gradient(180deg, #e0f2fe 0%, #dbeafe 100%)',
                      boxShadow: '0 6px 20px rgba(26, 115, 232, 0.15)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3
                      className="text-base font-bold leading-snug md:text-lg"
                      style={{ color: NAVY }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed md:text-[15px]" style={{ color: MUTED }}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[200px] lg:col-span-8">
            <div className="pb-16 pt-2 md:pb-20">
              <DashboardMockup />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center md:mt-6">
          <a
            href="/feature"
            className="inline-flex items-center gap-2.5 rounded-full border border-sky-100 bg-white px-8 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_rgba(26,115,232,0.35)] transition hover:shadow-[0_14px_44px_-8px_rgba(26,115,232,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8] focus-visible:ring-offset-2"
            style={{ color: NAVY }}
          >
            <FiMousePointer className="text-lg" style={{ color: ACTION_BLUE }} aria-hidden />
            View More Screens
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work
