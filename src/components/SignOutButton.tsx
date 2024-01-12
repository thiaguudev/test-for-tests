"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const handleSignOut = () => signOut();

  return (
    <Button variant="ghost" onClick={handleSignOut} className="text-xl">
      Sign out
    </Button>
  );
}
