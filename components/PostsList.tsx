import Link from "next/link";

type Props = {
  posts: any[];
};

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      <p className="my-2 text-lg text-gray-900 dark:text-gray-100 transition">
        Total posts: {posts.length}
      </p>
      <ul className="flex flex-col gap-[12px] pb-[30px] list-decimal text-gray-900 dark:text-gray-100  pl-5 transition">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-gray-900 dark:text-gray-100 transition"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
