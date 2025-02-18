"use client";

import { useTheme } from "@/components/theme-provider";
import { Icons } from "../icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (theme === null) return null;

  return (
    <div className="flex z-20 cursor-pointer size-9 text-foreground hover:text-primary" onClick={toggleTheme}>
      {theme === "dark" ?  <Icons.sun /> :<Icons.moon />}
    </div>
  );
}
