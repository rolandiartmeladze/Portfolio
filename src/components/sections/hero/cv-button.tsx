import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
 
export default function CvButton () {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icons.resume className="size-10 hover:scale-110" />

        {isHovered && (
          <div className="absolute -top-10 left-0 flex space-x-2">
            <Link href="cv.pdf">
              <Icons.download className="size-10 p-1 rounded-t-md bg-muted  hover:scale-110" />
            </Link>
            <Link href="cv.pdf" download="cv.pdf">
              <Icons.eye className="size-10 p-1 rounded-t-md bg-muted hover:scale-110" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
