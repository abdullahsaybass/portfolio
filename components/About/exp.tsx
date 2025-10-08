"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071018] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-cyan-400 text-sm tracking-wide uppercase font-light mb-2">
            Passion for User Experience & Modern Design
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            Designing User-Friendly Digital Experiences
          </h1>
          <p className="mt-3 text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto">
            I’m a Creative Web Designer and UI/UX Specialist with 3+ years of
            experience designing modern, responsive, and user-friendly websites.
            I focus on turning briefs into functional and visually engaging
            experiences that are accessible, fast, and intuitive.
          </p>
        </header>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr_380px] gap-8 items-start">
          {/* LEFT: Profile Card */}
          <aside className="w-full">
            <div className="bg-[#111827] border border-[rgba(255,255,255,0.03)] rounded-2xl p-8 shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-5 ring-1 ring-[rgba(86,164,227,0.18)]">
                  <Image
                    src="/ab1.png"
                    width={144}
                    height={144}
                    alt="Samprada Aryal"
                    className="object-cover"
                  />
                </div>

                <h2 className="text-xl font-medium">Samprada Aryal</h2>
                <p className="text-cyan-400 text-sm mt-1 mb-4 font-light">
                  Web Designer / UI-UX Specialist
                </p>

                <div className="text-gray-300 text-sm space-y-2 mb-6 font-light">
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={14} /> samprada.757@gmail.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone size={14} /> 0410 858 556
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={14} /> Sydney, Australia
                  </p>
                  <p className="text-green-400 mt-1 font-light">
                    Available for projects
                  </p>
                </div>

                
                {/* Experience Card */}
                <div className="mt- bg-[#071018] border border-[rgba(255,255,255,0.03)] rounded-lg p-5 w-full text-left">
                  <h3 className="text-sm font-medium mb-3">Experience</h3>
                  <div className="space-y-2 text-sm text-gray-300 font-light">
                    <div className="flex justify-between">
                      <span>Web Design / UI-UX Design</span>
                      <span className="text-cyan-400">3+ Years</span>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* MIDDLE: My Approach */}
          <section className="px-1">
            <h3 className="text-lg font-medium mb-4">My Approach</h3>

            <div className="space-y-6 text-sm text-gray-300 font-light">
              <ApproachItem color="#56A4E3" title="User-Focused Design">
                I begin every project with a deep understanding of user needs
                and behavior, ensuring every decision improves usability and
                engagement.
              </ApproachItem>

              <ApproachItem color="#4ade80" title="Collaborative Process">
                Close communication with stakeholders and developers helps align
                creative vision with business goals.
              </ApproachItem>

              <ApproachItem color="#c084fc" title="Continuous Improvement">
                Iterative design and testing ensure the final experience is
                polished, accessible, and effective.
              </ApproachItem>
            </div>
          </section>

          {/* RIGHT: Skills & Tools */}
          <aside className="px-1">
            <h3 className="text-lg font-medium mb-4">Skills & Tools</h3>

            <div className="space-y-6 text-sm font-light">
              <div>
                <h4 className="text-cyan-400 font-medium mb-3">UI/UX Design</h4>
                <SkillBar skill="Figma" value={80} />
                <SkillBar skill="Adobe XD" value={75} />
                <SkillBar skill="Photoshop / Illustrator" value={65} />
                <SkillBar skill="Wireframing & Prototyping" value={70} />
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium mb-3">
                  Web Development
                </h4>
                <SkillBar skill="HTML5 / CSS3 / JS" value={60} />
                <SkillBar skill="Bootstrap / Tailwind / Responsive Design" value={50} />
                <SkillBar skill="WordPress" value={60} />
              </div>

              
            </div>
          </aside>
        </div>

        {/* Footer */}
        
      </div>
    </main>
  );
}

/* --- Components --- */

function ApproachItem({
  color,
  title,
  children,
}: {
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <span
          className="w-3 h-3 rounded-full block mt-1"
          style={{ background: color }}
        />
      </div>
      <div>
        <div className="font-medium text-sm text-white mb-1">{title}</div>
        <div className="text-gray-400 text-sm leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, value }: { skill: string; value: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1 font-light">
        <span>{skill}</span>
        <span className="text-gray-400">{value}%</span>
      </div>

      <div className="w-full rounded-full h-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.02)] overflow-hidden">
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "linear-gradient(90deg,#56A4E3,#3B82F6)",
          }}
        />
      </div>
    </div>
  );
}
