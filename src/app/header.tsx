"use client"

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const session = useSession();
  return (
    <div>
      {session.data ? (
        <Button onClick={() => signOut()}>Signout</Button>
      ) : (
        <Button onClick={() => signIn()}>SignIn</Button>
      )}

      {session.data?.user?.name}
      <ModeToggle />
    </div>
  );
}
