import Link from "next/link";
import { Button } from "../ui/button";
import ContactButtons from "./contact-buttons";
import MenuButton from "./menu-button";

export default function Header() {
  return (
    <header className="px-6  py-1 flex justify-between bg-secondary border-b border-borderColor lg:px-12">
      <ContactButtons />
      <div className="flex justify-between gap-2">
        <Button variant="default" asChild>
          <Link href={"./blog"}>Blog</Link>
        </Button>
        <MenuButton />
      </div>
    </header>
  );
}
