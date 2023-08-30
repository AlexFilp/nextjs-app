import { authOptions } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  return (
    <div className="pt-10 flex flex-col items-center justify-center gap-6">
      {session?.user?.image && (
        <img
          className="rounded-xl w-32"
          src={session.user.image}
          alt="avatar"
        />
      )}
      <h1 className="title text-center">Hi, {session?.user?.name}!</h1>
    </div>
  );
}
