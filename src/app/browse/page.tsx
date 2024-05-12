import { Button } from "@/components/ui/button";
import Link from "next/link";

import { getRooms } from "@/data-access/room";
import { unstable_noStore } from "next/cache";
import { RoomCard } from "./room-card";
import { SearchBar } from "./search-bar";


export default async function Home({searchParams}:{searchParams : {search : string}}) {
  
    unstable_noStore();
    const rooms = await getRooms(searchParams.search);

  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="mb-12">
      <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room}/>
      })}
      </div>
    </main>
  );
}
