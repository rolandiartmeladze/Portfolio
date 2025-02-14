import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function ContactButtons() {
  return (
    <ul className="flex">
      <li>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-e-none px-2 hover:text-foreground"
        >
          <Link className="text-primary" href="mailto:rartmeladze@gmail.com">
            <Icons.gmail />
            <Label>Send Email</Label>
          </Link>
        </Button>
      </li>
      <li>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-s-none px-2 hover:text-foreground"
        >
          <Link className="text-primary" href="tel:+995595035668">
            <Icons.phone />

            <Label>Call Now</Label>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
