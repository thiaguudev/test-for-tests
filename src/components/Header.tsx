// "use client";

import React from "react";
import Link from "next/link";

import { getAuthSession } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserAvatar from "./UserAvatar";
import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";

export default async function Header() {
  const session = await getAuthSession();

  return (
    <header className="flex items-center justify-between h-[65px] gap-8 px-4 mx-auto text-xl border-b bg-white z-30 w-full">
      <Navbar />
      <div className="flex justify-between items-center gap-5">
        <ModeToggle />
        {session?.user ? (
          <>
            <ul className="flex gap-8">
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="/account">Account</Link>
              </li>
            </ul>
            <UserAvatar user={session?.user} />
            {/* <SignOutButton /> */}
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}
