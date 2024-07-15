import { DashboardCell } from "../../components/dashboard-cell";
import { DashboardGrid } from "../../components/dashboard-grid";
import { getBookingDetails } from "../../core/actions";

export default async function BookingDetails({
  params,
}: {
  params: { id: string };
}) {
  const { response: bookingDetails, error } = await getBookingDetails(
    params.id
  );

  return (
    <>
      <div>
        <h1>Booking Details</h1>
      </div>
      <div className="my-10">
        <DashboardGrid title="Booking Details">
          <DashboardCell title="ID" value={bookingDetails?.id || ""} />
          <DashboardCell title="Amount" value={bookingDetails?.amount || 0} />
          <DashboardCell
            title="Date Of Booking Creation"
            value={new Date(bookingDetails?.createdAt || "").toDateString()}
          />
          <DashboardCell title="Status" value={bookingDetails?.status || ""} />
          <DashboardCell
            title="Start Date"
            value={new Date(bookingDetails?.startDate || "").toDateString()}
          />
          <DashboardCell
            title="End Date"
            value={new Date(bookingDetails?.endDate || "").toDateString()}
          />
        </DashboardGrid>
      </div>
      <div className="mb-10">
        <DashboardGrid title="Payment Details">
          <DashboardCell
            title="Reference"
            value={bookingDetails?.payment?.reference.toUpperCase() || ""}
          />
          <DashboardCell
            title="Amount"
            value={bookingDetails?.payment?.amount || 0}
          />
          <DashboardCell
            title="Status"
            value={bookingDetails?.payment?.status || ""}
          />
          <DashboardCell
            title="Date Of Payment"
            value={
              bookingDetails?.payment?.payedAt
                ? new Date(bookingDetails?.payment?.payedAt).toDateString()
                : "Not Paid"
            }
          />
        </DashboardGrid>
      </div>
      <div className="mb-10">
        <DashboardGrid title="Room Details">
          <DashboardCell
            title="Room Number"
            value={bookingDetails?.room?.roomNo || ""}
          />
          <DashboardCell
            title="Room Status"
            value={bookingDetails?.room?.status || ""}
          />
        </DashboardGrid>
      </div>
    </>
  );
}
