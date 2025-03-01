"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function CvButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex justify-center flex-col gap-2">
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
          className={`absolute flex h-full w-full items-center justify-center gap-4 transition-all duration-300 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Link href="#CV">
            <Icons.eye className="size-10 p-0 hover:text-muted" />
          </Link>
          <Link href="#CV">
            <Icons.download className="size-12 p-0  hover:text-muted" />
          </Link>
        </div>
      </div>
    </div>
  );
}
