import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export default function MenuButton () {
    return(
        <Button className="flex cursor-pointer lg:hidden" asChild variant="link" size="icon" >
            <Icons.menu className="size-12" />
        </Button>
    );
};