import { Link } from "react-router-dom";
import Button from "../Ui/button";
import { Icons } from "../Icons";

const contact = [
  {
    href: "Rartmeladz@gmail.com",
    label: "Rartmeladz@gmail.com",
    label2: "Write Email",
    icon: "gmail",
  },
  {
    href: "(+995) 595 03-56-68",
    label: "(+995) 595 03-56-68",
    label2: "Call Now",
    icon: "phone",
  },
  {
    href: "https://www.linkedin.com/in/roland-a-96240487",
    label: "Roland Artmeladze",
    label2: "Show Profile",
    icon: "linkedin",
  },
];

const Header = () => {
  const mobile = window.innerWidth <= 768;
  return (
    <nav className="flex w-full flex-row items-center justify-between py-2.5 px-10">
      <ul className="flex flex-row gap-2.5">
        {contact.map((item, index) => {
          const Icon = Icons[item.icon as keyof typeof Icons];
          return (
            <li key={index} className=" flex gap-1 items-center text-pink-50">
              <Icon className="size-6" />
              <Link to={item.href}> {!mobile ? item.label : item.label2} </Link>
            </li>
          );
        })}
      </ul>

      <Button to="/Blog" size="sm">
        Blog
      </Button>
    </nav>
  );
};

export default Header;
