import { Logo } from "@/components/ui/logo";
import { Bed, BedDouble, Book, DollarSign, UserIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function BookingLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex mx-auto h-screen font-satoshi">
      <aside className="w-[250px] bg-accent_one text-white p-5">
        <div className="flex flex-col gap-8">
          <Link href={"/dashboard"}>
            <Logo className="invert" />
          </Link>
          <div className="flex flex-col gap-4 text-lg font-medium opacity-80">
            <Link
              href="/dashboard/customers"
              className="flex gap-5 items-center"
            >
              <UserIcon /> Customers
            </Link>
            <Link href="/dashboard/room" className="flex gap-5 items-center ">
              <Bed /> Rooms
            </Link>
            <Link href="/dashboard/roomtypes" className="flex gap-5 items-center ">
              <BedDouble />
              Room Types
            </Link>
            <Link href="/dashboard/bookings" className="flex gap-5 items-center ">
              <Book /> Bookings
            </Link>
          </div>
        </div>
      </aside>
      <main className="overflow-y-scroll border-8 border-accent_one flex-1 p-6">
        {children}
      </main>
    </section>
  );
}
