import Link from "next/link";
import { Icons } from "../ui/icons";
import { buttonVariants } from "../ui/button";

export default function ContactButtons() {
  return (
    <ul className="flex flex-row lg:flex-row">
      <li>
        <Link
          className={buttonVariants({ variant: "link" })}
          href="mailto:example@email.com"
        >
          <Icons.gmail />
          <samp className="hidden lg:flex">Send Email</samp>
        </Link>
      </li>
      <li>
        <Link
          className={buttonVariants({ variant: "link" })}
          href="tel:+995595035668"
        >
          <Icons.phone />
          <samp className="hidden lg:flex">Call Now</samp>
        </Link>
      </li>
    </ul>
  );
}
