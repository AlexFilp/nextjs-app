import { GoogleBtn } from "@/components/GoogleBtn";

export default async function Signin() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="title text-center">SignIn</h1>
        <GoogleBtn />
      </div>
    </div>
  );
}
