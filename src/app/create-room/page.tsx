import { CreateRoomForm } from "./create-room-form";
import { unstable_noStore } from "next/cache";


export default function CreateRoomPage(){

    unstable_noStore();

    return <div className="container mx-auto flex flex-col gap-8 pt-10 pb-10">
        <h1 className="text-4xl font-bold p-2">Create Room</h1>
        <CreateRoomForm/>
    </div>
}