
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { TagList } from "@/components/tag-list";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { SplitTags } from "@/lib/auth";
import { GithubIcon, PencilIcon } from "lucide-react";

import DeleteRoomButton from "./delete-room-button";

export function UserRoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader className="relative">
        <Button className="absolute top-2 right-2" size="icon">
        <Link href={`/edit-rooms/${room.id}`}><PencilIcon/></Link>
        </Button>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <TagList tags={SplitTags(room.tags)} />
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center"
            target="_blank"
          >
            <GithubIcon />
            Github Repo
          </Link>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
        <DeleteRoomButton room={room} />
      </CardFooter>
    </Card>
  );
}
