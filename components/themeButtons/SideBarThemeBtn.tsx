"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export const SideBarThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
      className={`absolute top-5 right-4 themeBtn ${
        theme === "light" ? "focus:ring-yellow-300" : "focus:ring-blue-200"
      }`}
    >
      {theme === "light" ? (
        <FaSun className="text-yellow-400 " />
      ) : (
        <BsFillMoonFill className="text-blue-300 text-[22px]" />
      )}
    </button>
  );
};
