import { GoogleBtn } from "@/components/GoogleBtn";
import { SignInForm } from "@/components/SignInForm";
import Link from "next/link";

export default async function Signin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 pt-24">
        <h1 className="title text-center">Sign In</h1>
        <SignInForm />
        <GoogleBtn text="Sign in" />
      </div>
      <p className="text-center mt-2 font-semibold text-gray-900 dark:text-gray-100 transition">
        Dont have an account?{" "}
        <Link href={"/signup"} className="underline text-blue-600">
          Go Sign Up.
        </Link>
      </p>
    </>
  );
}
