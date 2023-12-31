"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useSession } from "next-auth/react";

export const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const session = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleDarkMode = () => {
    setTheme("dark");
  };

  const handleLightMode = () => {
    setTheme("light");
  };

  return (
    <button
      onClick={theme === "light" ? handleDarkMode : handleLightMode}
      type="button"
      className={`themeBtn absolute top-1/2 -translate-y-1/2 left-3 hidden ${
        session?.data ? "tablet:hidden" : "tablet:block "
      }   ${
        theme === "light" ? "focus:ring-yellow-300" : "focus:ring-blue-200"
      }`}
    >
      {theme === "light" ? (
        <FaSun color="rgb(253 224 71)" />
      ) : (
        <BsFillMoonFill color="rgb(191 219 254)" />
      )}
    </button>
  );
};
