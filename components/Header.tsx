import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-[17px] p-[20px] bg-black relative">
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="/about" className="link">
        About
      </Link>
      <Link href="/blog" className="link">
        Blog
      </Link>
      <button
        type="button"
        className="text-white border border-white rounded px-[7px] py-[5px] absolute top-[50%] translate-y-[-50%] right-[25px] hover:scale-105 transition-all ease-linear duration-200ms hover:border-red-600 hover:text-red-600"
      >
        Change theme
      </button>
    </header>
  );
}
