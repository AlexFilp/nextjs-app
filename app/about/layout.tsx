import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="title">About page</h1>
      <ul>
        <li className="mb-[5px]">
          <Link href="/about/team" className="aboutLink">
            Team
          </Link>
        </li>
        <li className="mb-[5px]">
          <Link href="/about/contacts" className="aboutLink">
            Contacts
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
