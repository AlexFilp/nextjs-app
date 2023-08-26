import Link from "next/link";

type Props = {
  posts: any[];
};

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      <p className="my-2 text-lg">Total posts: {posts.length}</p>
      <ul className="flex flex-col gap-[12px] pb-[30px]">
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
};
