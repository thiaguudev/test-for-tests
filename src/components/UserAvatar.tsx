import React from "react";
import Image from "next/image";
import { User } from "next-auth";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  user: User;
}

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div>
      <Avatar>
        {user.image ? (
          <div>
            <Image
              fill
              src={user.image}
              alt="User Profile"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user?.name}</span>
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  );
}
