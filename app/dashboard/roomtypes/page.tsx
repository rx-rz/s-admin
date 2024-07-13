"use client";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { BackButton } from "../components/back-button";
import { getRoomTypes } from "../core/api";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function RoomtypesList() {
  const { roomTypes, roomTypesLoading } = getRoomTypes();
  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium ">Room types</h1>
        </div>
      </div>
      <main className="grid grid-cols-3 gap-4 p-4">
        {roomTypes.map((roomType) => (
          <Card className="min-h-96 pb-10 relative">
            <CardHeader className="text-xl font-bold">
              {roomType.name}
            </CardHeader>
            <CardDescription className="px-6">
              {roomType.features?.map((feature) => (
                <p key={feature} className="mb-2">
                  {feature}
                </p>
              ))}
              <Link href={"/dashboard/roomtypes/" + roomType.name} className="absolute left-6 bottom-6">
                <Eye />
              </Link>
            </CardDescription>
          </Card>
        ))}
      </main>
    </div>
  );
}
