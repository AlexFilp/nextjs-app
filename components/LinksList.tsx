"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  navLinks: any[];
};

export const LinkList = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <ul className=" hidden tablet:flex justify-center items-center gap-7 ">
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
    </ul>
  );
};
