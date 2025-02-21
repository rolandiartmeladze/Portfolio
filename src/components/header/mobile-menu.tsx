import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuList from "../navigation/menu-list";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="flex cursor-pointer lg:hidden">
        <Icons.menu className="size-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-7">
          <SheetTitle>
            
          </SheetTitle>
          <SheetDescription>
            <MenuList showBlog={true} className="rounded-none border-0 border-b rounded-t-md" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
