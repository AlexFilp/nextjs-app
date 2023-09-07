"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

type Props = {
  text: string;
};

export const GoogleBtn = ({ text }: Props) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      className="googleBtn group flex justify-center items-center gap-3 hover:underline text-gray-900 dark:text-gray-100 transition"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <FcGoogle className="text-[23px] group-hover:scale-125 group-focus:scale-125  transition" />
      {text} with Google
    </button>
  );
};
