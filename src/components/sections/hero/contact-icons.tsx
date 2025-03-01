import { Icons } from "@/components/icons";
import Link from "next/link";
import CvButton from "./cv-button";

export default function ContactIcons() {
  return (
    <div className="h-12 w-full flex items-center m-10 mb-0 justify-center gap-4 animate-scaleUp">
      <Link
        href="https://github.com/rolandiartmeladze"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon group"
      >
        <Icons.github className="size-10 hover:scale-110" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/roland-artmeladze/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon group"
      >
        <Icons.linkedin className="size-10 text-blue-700 hover:scale-110" />{" "}
      </Link>
      <CvButton />
    </div>
  );
}
