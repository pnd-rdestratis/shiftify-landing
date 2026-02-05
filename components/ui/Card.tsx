"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles = "rounded-xl bg-white transition-all duration-300";

    const variants = {
      default: "shadow-card",
      elevated: "shadow-elevated",
      bordered: "border border-border shadow-soft",
    };

    const hoverStyles = hover
      ? "hover:shadow-elevated hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
