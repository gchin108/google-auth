import { logIn, logOut } from "@/app/actions/auth-action";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "logIn" | "logOut";
};

export const SignInBtn = ({ children, type }: Props) => {
  return (
    <form action={type === "logIn" ? logIn : logOut}>
      <button type="submit">{children}</button>
    </form>
  );
};
