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
        <div className="py-5 relative flex justify-center align-center gap-3">
          <div className="mr-auto flex justify-center align-middle gap-3 tablet:gap-7 min-[768px]:mx-auto">
            <Navigation navLinks={navItems} />
          </div>
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
}
