"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-3xl md:text-4xl text-center">
        My{" "}
        <span className="bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] bg-clip-text text-transparent">
          approach
        </span>
      </h1>

      <div className="mt-20 mx-auto max-w-[1400px] flex flex-col items-center justify-center gap-6 lg:flex-row">
        {/* Card 1 */}
        <Card
          title="Planning & Strategy"
          icon={
            <MagicButton
              title="Phase 1"
              asChild
              className="bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white"
            />
          }
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[#0a0f1c]"
          />
        </Card>

        {/* Card 2 */}
        <Card
          title="Deployment & Progress Update"
          icon={
            <MagicButton
              title="Phase 2"
              asChild
              className="bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white"
            />
          }
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#0a0f1c]"
            colors={[
              [15, 77, 255], // #0F4DFF
              [72, 149, 252], // #4895FC
            ]}
            dotSize={2}
          />
        </Card>

        {/* Card 3 */}
        <Card
          title="Development & Launch"
          icon={
            <MagicButton
              title="Phase 3"
              asChild
              className="bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white"
            />
          }
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#0a0f1c]"
            colors={[[72, 149, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm flex-col items-center justify-center rounded-3xl border border-[#0F4DFF]/30 p-4 lg:h-[28rem] bg-[#0a0f1c]"
    >
      {/* Corner icons */}
      <Icon className="absolute -left-3 -top-3 h-5 w-5 text-[#0F4DFF]" />
      <Icon className="absolute -bottom-3 -left-3 h-5 w-5 text-[#4895FC]" />
      <Icon className="absolute -right-3 -top-3 h-5 w-5 text-[#0F4DFF]" />
      <Icon className="absolute -bottom-3 -right-3 h-5 w-5 text-[#4895FC]" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        {/* Icon */}
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        {/* Title */}
        <h2 className="relative z-10 mt-4 text-2xl font-bold bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] bg-clip-text text-transparent opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100">
          {title}
        </h2>

        {/* Description */}
        <p className="relative z-10 mt-3 text-sm font-medium text-gray-300 opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-gray-200 group-hover/canvas-card:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
