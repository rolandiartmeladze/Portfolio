"use client";
import { useState } from "react";
import { menuItems } from "@/config/navigate";
import { Icons } from "../icons";
import Link from "next/link";
import clsx from "clsx";

export default function MenuList({
  className,
  showBlog,
}: {
  className?: string;
  showBlog?: boolean;
}) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: (typeof menuItems)[0]) => {
    setActiveItem(item.label);

    const element = document.querySelector(item.to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={`flex flex-col gap-2`}>
      {menuItems
        .filter((item) => showBlog || item.label !== "Blog")
        .map((item, index) => {
          const Icon = Icons[item.icon as keyof typeof Icons];
          return (
            <li
              key={index}
              className={clsx(
                "flex items-center gap-3 p-2 transition bg-secondary backdrop-blur-lg border rounded cursor-pointer",
                activeItem === item.label &&
                  `border shadow-lg transform scale-105 border-primary`,
                "hover:shadow-lg hover:rounded-s-none hover:border-transparent hover:border-r-primary hover:scale-105",
                "relative group",
                className,
              )}
            >
              <Link
                href={item.to}
                className="flex items-center gap-2"
                onClick={() => handleClick(item)}
              >
                <Icon className="size-9" />
                <span
                  className="
                            lg:absolute left-0 text-lg transform whitespace-nowrap 
                            lg:px-3.5 lg:py-3 rounded lg:rounded-e-none lg:bg-primary 
                            lg:opacity-0 scale-90 transition-all duration-500 
                            lg:group-hover:-translate-x-full lg:group-hover:opacity-100 
                            lg:group-hover:scale-100 lg:inline-block
                            "
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
