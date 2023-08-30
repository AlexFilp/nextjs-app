import { LinkList } from "./LinksList";
import { SideBar } from "./SideBar";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  return (
    <>
      <LinkList navLinks={navLinks} />
      <SideBar navLinks={navLinks} />
    </>
  );
};
