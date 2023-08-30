"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useOnClickOutside } from "usehooks-ts";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeBtn } from "./ThemeBtn";
import { SideBarThemeBtn } from "./SideBarThemeBtn";

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
        ref={sidebarRef}
        className={`flex justify-cener items-start pt-20 pb-10 absolute top-0 left-0 ${
          !sideBarOpen ? "-translate-x-full" : "translate-x-0"
        } bg-gray-100 dark:bg-gray-900 w-40 border-b-2 border-r-2 border-red-600 transition`}
      >
        <ul className="mx-auto inline-flex flex-col justify-center align-middle gap-6   ">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <li key={link.label}>
                <Link
                  onClick={toggleSideBar}
                  className={`sideBarLink ${isActive ? "activeLink" : ""}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          {session?.data && (
            <Link
              onClick={toggleSideBar}
              className="sideBarLink"
              href={"/profile"}
            >
              Profile
            </Link>
          )}
          {session?.data ? (
            <Link
              className="sideBarLink"
              href={"#"}
              onClick={() => {
                signOut({ callbackUrl: "/" });
                setSideBarOpen(false);
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              onClick={toggleSideBar}
              className="sideBarLink"
              href={"/api/auth/signin"}
            >
              Sign In
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
    </>
  );
};
