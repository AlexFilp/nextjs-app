"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export const UserThemeBtn = () => {
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
      className="ml-auto flex justify-center items-center gap-2 transition"
    >
      {theme === "light" ? (
        <FaSun className="text-yellow-400 text-[20px]" />
      ) : (
        <BsFillMoonFill className="text-blue-300 text-[18px]" />
      )}
      <p className="text-gray-900 dark:text-gray-100">Theme</p>
    </button>
  );
};
