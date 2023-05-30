"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center gap-2">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
