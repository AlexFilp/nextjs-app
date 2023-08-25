import { Navigation } from "./Navigation";
import { ThemeBtn } from "./ThemeBtn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-[17px] p-[20px] bg-black relative">
      <Navigation navLinks={navItems} />
      <ThemeBtn />
    </header>
  );
}
