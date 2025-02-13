import Link from "next/link";
import { Button } from "../ui/button";
import ContactButtons from "./contact-buttons";
import MobileMenu from "./mobile-menu"; 

export default function Header() {
  return (
    <header className="px-6 py-3 flex justify-between bg-secondary border-b border-borderColor lg:px-12">
      <ContactButtons />
      <div className="flex justify-between gap-2">
        <Button variant="default" asChild className="rounded-md">
          <Link href="/blog" className="text-base">Blog</Link>
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
}
