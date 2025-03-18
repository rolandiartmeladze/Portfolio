import Link from "next/link";
import { Icons } from "../icons";

export default function ContactButtons() {
  return (
    <div className="flex lg:gap-2">
      <Link
        href="mailto:rartmeladze@gmail.com"
        className="flex p-2 border-r rounded-s-md text-primary bg-muted items-center gap-2 lg:px-4 lg:py-2 lg:bg-secondary lg:border-r-0 lg:shadow-lg hover:bg-background hover:border-b border-primary"
      >
        <Icons.gmail className="size-6" />
        <label className="hidden lg:flex cursor-pointer">Send Email</label>
      </Link>
      <Link
        href="tel:+995595035668"
        className="flex px-2 border-l text-primary bg-muted rounded-e-md items-center gap-2 lg:px-4 lg:py-2  lg:bg-secondary lg:border-l-0 lg:shadow-lg hover:bg-background hover:border-b border-primary"
      >
        <Icons.phone className="size-6" />
        <label className="hidden lg:flex cursor-pointer">Call Now</label>
      </Link>
    </div>
  );
}
