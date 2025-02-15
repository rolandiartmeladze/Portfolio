"use client";

import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch"; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (theme === null) return null; 

  return (
    <Switch
      checked={theme === "dark"} 
      onCheckedChange={toggleTheme}
    >
    </Switch>
  );
}
