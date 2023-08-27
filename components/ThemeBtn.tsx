"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      className="text-white border border-white rounded px-[7px] py-[5px] absolute top-[50%] translate-y-[-50%] right-[25px] hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600"
    >
      Switch theme
    </button>
  );
};
