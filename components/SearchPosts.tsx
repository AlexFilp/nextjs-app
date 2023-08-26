"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { useState, FormEventHandler, ChangeEventHandler } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};
export const SearchPosts = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setSearch(event.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };
  return (
    <form onSubmit={onSubmit} className="mt-[20px]">
      <input
        className="py-[5px] px-[12px] w-[300px] outline-none border-2 border-black rounded-md focus-within:border-red-600"
        type="text"
        placeholder="search"
        value={search}
        onChange={onChange}
      />
      <button
        type="submit"
        className="border border-black rounded-md p-1 ml-3 hover:border-red-600 hover:text-red-600 focus:border-red-600 focus:text-red-600 transitionAll dark:border-white dark:text-white dark:hover:border-red-600 dark:hover:text-red-600 dark:focus:border-red-600 dark:focus:text-red-600"
      >
        Search
      </button>
    </form>
  );
};
