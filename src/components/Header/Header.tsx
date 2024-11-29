import { Link } from "react-router-dom";

const contact = [
  {
    href: "Rartmeladz@gmail.com",
    label: "Rartmeladz@gmail.com",
    label2: "Write Email",
    icon: "MdEmail",
  },
  {
    href: "(+995) 595 03-56-68",
    label: "(+995) 595 03-56-68",
    label2: "Call Now",
    icon: "FaPhoneSquareAlt",
  },
  {
    href: "https://www.linkedin.com/in/roland-a-96240487",
    label: "Roland Artmeladze",
    label2: "Show Profile",
    icon: "FaLinkedin",
  },
];

const Header = () => {
  const mobile = window.innerWidth <= 768;
  return (
    <nav className="flex w-full flex-row justify-between py-2.5 px-10">
      <ul className="flex flex-row gap-2.5">
        {contact.map((item, index) => (
          <li key={index} className="text-pink-50">
            <Link to={item.href}> {mobile ? item.label : item.label2} </Link>
          </li>
        ))}
      </ul>
      <Link to={"/Blog"}>
        {" "}
        <samp className="text-yellow-50 bg-stone-400 py-2 px-4 rounded-md">
          {" "}
          Blog{" "}
        </samp>
      </Link>
    </nav>
  );
};

export default Header;
