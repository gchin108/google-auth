import { SignInBtn } from "@/components/sign-in-btn";
import { auth } from "@/lib/auth";
import { LogOutIcon, LogInIcon } from "lucide-react";
import Image from "next/image";

export const Navbar = async () => {
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);
  return (
    <div className="sticky top-0 flex bg-black z-10">
      <div className="ml-auto flex items-centers gap-2 p-2">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt="profile"
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
        )}
        <SignInBtn type={isLoggedIn ? "logOut" : "logIn"}>
          {!isLoggedIn ? <LogInIcon /> : <LogOutIcon />}
        </SignInBtn>
      </div>
    </div>
  );
};
