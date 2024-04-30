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
  const isLoggedIn = !!session.data;

  return (
    <div className="flex items-center gap-2">
      {" "}
      {/* Added 'items-center' to align items vertically */}
      <Avatar>
        <AvatarImage src={session.data?.user?.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{session.data?.user?.name}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {isLoggedIn ? (
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOutIcon className="mr-2" /> Sign Out
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => signIn()}>
              <LogInIcon className="mr-2" />
              Sign In
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export function Header() {
  const session = useSession();
  return (
    <header className="container mx-auto py-1 bg-blue-100 dark:bg-gray-900">
      <div className="flex justify-between items-center">
 
        {/* Added 'items-center' to align items vertically */}
       <Link href="/" className="flex items-center hover:opacity-80 whitespace-nowrap">
          <div>
            <Image src="/logo.png" alt="logo" width="60" height="60" />
          </div>
          <div className="text-lg font-medium">Dev Finder</div>
        </Link>
        <div className="flex items-center gap-4 ">
          {/* Added 'items-center' to align items vertically */}
          <AccountDropdown />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
