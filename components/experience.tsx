import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-12">
      {/* Main heading in blue */}
      <h1
        className="heading text-3xl md:text-4xl font-bold mb-8"
        style={{ color: "#0F4DFF" }}
      >
        My <span className="text-purple">work experience</span>
      </h1>

      {/* Container with max width 1400px */}
      <div className="mt-12 mx-auto max-w-[1400px] w-full px-4">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-4">
          {workExperience.map((experience) => (
            <Button
              key={experience.id}
              borderRadius="1.75rem"
              className="flex-1 border-neutral-200 text-white dark:border-slate-800 bg-[#0a0f1c]"
              duration={Math.floor(Math.random() * 10000 + 10000)}
            >
              <div className="flex flex-col gap-2 p-3 py-5 md:p-4 lg:flex-row lg:items-center lg:p-6">
                {/* Icon tinted blue */}
                <Image
                  width={95}
                  height={87}
                  src={experience.thumbnail}
                  alt={experience.title}
                  className="w-14 md:w-16 lg:w-20"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(22%) sepia(96%) saturate(5278%) hue-rotate(222deg) brightness(95%) contrast(104%)",
                  }} // makes it #0F4DFF
                />

                <div className="lg:ms-4">
                  {/* Inner title with font-weight 500 */}
                  <h1 className="text-start text-base md:text-lg lg:text-lg font-medium text-white">
                    {experience.title}
                  </h1>
                  {/* Paragraph with 16px font size + rgba color */}
                  <p
                    className="mt-2 text-start font-normal"
                    style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)" }}
                  >
                    {experience.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
