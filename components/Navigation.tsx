"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link
            className={`link ${isActive ? "activeLink" : ""}`}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};