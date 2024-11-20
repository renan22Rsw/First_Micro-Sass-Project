"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface UserInfoProps {
  user: Session["user"];
}

const UserInfo = ({ user }: UserInfoProps) => {
  if (!user) return;

  return (
    <div className="flex items-center justify-center space-x-4">
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span>{user?.email}</span>

      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default UserInfo;
