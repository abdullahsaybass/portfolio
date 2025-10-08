import Image from "next/image";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2018 – 2020",
    title: "Master of Information Technology (MIT)",
    institution: "Victorian Institute of Technology, Sydney",
    description:
      "Focused on advanced IT concepts and project management. Strengthened analytical and problem-solving skills. Developed a solid understanding of software systems and technology innovation.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    year: "2012 – 2015",
    title: "Bachelor of Science in Information Technology (BScIT)",
    institution: "Lord Buddha Education Foundation, Nepal",
    description:
      "Studied core areas of information technology and computer science. Built a strong foundation in database, networking, and web technologies. Completed several academic projects related to system design.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
];

export default function ExperienceJourney() {
  return (
    <section className="w-full bg-[#0b0e16] text-white py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] shadow-lg">
        
        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full md:w-[40%] flex items-center justify-center bg-[#0b0e16]">
          <div className="relative w-[85%] h-[600px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-lg">
            <Image
              src="/1.png"
              alt="Certificate"
              fill
              className="object-cover object-center brightness-90"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-14 py-10 space-y-8">
          {/* Title */}
          <div>
            <p className="text-xs uppercase w-[280px] font-semibold text-[#b06fe1] tracking-widest bg-[#2c2e35] px-3 py-1 rounded mb-4">
              Employment & Education
            </p>
            <h2 className="text-4xl font-medium inline-block border-b-4 border-green-500 pb-1">
              My Experience Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-gray-700 ml-6 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="ml-8 relative">
                <div className="absolute -left-10 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-md">
                  {exp.icon}
                </div>

                <div className="bg-[#121826] p-5 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-green-400/30 transition-all">
                  <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-green-400 font-medium mb-2">
                    {exp.institution}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
