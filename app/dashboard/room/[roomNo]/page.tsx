import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { BackButton } from "../../components/back-button";
import { DashboardCell } from "../../components/dashboard-cell";
import { DashboardGrid } from "../../components/dashboard-grid";
import { getRoomDetails } from "../../core/actions";

export default async function RoomDetails({
  params,
}: {
  params: { roomNo: string };
}) {
  const { response: room, error } = await getRoomDetails(params.roomNo);
  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium ">Room {room?.roomNo}</h1>
        </div>
      </div>
      <div className="my-10">
        <DashboardGrid title="Room Details">
          <DashboardCell title="Room Number" value={room?.roomNo || 0} />
          <DashboardCell
            title="Date Created"
            value={new Date(room?.createdAt || "").toDateString()}
          />
          <DashboardCell title="Room Type" value={room?.roomType.name || ""} />
          <DashboardCell title="Status" value={room?.status || ""} />
          <DashboardCell
            title="Price"
            value={`$${room?.roomType.price}` || ""}
          />
          <DashboardCell
            title="No Of Times Booked"
            value={room?.noOfTimesBooked || 0}
          />
        </DashboardGrid>
      </div>

      <Table>
        <TableCaption>Bookings made for room {room?.roomNo}</TableCaption>
        <TableBody>
          {room?.bookings && room?.bookings.length > 0 ? room?.bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>
                <DashboardCell title="Booking ID" value={booking.id} />
              </TableCell>
              <TableCell>
                <DashboardCell title="Amount" value={booking.amount} />
              </TableCell>
              <TableCell>
                <DashboardCell
                  title="Start Date"
                  value={new Date(booking.startDate || "").toDateString()}
                />
              </TableCell>
              <TableCell>
                <DashboardCell
                  title="End Date"
                  value={new Date(booking.endDate || "").toDateString()}
                />
              </TableCell>
              <TableCell>
                <DashboardCell title="Status" value={booking.status} />
              </TableCell>
              <TableCell>
                <DashboardCell title="Booking ID" value={booking.id} />
              </TableCell>
              <TableCell>
                <DashboardCell title="Room No" value={booking.roomNo} />
              </TableCell>
              <TableCell>
                <DashboardCell
                  title="Date Made"
                  value={new Date(booking.createdAt || "").toDateString()}
                />
              </TableCell>
              </TableRow>
            )
          ) : (
            <TableRow>
              <TableCell colSpan={5}>No bookings made for room {room?.roomNo}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
