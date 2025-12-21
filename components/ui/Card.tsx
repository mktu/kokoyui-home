import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "orange" | "blue" | "yellow" | "pink";
}

export default function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02]",
        {
          "bg-white shadow-lg": variant === "default",
          "bg-primary/10": variant === "orange",
          "bg-accent-blue/10": variant === "blue",
          "bg-accent-yellow/10": variant === "yellow",
          "bg-accent-pink/10": variant === "pink",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
