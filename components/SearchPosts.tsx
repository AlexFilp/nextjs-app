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
        className="py-[5px] px-[12px] w-full  outline-none border border-black rounded-md focus-within:border-red-600 tablet:w-[400px] placeholder:text-gray-900 transition"
        type="text"
        placeholder="search"
        value={search}
        onChange={onChange}
      />
      <button type="submit" className="searchBtn">
        Search
      </button>
    </form>
  );
};
