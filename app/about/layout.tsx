import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="title">About page</h1>
      <ul className="list-disc">
        <li className="mb-[5px]">
          <Link
            href="/about/team"
            className="underline text-xl hover:text-blue-400 focus:text-blue-400"
          >
            Team
          </Link>
        </li>
        <li className="mb-[5px]">
          <Link
            href="/about/contacts"
            className="underline text-xl hover:text-blue-400 focus:text-blue-400"
          >
            Contacts
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
