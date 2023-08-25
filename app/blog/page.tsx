import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog page",
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 30,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts!");
  return response.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="title">Blog Page</h1>
      <ul className="flex flex-col gap-[12px] mt-[20px] pt-[10px]  pb-[30px]">
        {posts.map((post: any) => (
          <li
            key={post.id}
            className="border-2 border-black rounded-md py-1 px-2 hover:border-red-600 dark:border-white dark:text-white dark:hover:border-red-600 transitionAll"
          >
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
