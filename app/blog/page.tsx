"use client";
import { useState, useEffect } from "react";
import { Metadata } from "next";
import { ThreeDots } from "react-loader-spinner";
import { getPosts } from "@/services/getPosts";
import { PostsList } from "@/components/PostsList";
import { SearchPosts } from "@/components/SearchPosts";

export const metadata: Metadata = {
  title: "Blog page",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="title">Blog Page</h1>
      <SearchPosts onSearch={setPosts} />
      {loading ? <ThreeDots color="red" /> : <PostsList posts={posts} />}
    </>
  );
}
