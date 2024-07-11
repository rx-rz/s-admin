import Link from "next/link";
import { DashboardCell } from "../../components/dashboard-cell";
import { getCustomerDetails } from "../../core/actions";
import { ArrowLeftIcon } from "lucide-react";
import { DashboardGrid } from "../../components/dashboard-grid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BackButton } from "../../components/back-button";

export default async function CustomerDetails({
  params,
}: {
  params: { email: string };
}) {
  const { response: customerDetails } = await getCustomerDetails(params.email);
  const customer = customerDetails?.customer;
  if (customer) {
    return (
      <div>
        <div className="flex items-center gap-5">
          <BackButton />
          <div>
            <h1 className="text-xl font-medium">
              {customer.firstName} {customer.lastName}
            </h1>
            <p>{customer.email}</p>
          </div>
        </div>
        <div className="my-10">
          <DashboardGrid title="Customer Details">
            <DashboardCell title="First Name" value={customer.firstName} />
            <DashboardCell title="Last Name" value={customer.lastName} />
            <DashboardCell
              title="Date Joined"
              value={new Date(customer.createdAt || "").toDateString()}
            />
            <DashboardCell title="Zip Code" value={customer?.zip || ""} />
            <DashboardCell
              title="Phone Number"
              value={customer?.phoneNo || ""}
            />
            <DashboardCell title="Address" value={customer?.address || ""} />
          </DashboardGrid>
        </div>
        <Table className="mb-10">
          <TableCaption>Bookings made by customer</TableCaption>
          <TableBody>
            {customer.bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <DashboardCell title="Booking ID" value={booking.id} />
                </TableCell>
                <TableCell>
                  <DashboardCell title="Amount" value={`$${booking.amount}`} />
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
                    value={new Date(booking.endDate).toDateString()}
                  />
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
            ))}
          </TableBody>
        </Table>

        <Table>
          <TableCaption>Payments made by customer</TableCaption>
          <TableBody>
            {customer.payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <DashboardCell
                    title="Payment Reference"
                    value={payment.reference}
                  />
                </TableCell>
                <TableCell>
                  <DashboardCell title="Amount" value={payment.amount} />
                </TableCell>
                <TableCell>
                  <DashboardCell
                    title="Payed At"
                    value={payment.payedAt || "Not paid yet"}
                  />
                </TableCell>
                <TableCell>
                  <DashboardCell title="Status" value={payment.status} />
                </TableCell>
                <TableCell>
                  <DashboardCell title="Booking ID" value={payment.bookingId} />
                </TableCell>
                <TableCell>
                  <DashboardCell title="Room No" value={payment.roomNo} />
                </TableCell>
                <TableCell>
                  <DashboardCell
                    title="Date Made"
                    value={new Date(payment.createdAt || "").toDateString()}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  } else {
    return <></>;
  }
}
