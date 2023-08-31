"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { UserThemeBtn } from "./themeButtons/UserThemeBtn";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  session: any;
};

export const UserWrapp = ({ session }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleIsOpen = (event: any) => {
    if (event.currentTarget === event.target) {
      setIsOpen(!isOpen);
    }
  };

  const handleClose = () => setIsOpen(false);

  useOnClickOutside(ref, handleClose);

  return (
    <>
      {session ? (
        <div
          ref={ref}
          onClick={toggleIsOpen}
          className="absolute top-2/4 -translate-y-2/4 right-2 tablet:right-4 flex justify-center items-center gap-1 cursor-pointer group"
        >
          <div className="rounded-md w-9 overflow-hidden pointer-events-none">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt="avatar"
                className="select-none"
              />
            )}
          </div>
          {isOpen ? (
            <div className="group-hover:bg-gray-400 group-hover:bg-opacity-50 transition rounded-lg pointer-events-none">
              <MdKeyboardArrowUp className="text-gray-100 text-[20px] pointer-events-none" />
            </div>
          ) : (
            <div className="group-hover:bg-gray-400 group-hover:bg-opacity-50 transition rounded-lg pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-gray-100 text-[20px] pointer-events-none " />
            </div>
          )}

          {isOpen && (
            <ul className="absolute bottom-0 translate-y-full right-0 border-l-2 border-r-2 border-b-2 rounded border-red-600 w-28 bg-gray-100 dark:bg-gray-900 select-none">
              <Link href="/profile">
                <li className="p-1 border-b border-gray-400 text-gray-900 dark:text-gray-100 text-end hover:bg-gray-300 dark:hover:bg-gray-700">
                  Profile
                </li>
              </Link>
              <li className="p-1 border-b border-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700">
                <UserThemeBtn />
              </li>
              <li className="p-1 text-end text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700">
                <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="hidden absolute top-2/4 -translate-y-2/4 right-5 tablet:flex justify-center items-center gap-7">
          <Link href={"/api/auth/signin"} className="link ">
            <li>Sign In</li>
          </Link>
          <Link href={"#"} className="link ">
            <li>Sign Up</li>
          </Link>
        </ul>
      )}
    </>
  );
};
