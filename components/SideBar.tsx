"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useOnClickOutside } from "usehooks-ts";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBarThemeBtn } from "./themeButtons/SideBarThemeBtn";

type Props = {
  navLinks: any[];
};

export const SideBar = ({ navLinks }: Props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathName = usePathname();
  const session = useSession();

  useOnClickOutside(sidebarRef, () => setSideBarOpen(false));

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSideBar}
        className="flex justify-center items-center tablet:hidden"
      >
        <GiHamburgerMenu
          className="text-gray-100 hover:text-red-600 focus:text-red-600"
          size="30px"
        />
      </button>
      <div
        className={`${
          !sideBarOpen ? "opacity-0 pointer-events-none" : "opacity-1"
        } fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-25 transition`}
      >
        <div
          ref={sidebarRef}
          className={`flex justify-center items-center pt-20 pb-10 absolute top-0 left-0 ${
            !sideBarOpen ? "-translate-x-full" : "translate-x-0"
          } bg-gray-100 dark:bg-gray-900 w-40 border-b-2 border-r-2 border-red-600 transition`}
        >
          <ul className="flex flex-col justify-center items-center gap-6 w-full ">
            {navLinks.map((link) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  key={link.label}
                  onClick={toggleSideBar}
                  className={`sideBarLink ${
                    isActive ? "activeLink" : ""
                  } w-full`}
                  href={link.href}
                >
                  <li className="text-center">{link.label}</li>
                </Link>
              );
            })}
            {!session?.data && (
              <Link
                onClick={toggleSideBar}
                className="sideBarLink w-full"
                href={"/api/auth/signin"}
              >
                <li className="text-center"> Sign In</li>
              </Link>
            )}
            {!session?.data && (
              <Link
                onClick={toggleSideBar}
                className="sideBarLink w-full"
                href={"#"}
              >
                <li className="text-center"> Sign Up</li>
              </Link>
            )}
          </ul>
          <SideBarThemeBtn />
          <button
            type="button"
            onClick={toggleSideBar}
            className="absolute top-5 left-4 border-none"
          >
            <AiOutlineClose
              className="text-gray-900 dark:text-gray-100 hover:text-red-600 focus:text-red-600"
              size="30px"
            />
          </button>
        </div>
      </div>
    </>
  );
};
