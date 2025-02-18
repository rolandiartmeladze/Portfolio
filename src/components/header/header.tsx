import Link from "next/link";
import ContactButtons from "./contact-buttons";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "./theme-toggle";
import { Icons } from "../icons";

export default function Header() {
  return (
    <header className="px-4 py-3 flex justify-between bg-secondary border-b border-borderColor lg:px-12">
      <ContactButtons />
      <div className="flex justify-between items-center  gap-2 lg:gap-3">
        <Link href="/blog" className="hidden lg:bg-primary hover:bg-secondary lg:flex lg:p-1 items-center lg:border-b lg:border-b-foreground lg:rounded-md">
          <Icons.blog className="size-9 z-20  lg:size-7" />
        </Link>
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
