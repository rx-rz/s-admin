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
import { getBookings } from "../core/api";
import { Spinner } from "@/components/ui/spinner";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function BookingsList() {
  const { bookings, bookingsLoading } = getBookings();

  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium">Bookings</h1>
        </div>
      </div>
      {bookings && bookings.length > 0 && (
        <Table className="mt-12">
          <TableHeader>
            <TableRow>
              <TableHead>Customer Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Date of booking</TableHead>
              <TableHead>Room booked</TableHead>
              <TableHead>Booking Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.customerEmail}</TableCell>
                <TableCell>{booking.amount}</TableCell>
                <TableCell>{booking.startDate}</TableCell>
                <TableCell>{booking.endDate}</TableCell>
                <TableCell>
                  {new Date(booking.createdAt || "").toDateString()}
                </TableCell>
                <TableCell>{booking.roomNo}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <Link href={"/dashboard/bookings/" + booking.id}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {bookingsLoading && (
        <div className="mt-12">
          <Spinner />
        </div>
      )}
    </div>
  );
}
