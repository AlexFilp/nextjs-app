import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-[17px] p-[20px] bg-black">
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="/about" className="link">
        About
      </Link>
      <Link href="/blog" className="link">
        Blog
      </Link>
    </header>
  );
}
