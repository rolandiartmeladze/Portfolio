"use client"; // Ensure it's a client component

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function CvButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="resume relative inline-block">
      <div
        className="inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icons.resume className="size-10 hover:scale-110 transition-transform" />

        {isHovered && (
          <div className="absolute -top-10 -left-1/2 flex space-x-2">
            <Link href="https://drive.usercontent.google.com/uc?id=1HPm7b5h1Gw_n9_tOgMJYRrnT-fq1srvs&export=download" target="_blank">
              <Icons.download className="size-10 p-1 rounded-t-md bg-muted hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://drive.google.com/file/d/1HPm7b5h1Gw_n9_tOgMJYRrnT-fq1srvs/view" target="_blank">
              <Icons.eye className="size-10 p-1 rounded-t-md bg-muted hover:scale-110 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
