"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";

export default function CvButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex justify-center">
      <div
        className="relative flex h-12 w-40 items-center cursor-pointer z-10 animate-scaleUp 
        justify-center rounded-lg bg-primary text-primary-foreground shadow-md 
        transition-all duration-300 ease-out overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`absolute text-lg font-semibold transition-all duration-300 ${
            hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          Resume
        </span>

        <div
          className={`absolute flex h-full w-full items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Icons.eye className="size-9 p-1 border-b-transparent rounded-s-md text-foreground hover:border-b-foreground" />
          <Icons.download className="size-9 p-1 rounded-e-md text-foreground bg-muted/80" />
        </div>
      </div>
    </div>
  );
}

