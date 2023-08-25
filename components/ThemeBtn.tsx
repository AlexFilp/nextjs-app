"use client";
export const ThemeBtn = () => {
  return (
    <button
      type="button"
      className="text-white border border-white rounded px-[7px] py-[5px] absolute top-[50%] translate-y-[-50%] right-[25px] hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600"
    >
      Switch theme
    </button>
  );
};
