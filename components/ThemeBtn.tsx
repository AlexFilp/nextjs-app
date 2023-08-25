"use client";
import { useLayoutEffect, useState } from "react";
export const ThemeBtn = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useLayoutEffect(() => {
    if (theme !== "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleSwitchTheme = () => {
    console.log(localStorage.theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={handleSwitchTheme}
      type="button"
      className="text-white border border-white rounded px-[7px] py-[5px] absolute top-[50%] translate-y-[-50%] right-[25px] hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600"
    >
      Switch theme
    </button>
  );
};
