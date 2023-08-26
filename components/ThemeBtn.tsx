"use client";
import { useState, useEffect } from "react";

export const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem("darkMode") ?? "false"
  );

  useEffect(() => {
    if (darkMode === "false") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    console.log(window.localStorage.darkMode);
    console.log(darkMode);
    if (darkMode === "false") {
      setDarkMode("true");
    } else {
      setDarkMode("false");
    }
  };

  return (
    <button
      onClick={handleDarkMode}
      type="button"
      className="text-white border border-white rounded px-[7px] py-[5px] absolute top-[50%] translate-y-[-50%] right-[25px] hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600"
    >
      Switch theme
    </button>
  );
};
