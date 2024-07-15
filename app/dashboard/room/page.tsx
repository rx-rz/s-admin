"use client";
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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function setFilterParams(query: string, value: string) {
  if (typeof window !== undefined) {
    let queries = new URLSearchParams(location.search);
    for (let [key] of Object.entries(queries)) {
      if (key === query) {
        queries.set(key, value);
      }
    }
    location.search = queries.toString();
  }
}
function checkIfQueryParamsExist() {
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(location.search);
    if (
      searchParams.get("ascOrDesc") ||
      searchParams.get("orderBy") ||
      searchParams.get("pageNo") ||
      searchParams.get("limit") ||
      searchParams.get("searchBy")
    ) {
      return true;
    }
    return false;
  }
  return false;
}

export default function RoomList() {
  const [defaultQueries, setDefaultQueries] = useState({
    ascOrDesc: "asc",
    orderBy: "roomNo",
    pageNo: 1,
    limit: 10,
  });
  
  const { rooms, maxPageNo, roomsLoading } = getRooms({
    ascOrDesc: "asc",
    orderBy: "roomNo",
    pageNo: 1,
    limit: 10,
  });

  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium">Rooms</h1>
        </div>
      </div>
      {rooms && rooms.length > 0 && (
        <>
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
          <div className="mt-5 flex gap-4 justify-end">
            <Button variant={"outline"}>Previous</Button>
            <Button variant={"secondary"}>Next</Button>
          </div>
        </>
      )}
      {roomsLoading && (
        <div className="mt-12">
          <Spinner />
        </div>
      )}
    </div>
  );
}
