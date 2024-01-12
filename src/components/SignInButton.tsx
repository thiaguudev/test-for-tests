"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function SignInButton() {
  const handleSignInGoogle = () => signIn("google");

  return (
    <Button variant="ghost" onClick={handleSignInGoogle} className="text-xl">
      Sign in
    </Button>
  );
}
