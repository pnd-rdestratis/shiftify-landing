"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const colorClasses = {
    default: "text-primary",
    white: "text-white",
  };

  return (
    <div className={cn("flex items-center gap-2 font-bold", sizeClasses[size], colorClasses[variant], className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "flex-shrink-0",
          size === "sm" && "w-6 h-6",
          size === "md" && "w-8 h-8",
          size === "lg" && "w-10 h-10"
        )}
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M8 16L12 12L16 16L20 12L24 16"
          stroke={variant === "white" ? "#0F172A" : "#FFFFFF"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 20L12 16L16 20L20 16L24 20"
          stroke={variant === "white" ? "#0F172A" : "#FFFFFF"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Shiftify</span>
    </div>
  );
}
