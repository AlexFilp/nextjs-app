"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const GoogleBtn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      className="googleBtn group flex justify-center items-center gap-3 hover:underline "
      onClick={() => signIn("google", { callbackUrl })}
    >
      <FcGoogle className="text-[23px] group-hover:scale-125 group-focus:scale-125 transition" />{" "}
      Sign in with Google
    </button>
  );
};
