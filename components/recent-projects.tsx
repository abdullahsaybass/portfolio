import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-10">
      <h1 className="text-[60px] font-medium text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div
        className="
          mt-6 flex flex-wrap items-center justify-center
          gap-x-16 gap-y-4 p-2
        "
      >
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[30rem] w-[90vw] items-center justify-center sm:h-[38rem] sm:w-[570px] lg:min-h-[30rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-2 flex h-[40vh] w-[80vw] items-center justify-center sm:h-[50vh] sm:w-[570px] overflow-hidden rounded-2xl">
                  
                  {/* === Background effect (copied from Hero) === */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0a0f1c] via-[#13162d] to-[#1a1f3c]"></div>
                  <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full "></div>
                  <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full "></div>

                  {/* === Background filler image === */}
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d]/60 backdrop-blur-xl border border-white/10 z-0 rounded-2xl">
                    {/* <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                      className="object-cover opacity-60"
                    /> */}
                  </div>

                  {/* === Project Image === */}
                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10 drop-shadow-2xl"
                  />
                </div>

                {/* === Title === */}
                <h1 className="line-clamp-1 text-[34px] font-medium text-white mt-4">
                  {title}
                </h1>

                {/* === Description === */}
                <p className="line-clamp-2 text-[18px] font-light text-gray-300 mt-4">
                  {des}
                </p>

                {/* === Footer row === */}
                <div className="mb-1 mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-9 lg:w-9"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-xs text-purple md:text-sm lg:text-base"
                    >
                      Source Code
                    </Link>
                    <FaLocationArrow className="ms-2" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
