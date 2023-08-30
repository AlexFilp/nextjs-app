import { Navigation } from "./Navigation";
import { ThemeBtn } from "./ThemeBtn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className=" bg-gray-900 border-b-2 border-gray-900 dark:border-white transition">
      <div className="container">
        <div className="py-5 flex justify-start tablet:justify-center  items-center gap-3">
          <Navigation navLinks={navItems} />
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
}
