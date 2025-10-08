'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronDown, Code, Palette, TestTube, Rocket, Search } from 'lucide-react'

const workSteps = [
  {
    id: 1,
    title: 'Design Analysis',
    description:
      'Understanding design requirements and user interface specifications to create pixel-perfect frontend experiences.',
    icon: <Search className="w-6 h-6" />,
    tools: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Adobe XD', icon: '💜' },
      { name: 'Sketch', icon: '💎' },
      { name: 'Zeplin', icon: '📐' }
    ],
    projectFocus:
      'Research and analyze UI/UX requirements, plan responsive layouts, ensure accessibility compliance, and prepare for component development.'
  },
  {
    id: 2,
    title: 'Component Architecture',
    description:
      'Planning and structuring reusable components and establishing a scalable frontend architecture.',
    icon: <Palette className="w-6 h-6" />,
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Storybook', icon: '📚' },
      { name: 'Atomic Design', icon: '🔬' }
    ],
    projectFocus:
      'Organize component hierarchy, manage state efficiently, and set up a consistent design system.'
  },
  {
    id: 3,
    title: 'Frontend Development',
    description:
      'Building interactive user interfaces with modern frameworks and ensuring optimal user experience.',
    icon: <Code className="w-6 h-6" />,
    tools: [
      { name: 'Next.js', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎬' },
      { name: 'Sass', icon: '💅' }
    ],
    projectFocus:
      'Develop responsive components, implement animations, and ensure seamless user interactions.'
  },
  {
    id: 4,
    title: 'Testing & Optimization',
    description:
      'Ensuring code quality, performance optimization, and cross-browser compatibility for seamless user experience.',
    icon: <TestTube className="w-6 h-6" />,
    tools: [
      { name: 'Jest', icon: '🃏' },
      { name: 'React Testing Library', icon: '🧪' },
      { name: 'Lighthouse', icon: '💡' },
      { name: 'Cypress', icon: '🌲' }
    ],
    projectFocus:
      'Perform unit and integration tests, optimize performance, and maintain high code quality standards.'
  },
  {
    id: 5,
    title: 'Deployment & Maintenance',
    description:
      'Deploying frontend applications and maintaining code quality with continuous integration practices.',
    icon: <Rocket className="w-6 h-6" />,
    tools: [
      { name: 'Vercel', icon: '🚀' },
      { name: 'Netlify', icon: '🌐' },
      { name: 'GitHub Actions', icon: '⚙️' },
      { name: 'Web Vitals', icon: '📊' }
    ],
    projectFocus:
      'Deploy applications, monitor performance, and maintain smooth operations post-launch.'
  }
]

export default function WorkProcess() {
  // ✅ Fixed typing here
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const [targetHeight, setTargetHeight] = useState(0)
  const [smoothHeight, setSmoothHeight] = useState(0)

  const updateTargetHeight = () => {
    const timeline = timelineRef.current
    if (!timeline) return
    const rect = timeline.getBoundingClientRect()
    const totalHeight = rect.height
    const scrollTop = window.innerHeight - rect.top
    const height = Math.min(Math.max(scrollTop, 0), totalHeight)
    setTargetHeight(height)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateTargetHeight)
    window.addEventListener('resize', updateTargetHeight)
    updateTargetHeight()

    const animate = () => {
      setSmoothHeight(prev => prev + (targetHeight - prev) * 0.1)
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('scroll', updateTargetHeight)
      window.removeEventListener('resize', updateTargetHeight)
    }
  }, [targetHeight])

  return (
    <div className="relative w-full bg-gradient-to-b from-[#0A0A16] to-[#101523] text-white overflow-hidden">
      {/* Header */}
      <section className="pt-16 pb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-light mb-4">
          My{' '}
          <span className="bg-gradient-to-r from-[#4e44ce] to-[#25d366] bg-clip-text text-transparent font-semibold">
            Frontend Process
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          A balanced blend of creativity and structure to transform design concepts into smooth, interactive digital experiences.
        </p>
        <ChevronDown className="w-8 h-8 mx-auto text-[#25d366] mt-6 animate-bounce" />
      </section>

      {/* Timeline */}
      <section className="py-16 w-full">
        <div className="max-w-[1600px] mx-auto px-8 relative" ref={timelineRef}>
          {/* Desktop Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white/10 h-full rounded-full z-0" />
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[6px] rounded-full z-10 shadow-[0_0_25px_rgba(37,211,102,0.7)]"
            style={{
              height: `${smoothHeight}px`,
              marginLeft: '-3px',
              background: 'linear-gradient(180deg, #4e44ce 0%, #25d366 100%)'
            }}
          />

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-4 top-0 w-[4px] h-full bg-gradient-to-b from-[#4e44ce] to-[#25d366] rounded-full" />

          {/* Progress Dot */}
          <div
            className="absolute lg:left-1/2 left-4 z-20"
            style={{
              top: `${smoothHeight}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4e44ce] to-[#25d366] ring-4 ring-[#0A0A16] shadow-[0_0_25px_rgba(37,211,102,0.8)]" />
          </div>

          {/* Steps */}
          <div className="space-y-16 mt-8">
            {workSteps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 text-left">
                  <span
                    className={`text-sm font-medium mb-1 block uppercase tracking-wider ${
                      index % 2 === 0 ? 'text-[#4e44ce]' : 'text-[#25d366]'
                    }`}
                  >
                    Step {step.id}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">{step.title}</h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Right Section */}
                <div
                  className={`w-full lg:w-1/2 bg-gradient-to-br ${
                    index % 2 === 0
                      ? 'from-[#4e44ce]/20 to-[#25d366]/20'
                      : 'from-[#25d366]/20 to-[#4e44ce]/20'
                  } backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-7 shadow-[0_0_25px_rgba(37,211,102,0.15)] hover:scale-[1.02] transition`}
                >
                  <div className="flex items-center mb-4 gap-3">
                    <div
                      className={`p-2 rounded-lg bg-white shadow-md ${
                        index % 2 === 0 ? 'text-[#4e44ce]' : 'text-[#25d366]'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>

                  <div className="mb-4">
                    <span
                      className={`text-xs font-medium mb-1 block uppercase ${
                        index % 2 === 0 ? 'text-[#25d366]' : 'text-[#4e44ce]'
                      }`}
                    >
                      Project Focus
                    </span>
                    <p className="text-sm text-gray-300">{step.projectFocus}</p>
                  </div>

                  <div>
                    <span
                      className={`text-xs font-medium mb-2 block uppercase ${
                        index % 2 === 0 ? 'text-[#25d366]' : 'text-[#4e44ce]'
                      }`}
                    >
                      Tools & Technologies
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {step.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-white/5 rounded-md p-2 border border-white/10 text-xs text-gray-200"
                        >
                          <span>{tool.icon}</span>
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
