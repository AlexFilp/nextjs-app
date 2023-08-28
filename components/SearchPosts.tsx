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
    <form
      onSubmit={onSubmit}
      className="mt-[20px] flex justify-start align-middle gap-2"
    >
      <input
        className="py-[5px] px-[12px] w-full  outline-none border border-black rounded-md focus-within:border-red-600 min-[768px]:w-[400px]"
        type="text"
        placeholder="search"
        value={search}
        onChange={onChange}
      />
      <button
        type="submit"
        className="border border-black rounded-md py-1 px-2 hover:border-red-600 hover:text-red-600 focus:border-red-600 focus:text-red-600 transitionAll dark:border-white dark:text-white dark:hover:border-red-600 dark:hover:text-red-600 dark:focus:border-red-600 dark:focus:text-red-600"
      >
        Search
      </button>
    </form>
  );
};
