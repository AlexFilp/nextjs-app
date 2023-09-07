import { GoogleBtn } from "@/components/GoogleBtn";
import { SignUpForm } from "@/components/SignUpForm";
import Link from "next/link";

export default async function Signin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 pt-24">
        <h1 className="title text-center">Sign Up</h1>
        <SignUpForm />
        <GoogleBtn text="Sign up" />
      </div>
      <p className="text-center mt-2 font-semibold text-gray-900 dark:text-gray-100 transition">
        Already have an account?{" "}
        <Link href={"/signin"} className="underline text-blue-600">
          Go Sign In.
        </Link>
      </p>
    </>
  );
}
