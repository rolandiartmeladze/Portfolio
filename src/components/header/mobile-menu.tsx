import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Icons } from "../icons";

export default function MobileMenu() {
  return (
<Sheet>
<SheetTrigger className="flex cursor-pointer lg:hidden">
    <Icons.menu className="size-10" />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
       Navigation Options
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  );
}
