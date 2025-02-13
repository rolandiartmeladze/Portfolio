import Link from "next/link";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";

export default function ContactButtons() {
  return (
    <ul className="flex flex-row lg:flex-row">
      <li>
        <Link
          className={buttonVariants({ variant: "link" }) + "px-0"}
          href="mailto:example@email.com"
        >
          <Icons.gmail className="w-9 p-0" />
          <label className="hidden lg:flex">Send Email</label>
        </Link>
      </li>
      <li>
        <Link
          className={buttonVariants({ variant: "link" })}
          href="tel:+995595035668"
        >
          <Icons.phone />
          <label className="hidden lg:flex">Call Now</label>
        </Link>
      </li>
    </ul>
  );
}
