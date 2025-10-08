import { cn } from "@/lib/utils";
import React from "react";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  className?: string; // ✅ renamed from `otherClasses`
  asChild?: boolean;
};

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  className,
  asChild = false,
}: MagicButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60",
        !asChild && "md:mt-10"
      )}
      onClick={handleClick}
      tabIndex={asChild ? -1 : undefined}
    >
      {/* Rotating gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      {/* Inner button layer */}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl",
          className // ✅ allows gradient, color, etc. from parent
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
