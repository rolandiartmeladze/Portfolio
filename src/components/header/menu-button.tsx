import { SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "../icons";

export default function MenuButton() {
  return (
    <SheetTrigger className="flex cursor-pointer lg:hidden">
      <Icons.menu className="size-12" />
    </SheetTrigger>
  );
}
