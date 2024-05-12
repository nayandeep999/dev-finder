"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AccountDropdown() {
  const session = useSession();

  return (
    <div className="flex items-center gap-2">
      {" "}
      {/* Added 'items-center' to align items vertically */}
      <Avatar>
        <AvatarImage src={session.data?.user?.image ?? ""} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{session.data?.user?.name}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <header className="container mx-auto py-1 bg-blue-100 dark:bg-gray-900 z-10 relative">
      <div className="flex justify-between items-center">
        {/* Added 'items-center' to align items vertically */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 whitespace-nowrap"
        >
          <div>
            <Image src="/logo.png" alt="logo" width="60" height="60" />
          </div>
          <div className="text-lg font-medium">Dev Finder</div>
        </Link>

        <nav className="flex gap-8">
          {isLoggedIn && (
            <>
              <Link className="hover:underline" href="/browse">
                Browse
              </Link>

              <Link className="hover:underline" href="/your-rooms">
                Your Rooms
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4 ">
          {isLoggedIn && <AccountDropdown />}
          {!isLoggedIn && (
            <Button variant="outline" onClick={() => signIn("github")}>
              <LogInIcon className="mr-2" /> Sign In{" "}
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
