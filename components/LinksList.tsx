"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

type Props = {
  navLinks: any[];
};

export const LinkList = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();

  return (
    <ul className="mr-auto hidden tablet:flex justify-center align-middle gap-3 tablet:gap-7 min-[768px]:mx-auto ">
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <li key={link.label}>
            <Link
              className={`link ${isActive ? "activeLink" : ""}`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
      {session?.data && (
        <Link className="link" href={"/profile"}>
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link
          className="link"
          href={"#"}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Link>
      ) : (
        <Link className="link" href={"/api/auth/signin"}>
          Sign In
        </Link>
      )}
    </ul>
  );
};
