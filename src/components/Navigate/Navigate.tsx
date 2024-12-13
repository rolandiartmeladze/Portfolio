import React, { useEffect, useState } from "react";
import "./Navigate.css";

import { Icons } from "../Icons";

import { Link } from "react-router-dom";

const Navigate = () => {
  const element = document.getElementsByClassName(
    "aside-navigate-item"
  ) as HTMLCollectionOf<HTMLElement>;

  const [ismobil, setIsMobil] = useState(false);
  const [navAct, setNavAct] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobil(isMobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const NavigationAnimate = () => {
    if (element) {
      setTimeout(() => {
        Array.from(element).forEach((el, index) => {
          setTimeout(() => {
            el.style.transform = "scale(1)";
          }, index * 300);
        });
      }, 2000);
    }
  };

  useEffect(() => {
    NavigationAnimate();
  }, []);

  const MenuActive = () => {
    setNavAct(!navAct);
  };

  const navItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/Projects", label: "Projects", icon: "project" },
    { to: "/Experiance", label: "Experiance", icon: "work" },
    { to: "/Skills", label: "Skills", icon: "skill" },
    { to: "/Education", label: "Education", icon: "education" },
    { to: "/Contact", label: "Contact", icon: "contact" },
  ];

  return (
    <nav className={`aside-navigate ${navAct ? "active" : ""}`}>
      <div
        onClick={MenuActive}
        className={`Meniu-btn ${navAct ? "active" : ""}`}
      >
        {ismobil && !navAct ? <Icons.menu /> : <Icons.menuMotion />}
      </div>
      <ul
        className={`aside-navigate-cont ${navAct ? "active" : ""} flex gap-1`}
      >
        {navItems.map((item, index) => {
          const Icon = Icons[item.icon as keyof typeof Icons];

          return (
            <Link key={index} to={item.to}>
              <li
                onClick={MenuActive}
                className={`aside-navigate-item ${navAct ? "active" : ""}`}
              >
                <label>{item.label}</label>
                <div>
                  {" "}
                  <Icon className="sixe-5" />{" "}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigate;
