"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const session = useSession();
  return (
    <header className="container mx-auto py-2 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <div>LOGO</div>
        <div>
          {session.data ? (
            <Button onClick={() => signOut()}>Signout</Button>
          ) : (
            <Button onClick={() => signIn()}>SignIn</Button>
          )}

          {session.data?.user?.name}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
