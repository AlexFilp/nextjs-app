import { GoogleBtn } from "@/components/GoogleBtn";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="container pt-24">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="title text-center">Sign In</h1>

        <SignInForm />
        <GoogleBtn />
      </div>
    </div>
  );
}
