import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBell,
  FaChartBar,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaClipboardCheck,
  FaClipboardList,
  FaCloud,
  FaCommentDots,
  FaExclamationTriangle,
  FaFolder,
  FaKey,
  FaLink,
  FaLock,
  FaPlayCircle,
  FaPlus,
  FaRobot,
  FaBullhorn,
  FaShieldAlt,
  FaSortAmountDown,
  FaStar,
  FaMagic,
  FaTasks,
  FaThLarge,
  FaUserCircle,
  FaUserPlus,
  FaUsers,
  FaCalendarAlt,
  FaCog,
} from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { IoChatbubblesOutline } from 'react-icons/io5'
import PublicNavigation from '../../components/PublicNavigation'
import Footer from '../home/components/Footer'

const SmarterUnderline = () => (
  <svg
    className="pointer-events-none absolute -bottom-1 left-1/2 h-3 w-[calc(100%+0.35em)] -translate-x-1/2 overflow-visible sm:h-3.5"
    viewBox="0 0 140 14"
    aria-hidden
  >
    <path
      d="M4 10.5C28 4 52 12 70 8.5C88 5 108 11 136 7"
      fill="none"
      stroke="#60a5fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
)

const coreFeatures = [
  {
    title: 'Employee',
    desc: 'Add, edit and manage your entire team across departments.',
    Icon: FaUsers,
    iconBg: 'bg-blue-500',
  },
  {
    title: 'Task Management',
    desc: 'Create tasks, set priorities, deadlines and track progress.',
    Icon: FaClipboardCheck,
    iconBg: 'bg-emerald-500',
  },
  {
    title: 'Role-Based Access',
    desc: 'Secure admin, manager & employee roles with restricted permissions.',
    Icon: FaShieldAlt,
    iconBg: 'bg-violet-500',
  },
  {
    title: 'Reports & Analytics',
    desc: 'Get detailed insights with periodic productivity reports.',
    Icon: FaChartBar,
    iconBg: 'bg-orange-500',
  },
  {
    title: 'Smart Notifications',
    desc: 'Real-time alerts for tasks, deadlines & updates.',
    Icon: FaBell,
    iconBg: 'bg-red-500',
  },
  {
    title: 'File Attachments',
    desc: 'Upload and share files with tasks and comments.',
    Icon: FaFolder,
    iconBg: 'bg-purple-500',
  },
  {
    title: 'Comments & Feedback',
    desc: 'Discuss tasks with comments.',
    Icon: FaCommentDots,
    iconBg: 'bg-teal-500',
  },
  {
    title: 'Secure Authentication',
    desc: 'JWT + Google Login + Password Recovery.',
    Icon: FaLock,
    iconBg: 'bg-blue-600',
  },
]

const aiFeatures = [
  {
    title: 'AI Task Summary',
    desc: 'Get instant AI-generated summaries of lengthy tasks.',
    Icon: HiDocumentText,
    iconBg: 'bg-blue-500',
    tag: '🤖 GPT Powered',
    tagClass: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'AI Productivity Insights',
    desc: 'Smart analysis of your daily & weekly performance.',
    Icon: FaMagic,
    iconBg: 'bg-orange-500',
    tag: '📊 Smart Analysis',
    tagClass: 'bg-orange-100 text-orange-800',
  },
  {
    title: 'AI Performance Reports',
    desc: 'Detailed AI reports with improvement suggestions.',
    Icon: FaClipboardList,
    iconBg: 'bg-violet-500',
    tag: '📉 Data Driven',
    tagClass: 'bg-violet-100 text-violet-800',
  },
  {
    title: 'AI Task Prioritization',
    desc: 'AI suggests which tasks to do first.',
    Icon: FaSortAmountDown,
    iconBg: 'bg-emerald-500',
    tag: '✅ Smart Priority',
    tagClass: 'bg-emerald-100 text-emerald-800',
  },
  {
    title: 'Deadline Risk Alerts',
    desc: 'Get warned about risky deadlines.',
    Icon: FaExclamationTriangle,
    iconBg: 'bg-red-500',
    tag: '⚠️ Risk Detection',
    tagClass: 'bg-red-100 text-red-800',
  },
  {
    title: 'AI Chat Assistant',
    desc: 'Ask anything about your work & tasks.',
    Icon: IoChatbubblesOutline,
    iconBg: 'bg-purple-500',
    tag: '💬 ChatGPT AI',
    tagClass: 'bg-purple-100 text-purple-800',
  },
]

const faqItems = [
  {
    q: 'Is my company data secure?',
    a: 'Yes. We use AES-256 encryption at rest and in transit, with enterprise-grade access controls and compliance certifications.',
  },
  {
    q: 'How does AI task prioritization work?',
    a: 'Our AI analyzes deadlines, dependencies, and workload to suggest the order that keeps your team on track.',
  },
  {
    q: 'Can I set custom roles and permissions?',
    a: 'Absolutely. Admins can define granular role-based access for managers and employees.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'Start a 14-day free trial with full features—no credit card required.',
  },
  {
    q: 'What integrations do you support?',
    a: 'We support popular tools for calendar, chat, and SSO; more integrations ship regularly.',
  },
  {
    q: 'Do you have a mobile app?',
    a: 'Yes. iOS and Android apps let your team manage tasks on the go.',
  },
]

/** Green shield + key — matches reference artwork */
const RoleShieldKeyIcon = ({ className }) => (
  <span className={`relative inline-flex ${className ?? ''}`} aria-hidden>
    <FaShieldAlt className="h-7 w-7" />
    <FaKey className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 drop-shadow-sm" />
  </span>
)

const complianceItems = [
  'GDPR Compliant',
  'SOC 2 Type II',
  'ISO 27001 Certified',
  'Regular Backups',
]

const Feature = () => {
  const [faqOpen, setFaqOpen] = useState(null)

  return (
    <div className="min-h-screen w-full bg-white font-['Poppins'] text-slate-900">
      <PublicNavigation />

      <main>
        {/* Hero */}
        <section className="bg-white px-4 pb-16 pt-12 sm:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-blue-900">
              ⚡ Powerful Features
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.65rem] md:leading-[1.15]">
              Everything You Need to Manage Teams{' '}
              <span className="relative inline-block text-[#007bff]">
                Smarter
                <SmarterUnderline />
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal text-gray-500 sm:text-lg">
              Explore the powerful features that make our AI-powered Employee Management System the
              perfect choice for modern teams.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#007bff] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0066dd] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Start Free Trial
                <FaArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <FaPlayCircle className="h-4 w-4 text-gray-600" aria-hidden />
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="bg-white px-4 pb-20 pt-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Core Features</h2>
              <p className="mx-auto mt-3 max-w-xl text-base font-normal text-gray-500">
                Everything you need to manage your workforce efficiently
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreFeatures.map(({ title, desc, Icon, iconBg }) => (
                <article
                  key={title}
                  className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white ${iconBg}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-gray-500">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered */}
        <section className="bg-[#f8f9ff] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-900">
                ✨ Powered by Artificial Intelligence
              </div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                AI-Powered Capabilities
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base font-normal text-gray-500">
                Next-generation AI features to boost productivity
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiFeatures.map(({ title, desc, Icon, iconBg, tag, tagClass }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white ${iconBg}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm font-normal leading-relaxed text-gray-500">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-start">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${tagClass}`}
                    >
                      {tag}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <article className="mt-6 flex flex-col items-stretch justify-between gap-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex flex-1 items-start gap-4 sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
                  <FaChartLine className="h-6 w-6" aria-hidden />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-slate-900">AI Work Improvement</h3>
                  <p className="mt-1 text-sm font-normal text-gray-500">
                    Personal suggestions to improve efficiency.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 justify-start sm:justify-end">
                <span className="inline-flex rounded-full bg-[#007bff] px-4 py-2 text-xs font-semibold text-white sm:text-sm">
                  ⭐ Continuous Learning
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* See It In Action — dashboard mockup */}
        <section className="bg-[#f4f6f9] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-[#0A192F] sm:text-3xl">See It In Action</h2>
              <p className="mx-auto mt-3 max-w-xl text-base font-normal text-gray-500">
                Beautiful and intuitive dashboard interface
              </p>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_40px_rgba(10,25,47,0.12)] ring-1 ring-slate-200/80">
              <div className="flex min-h-[520px] flex-col lg:min-h-0 lg:flex-row">
                {/* Sidebar */}
                <aside className="flex w-full shrink-0 flex-col bg-[#0A192F] px-4 py-6 lg:w-[26%] lg:max-w-[280px]">
                  <div className="mb-8 flex items-center gap-2.5 px-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0052CC] text-white">
                      <FaLink className="h-4 w-4 rotate-[-35deg]" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold tracking-tight text-white">
                      WorkForce AI
                    </span>
                  </div>
                  <nav className="flex flex-col gap-1 text-sm">
                    <span className="flex items-center gap-3 rounded-lg bg-[#0052CC] px-3 py-2.5 font-medium text-white">
                      <FaThLarge className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                      Dashboard
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaTasks className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      My Tasks
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaFolder className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      Projects
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaChartLine className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      Analytics
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaCalendarAlt className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      Calendar
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaRobot className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      AI Assistant
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaUserCircle className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      Profile
                    </span>
                    <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                      <FaCog className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                      Settings
                    </span>
                  </nav>
                </aside>

                {/* Main dashboard */}
                <div className="min-w-0 flex-1 bg-[#f8fafc] p-4 sm:p-6">
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A192F]">Dashboard</h3>
                      <p className="text-sm text-gray-500">Welcome back, John Doe!</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A192F] shadow-sm ring-1 ring-slate-200"
                        aria-label="Notifications"
                      >
                        <FaBell className="h-4 w-4 text-gray-600" aria-hidden />
                      </button>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A192F] text-xs font-semibold text-white"
                        aria-hidden
                      >
                        JD
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <div className="rounded-[10px] bg-[#0052CC] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm font-medium text-white/90">Total Tasks</p>
                    </div>
                    <div className="rounded-[10px] bg-[#FFC107] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm font-medium text-white/95">Pending</p>
                    </div>
                    <div className="rounded-[10px] bg-[#28A745] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm font-medium text-white/90">Completed</p>
                    </div>
                    <div className="rounded-[10px] bg-[#DC3545] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm font-medium text-white/90">Overdue</p>
                    </div>
                  </div>

                  <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Line chart */}
                    <div className="rounded-[10px] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
                      <h4 className="mb-4 text-sm font-bold text-[#0A192F]">Tasks This Week</h4>
                      <div className="relative">
                        <svg
                          className="h-[200px] w-full"
                          viewBox="0 0 400 200"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden
                        >
                          {/* grid */}
                          {[0, 1, 2, 3, 4].map((i) => (
                            <line
                              key={`h-${i}`}
                              x1="48"
                              y1={40 + i * 32}
                              x2="380"
                              y2={40 + i * 32}
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                          ))}
                          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                            <line
                              key={`v-${i}`}
                              x1={48 + i * 48}
                              y1="40"
                              x2={48 + i * 48}
                              y2="168"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                          ))}
                          {/* Y labels */}
                          {['40', '30', '20', '10', '0'].map((lab, i) => (
                            <text
                              key={lab}
                              x="8"
                              y={44 + i * 32}
                              className="fill-gray-400 text-[10px]"
                              fontSize="10"
                            >
                              {lab}
                            </text>
                          ))}
                          {/* X labels */}
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                            <text
                              key={d}
                              x={48 + i * 48 + 24}
                              y="190"
                              textAnchor="middle"
                              className="fill-gray-500 text-[10px]"
                              fontSize="10"
                            >
                              {d}
                            </text>
                          ))}
                          {/* line */}
                          <polyline
                            fill="none"
                            stroke="#0052CC"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="72,148 120,130 168,120 216,100 264,88 312,72 360,56"
                          />
                          {/* Thu point */}
                          <circle cx="216" cy="100" r="4" fill="#0052CC" />
                          {/* Tooltip */}
                          <rect x="178" y="52" width="76" height="28" rx="4" fill="#111827" />
                          <text x="216" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                            8 Tasks
                          </text>
                        </svg>
                      </div>
                    </div>

                    {/* Donut */}
                    <div className="rounded-[10px] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
                      <h4 className="mb-4 text-sm font-bold text-[#0A192F]">Productivity Score</h4>
                      <div className="flex flex-col items-center justify-center py-2">
                        <div className="relative h-44 w-44">
                          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
                            {/* r=38 → C ≈ 239; 87% arc + teal accent ring */}
                            <circle
                              cx="50"
                              cy="50"
                              r="38"
                              fill="none"
                              stroke="#e0f2fe"
                              strokeWidth="11"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="38"
                              fill="none"
                              stroke="#14b8a6"
                              strokeWidth="11"
                              strokeDasharray="48 239"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="38"
                              fill="none"
                              stroke="#0052CC"
                              strokeWidth="11"
                              strokeDasharray="160 239"
                              strokeDashoffset={-48}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold text-[#0A192F]">87%</span>
                          </div>
                        </div>
                        <p className="mt-2 text-base font-semibold text-[#28A745]">Excellent</p>
                        <p className="text-sm text-[#28A745]/90">+12% from last week</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* AI Suggestion */}
                    <div className="flex min-h-[200px] flex-col rounded-[10px] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0052CC]/10 text-[#0052CC]">
                          <FaRobot className="h-4 w-4" aria-hidden />
                        </span>
                        <h4 className="text-sm font-bold text-[#0A192F]">AI Suggestion</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Focus on completing the &apos;API Integration&apos; task first - has priority
                        &amp; due soon.
                      </p>
                      <span className="mt-3 inline-flex w-fit rounded-full bg-[#0052CC] px-3 py-1 text-xs font-semibold text-white">
                        Pri: High
                      </span>
                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          className="rounded-lg bg-[#0052CC] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0047b3]"
                        >
                          View Task
                        </button>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="rounded-[10px] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
                      <h4 className="mb-4 text-sm font-bold text-[#0A192F]">Recent Activity</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#28A745]"
                            aria-hidden
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[#0A192F]">
                              Task completed - Design Login Page
                            </p>
                            <p className="text-xs text-gray-500">3 mins ago</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FFC107]"
                            aria-hidden
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[#0A192F]">
                              New task assigned - Database Setup
                            </p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0052CC]"
                            aria-hidden
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[#0A192F]">
                              Comment added on Mock Review
                            </p>
                            <p className="text-xs text-gray-500">5 hours ago</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Companies */}
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-xl font-semibold text-[#0A192F] sm:text-2xl">
              Trusted by Companies Worldwide
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:justify-between lg:gap-8">
              {[
                {
                  name: 'TechCorp',
                  icon: (
                    <svg className="h-8 w-8 text-gray-400" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                      <path d="M16 2L4 9v14l12 7 12-7V9L16 2zm0 3.2l7.5 4.3v8.5L16 22.3l-7.5-4.3v-8.5L16 5.2z" />
                    </svg>
                  ),
                },
                {
                  name: 'StartupXYZ',
                  icon: <FaShieldAlt className="h-8 w-8 text-gray-400" aria-hidden />,
                },
                {
                  name: 'InnovateLab',
                  icon: <FaStar className="h-8 w-8 text-gray-400" aria-hidden />,
                },
                {
                  name: 'DigitalFlow',
                  icon: (
                    <svg
                      className="h-8 w-8 text-gray-400"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      aria-hidden
                    >
                      <circle cx="7" cy="16" r="3.5" />
                      <circle cx="16" cy="16" r="3.5" />
                      <circle cx="25" cy="16" r="3.5" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        d="M10.5 16h5M18.5 16h5"
                      />
                    </svg>
                  ),
                },
                {
                  name: 'CloudSoft',
                  icon: <FaCloud className="h-8 w-8 text-gray-400" aria-hidden />,
                },
              ].map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 text-center text-gray-500"
                >
                  {icon}
                  <span className="text-sm font-medium text-gray-500">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KPI bar */}
        <section className="bg-white px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0A192F] px-6 py-10 shadow-lg sm:px-10 sm:py-12">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">
                {[
                  { value: '10K+', label: 'Active Users' },
                  { value: '500+', label: 'Companies' },
                  { value: '50K+', label: 'Tasks Daily' },
                  { value: '99.9%', label: 'Uptime' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center text-white">
                    <p className="text-2xl font-bold tracking-tight sm:text-3xl">{value}</p>
                    <p className="mt-1 text-sm font-medium text-white/85">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Security & Authentication — matches reference (#F9FAFB, exact palette) */}
        <section className="bg-[#F9FAFB] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Advanced Security &amp; Authentication
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base font-normal text-gray-500">
                Enterprise-grade security to protect your data.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Data Encryption',
                  subtitle: 'AES-256 bits at rest & in transit.',
                  iconWrap: 'bg-[#2563EB]',
                  node: <FaShieldAlt className="h-7 w-7" aria-hidden />,
                },
                {
                  title: 'Role-Based Control',
                  subtitle: 'Granular permissions system.',
                  iconWrap: 'bg-[#10B981]',
                  node: <RoleShieldKeyIcon />,
                },
                {
                  title: 'Two-Factor Auth',
                  subtitle: 'Optional 2FA for all users.',
                  iconWrap: 'bg-[#8B5CF6]',
                  node: <FaLock className="h-7 w-7" aria-hidden />,
                },
              ].map(({ title, subtitle, iconWrap, node }) => (
                <article
                  key={title}
                  className="rounded-xl border border-slate-100/80 bg-white p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
                >
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-white ${iconWrap}`}
                  >
                    {node}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-2 text-sm font-normal text-gray-500">{subtitle}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-sky-100/80 bg-[#EFF6FF] px-4 py-5 sm:px-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
                {complianceItems.map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <FaCheck className="h-4 w-4 shrink-0 text-[#10B981]" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works — reference: colored icons, copy, light blue arrows */}
        <section className="bg-[#F9FAFB] px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">How It Works</h2>
              <p className="mx-auto mt-3 max-w-xl text-base font-normal text-gray-500">
                Get started in 3 simple steps.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-start md:justify-center md:gap-0">
              {[
                {
                  n: 1,
                  circle: 'bg-[#2563EB]',
                  title: 'Create Account',
                  desc: 'Sign up and invite your team.',
                  icon: <FaUserPlus className="h-9 w-9 text-[#2563EB]" aria-hidden />,
                },
                {
                  n: 2,
                  circle: 'bg-[#10B981]',
                  title: 'Add Your Team',
                  desc: 'Import or add people manually.',
                  icon: <FaClipboardList className="h-9 w-9 text-[#10B981]" aria-hidden />,
                },
                {
                  n: 3,
                  circle: 'bg-[#F59E0B]',
                  title: 'Start Managing',
                  desc: 'Track tasks and boost productivity.',
                  icon: <FaChartLine className="h-9 w-9 text-[#F59E0B]" aria-hidden />,
                },
              ].map((step, idx) => (
                <React.Fragment key={step.n}>
                  <div className="flex flex-1 flex-col items-center rounded-xl border border-slate-100/80 bg-white px-6 py-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.05)] md:max-w-[240px]">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-md ${step.circle}`}
                    >
                      {step.n}
                    </div>
                    <div className="mb-4 flex h-[52px] items-center justify-center">{step.icon}</div>
                    <p className="text-base font-bold text-[#0F172A]">{step.title}</p>
                    <p className="mt-1 text-sm font-normal text-gray-500">{step.desc}</p>
                  </div>
                  {idx < 2 && (
                    <div
                      className="hidden shrink-0 items-center justify-center self-center pt-10 md:flex md:w-10 lg:w-14"
                      aria-hidden
                    >
                      <FaArrowRight className="h-5 w-5 text-[#93C5FD]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Overview — reference: Announcements, 4-week Completed vs Pending, ⭐ insight */}
        <section className="bg-white px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80">
              <div className="flex min-h-[480px] flex-col lg:min-h-0 lg:flex-row">
                <aside className="flex w-full shrink-0 flex-col bg-[#0F172A] px-4 py-6 lg:w-[240px] lg:max-w-[260px]">
                  <div className="mb-8 flex items-center gap-2 px-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB] text-white">
                      <FaLink className="h-4 w-4 rotate-[-35deg]" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold tracking-tight text-white">Workforce AI</span>
                  </div>
                  <nav className="flex flex-col gap-1 text-sm">
                    <span className="flex items-center gap-3 rounded-lg bg-[#2563EB] px-3 py-2.5 font-medium text-white shadow-sm">
                      <FaThLarge className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                      Dashboard
                    </span>
                    {[
                      { label: 'Tasks', Icon: FaTasks },
                      { label: 'Employees', Icon: FaUsers },
                      { label: 'Reports', Icon: FaChartBar },
                      { label: 'Announcements', Icon: FaBullhorn },
                      { label: 'Settings', Icon: FaCog },
                    ].map(({ label, Icon }) => (
                      <span
                        key={label}
                        className="flex cursor-default items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white/75 hover:bg-white/5"
                      >
                        <Icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                        {label}
                      </span>
                    ))}
                  </nav>
                </aside>
                <div className="min-w-0 flex-1 bg-[#F9FAFB] p-4 sm:p-6">
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold text-[#0F172A]">Analytics Overview</h3>
                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      This Month
                      <FaChevronDown className="h-3.5 w-3.5 text-slate-400" aria-hidden />
                    </button>
                  </div>
                  <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <div className="rounded-xl bg-[#2563EB] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold leading-tight">142</p>
                      <p className="mt-1 text-sm font-medium text-white/90">Tasks Completed</p>
                    </div>
                    <div className="rounded-xl bg-[#10B981] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold leading-tight">89%</p>
                      <p className="mt-1 text-sm font-medium text-white/90">Avg. Progress</p>
                    </div>
                    <div className="rounded-xl bg-[#F59E0B] px-4 py-4 text-white shadow-sm">
                      <p className="text-2xl font-bold leading-tight">24</p>
                      <p className="mt-1 text-sm font-medium text-white/90">Active Members</p>
                    </div>
                    <div className="rounded-xl bg-[#8B5CF6] px-4 py-4 text-white shadow-sm">
                      <p className="flex items-center gap-1.5 text-2xl font-bold leading-tight">
                        4.8
                        <FaStar className="h-5 w-5 text-amber-200" aria-hidden />
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/90">Team Rating</p>
                    </div>
                  </div>
                  <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                      <h4 className="mb-3 text-sm font-bold text-[#0F172A]">Tasks Overview</h4>
                      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-sm bg-[#2563EB]" aria-hidden />
                          Completed
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-sm bg-[#93C5FD]" aria-hidden />
                          Pending
                        </span>
                      </div>
                      <svg className="h-[200px] w-full" viewBox="0 0 380 200" aria-hidden>
                        <text x="8" y="24" fill="#94a3b8" fontSize="10">
                          100
                        </text>
                        <text x="8" y="64" fill="#94a3b8" fontSize="10">
                          50
                        </text>
                        <text x="8" y="104" fill="#94a3b8" fontSize="10">
                          25
                        </text>
                        <text x="8" y="144" fill="#94a3b8" fontSize="10">
                          0
                        </text>
                        {[0, 1, 2, 3].map((i) => {
                          const baseX = 48 + i * 78
                          const pendingH = [32, 44, 28, 36][i]
                          const doneH = [58, 72, 64, 80][i]
                          const barW = 14
                          const gap = 6
                          const y0 = 152
                          return (
                            <g key={i}>
                              <rect
                                x={baseX}
                                y={y0 - pendingH}
                                width={barW}
                                height={pendingH}
                                rx="3"
                                fill="#93C5FD"
                              />
                              <rect
                                x={baseX + barW + gap}
                                y={y0 - doneH}
                                width={barW}
                                height={doneH}
                                rx="3"
                                fill="#2563EB"
                              />
                              <text
                                x={baseX + barW + gap / 2}
                                y="178"
                                textAnchor="middle"
                                fill="#64748b"
                                fontSize="11"
                                fontWeight="500"
                              >
                                {`Week ${i + 1}`}
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                      <h4 className="mb-5 text-sm font-bold text-[#0F172A]">Department Stats</h4>
                      <ul className="space-y-4">
                        {[
                          { name: 'Development', pct: 92, fill: '#2563EB' },
                          { name: 'Design', pct: 78, fill: '#10B981' },
                          { name: 'Marketing', pct: 85, fill: '#F59E0B' },
                          { name: 'HR', pct: 70, fill: '#8B5CF6' },
                        ].map(({ name, pct, fill }) => (
                          <li key={name}>
                            <div className="mb-1 flex justify-between text-xs font-medium text-slate-600">
                              <span>{name}</span>
                              <span>{pct}%</span>
                            </div>
                            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{ width: `${pct}%`, backgroundColor: fill }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-sky-100/80 bg-[#EFF6FF] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                    <p className="text-sm leading-relaxed text-slate-700">
                      <span className="font-semibold text-[#0F172A]">⭐ AI Insight:</span> Team
                      productivity is 15% higher this month! Keep up the excellent work 👏
                    </p>
                    <button
                      type="button"
                      className="shrink-0 rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — reference: horizontal white bars, blue left icon, + on right */}
        <section className="bg-[#F9FAFB] px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#0F172A] sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-3">
              {faqItems.map((item, i) => {
                const open = faqOpen === i
                return (
                  <li key={item.q}>
                    <article className="overflow-hidden rounded-xl border border-slate-100/90 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                      <button
                        type="button"
                        onClick={() => setFaqOpen(open ? null : i)}
                        className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-slate-50/60 sm:px-5 sm:py-[1.125rem]"
                        aria-expanded={open}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB] text-white shadow-sm">
                          <FaCommentDots className="h-[18px] w-[18px]" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1 text-sm font-semibold text-[#0F172A] sm:text-[15px]">
                          {item.q}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-500 transition-transform duration-200 ${
                            open ? 'rotate-45' : ''
                          }`}
                          aria-hidden
                        >
                          <FaPlus className="h-3.5 w-3.5" />
                        </span>
                      </button>
                      {open && (
                        <div className="border-t border-slate-100 px-4 py-3 pl-[4.5rem] pr-14 text-sm leading-relaxed text-gray-600 sm:px-5 sm:pl-[4.75rem]">
                          {item.a}
                        </div>
                      )}
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Final CTA — solid royal/navy, primary button dark text + arrow */}
        <section className="relative overflow-hidden bg-[#0F172A] px-4 py-16 sm:py-20">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="waveGradFeatureCta" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradFeatureCta)"
              d="M0,96 C120,48 240,144 360,96 S600,48 720,96 L720,200 L0,200 Z"
            />
            <path
              fill="url(#waveGradFeatureCta)"
              opacity="0.45"
              d="M0,120 C180,72 300,168 480,120 S660,72 840,120 L840,220 L0,220 Z"
            />
          </svg>
          <div className="relative z-1 mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-[2.125rem] md:leading-tight">
              Ready to Supercharge Your Team?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-normal text-slate-300">
              Join thousands of companies already using Workforce AI to manage their teams smarter.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                to="/register"
                className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:bg-slate-100 sm:w-auto"
              >
                Start 14-Day Free Trial →
              </Link>
              <button
                type="button"
                className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Schedule Demo
              </button>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-normal text-slate-300">
              <li className="flex items-center gap-2">
                <FaCheck className="h-4 w-4 shrink-0 text-[#10B981]" aria-hidden />
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="h-4 w-4 shrink-0 text-[#10B981]" aria-hidden />
                Setup in 2 minutes
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Feature