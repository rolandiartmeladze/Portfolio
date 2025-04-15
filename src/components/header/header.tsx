import Link from "next/link";
import ContactButtons from "./contact-buttons";
import MobileMenu from "../navigation/mobile-menu";
import ThemeToggle from "./theme-toggle";
import { Icons } from "../icons";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      id="home"
      className={`px-4 py-3 flex z-50 justify-between bg-secondary border-b border-borderColor lg:px-12 ${className}`}
    >
      <ContactButtons />
      <div className="flex justify-between items-center  gap-2 lg:gap-3">
        <Link target="blank"
          href="https://my-blog-frontend-mocha.vercel.app/"
          className="hidden lg:bg-primary hover:bg-secondary lg:flex lg:p-1 items-center lg:border-b lg:border-b-foreground lg:rounded-md"
        >
          <Icons.blog className="size-9 z-20  lg:size-7" />
        </Link>
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
