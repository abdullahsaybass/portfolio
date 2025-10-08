import { PenTool, Palette, Monitor, Code2, Globe } from "lucide-react";

const services = [
  {
    title: "UI/UX DESIGN",
    description:
      "Designing intuitive and modern user experiences with Figma, Adobe XD, and wireframing tools to enhance usability and visual flow.",
    icon: <PenTool className="w-8 h-8 text-[#4e44ce]" />,
  },
  {
    title: "GRAPHIC DESIGN",
    description:
      "Creating visual assets, marketing materials, and branding designs using Photoshop, Illustrator, and creative visual composition.",
    icon: <Palette className="w-8 h-8 text-[#25d366]" />,
  },
  {
    title: "WEB DESIGN",
    description:
      "Crafting responsive, accessible, and pixel-perfect website designs that align with brand identity and user goals.",
    icon: <Monitor className="w-8 h-8 text-[#4e44ce]" />,
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Developing dynamic, SEO-friendly websites using HTML, CSS, JavaScript, and modern frameworks like Next.js and React.",
    icon: <Code2 className="w-8 h-8 text-[#25d366]" />,
  },
  {
    title: "WORDPRESS DEVELOPMENT",
    description:
      "Building and customizing WordPress websites with responsive layouts, plugins, and user-focused functionality.",
    icon: <Globe className="w-8 h-8 text-[#4e44ce]" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0b0e16] text-white py-16 px-8 md:px-16 lg:px-32">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase font-semibold text-[#b06fe1] tracking-widest bg-[#2c2e35] px-3 py-1 rounded mb-4 inline-block">
          My Services
        </span>
        <h2 className="text-[40px] font-medium mt-3">What I Do</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Turning ideas into visually appealing and functional digital experiences —
          from creative design to complete website development.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#141821] hover:bg-[#1b2030] transition-all duration-300 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center justify-center border border-transparent hover:border-[#25d366]/20"
          >
            <div className="bg-white rounded-full p-4 mb-5 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-[#4e44ce] to-[#25d366] px-8 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-all shadow-lg text-sm">
          View More Work
        </button>
      </div>
    </section>
  );
}
