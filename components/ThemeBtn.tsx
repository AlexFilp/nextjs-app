"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export const ThemeBtn = () => {
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
      className="text-white  px-[7px] py-[5px] ml-auto hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600 text-2xl"
    >
      {theme === "light" ? (
        <FaSun color="yellow" />
      ) : (
        <BsFillMoonFill color="#c6e2ff" />
      )}
    </button>
  );
};
