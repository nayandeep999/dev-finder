import { SplitTags, TagList } from "@/components/tag-list";
import { getRoom } from "@/data-access/room";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { DevFinderVideo } from "./video-player";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;

  const room = await getRoom(roomId);

  if (!room) {
    return <h1>No room of this ID found</h1>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          <DevFinderVideo room={room} />
        </div>
      </div>
      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          <p className="text-base text-gray-600">{room?.description}</p>
          <TagList tags={SplitTags(room.tags)} />
          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-sm mt-2"
              target="_blank"
            >
              <GithubIcon />
              Github Repo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
