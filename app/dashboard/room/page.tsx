"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BackButton } from "../components/back-button";
import { getRooms } from "../core/api";
import { Eye } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export default function RoomList() {
  const { rooms, roomsLoading } = getRooms();
  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium">Rooms</h1>
        </div>
      </div>
      {rooms && rooms.length > 0 && (
        <Table className="mt-12">
          <TableHeader>
            <TableRow>
              <TableHead>Room Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>No. Of Times Booked</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.roomNo}>
                <TableCell>{room.roomNo}</TableCell>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.noOfTimesBooked}</TableCell>
                <TableCell>
                  {new Date(room.createdAt || "").toDateString()}
                </TableCell>
                <TableCell>{room.status}</TableCell>
                <TableCell>
                  <Link href={"/dashboard/room/" + room.roomNo}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {roomsLoading && (
        <div className="mt-12">
          <Spinner />
        </div>
      )}
    </div>
  );
}
