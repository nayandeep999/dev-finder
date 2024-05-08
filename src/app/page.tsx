import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import { getRooms } from "@/data-access/room";
import { SplitTags, TagList } from "@/components/tag-list";


function RoomCard({room}:{room : Room}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
      <TagList tags={SplitTags(room.tags)} />
        {room.githubRepo && (
          <Link href={room.githubRepo} className="flex items-center" target="_blank">
            <GithubIcon/>
            Github Repo</Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
          </Button>
      </CardFooter>
    </Card>
  );
}
export default async function Home() {
  const rooms = await getRooms();

  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room}/>
      })}
      </div>
    </main>
  );
}
