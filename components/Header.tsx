import { Navigation } from "./Navigation";
import { ThemeBtn } from "./themeButtons/ThemeBtn";
import { UserWrapp } from "./UserWrapp";
import { authOptions } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="relative bg-gray-900 border-b-2 border-gray-900 dark:border-white transition">
      <div className="container">
        <div className="py-5 flex justify-start tablet:justify-center  items-center gap-3">
          <Navigation navLinks={navItems} />
          {/* <ThemeBtn /> */}
          <UserWrapp session={session} />
        </div>
      </div>
    </header>
  );
}
