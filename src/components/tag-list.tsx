"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { badgeVariants } from "./ui/badge";

export function TagList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-2 hover:cursor-pointer">
      {tags.map((tag) => (
        <button
          onClick={() => {
            router.push(`/?search=${tag}`);
          }}
          className={cn(badgeVariants())}
          key={tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
