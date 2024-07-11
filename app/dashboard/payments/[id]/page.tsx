import { BackButton } from "../../components/back-button";
import { DashboardCell } from "../../components/dashboard-cell";
import { DashboardGrid } from "../../components/dashboard-grid";
import { getPaymentDetails } from "../../core/actions";

export default async function PaymentDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { error, response: paymentDetails } = await getPaymentDetails(id);
  if (paymentDetails) {
    return (
      <div>
        <div className="flex items-center gap-5">
          <BackButton />
          <div>
            <h1 className="text-xl font-medium">
              Payment {paymentDetails.reference.toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="my-10">
          <DashboardGrid title="Payment Details">
            <DashboardCell
              title="Reference"
              value={paymentDetails.reference.toUpperCase()}
            />
            <DashboardCell title="Amount" value={paymentDetails.amount} />
            <DashboardCell
              title="Date Of Booking Creation"
              value={new Date(paymentDetails.createdAt || "").toDateString()}
            />
            <DashboardCell
              title="Room Number"
              value={paymentDetails?.roomNo || ""}
            />
            <DashboardCell
              title="Status"
              value={paymentDetails?.status || ""}
            />
          </DashboardGrid>
        </div>
        <div className="my-10">
          <DashboardGrid title="Booking Details">
            <DashboardCell
              title="Booking ID"
              value={paymentDetails.booking.id}
            />
            <DashboardCell
              title="Start Date"
              value={new Date(
                paymentDetails.booking.startDate || ""
              ).toDateString()}
            />
            <DashboardCell
              title="End Date"
              value={new Date(
                paymentDetails.booking.endDate || ""
              ).toDateString()}
            />
            <DashboardCell
              title="Room Number"
              value={paymentDetails.booking.roomNo}
            />
            <DashboardCell
              title="Status"
              value={paymentDetails.booking.status}
            />
          </DashboardGrid>
        </div>
        <div className="my-10">
          <DashboardGrid title="Customer Details">
            <DashboardCell
              title="Customer Email"
              value={paymentDetails.customer.email}
            />
            <DashboardCell
              title="First Name"
              value={paymentDetails.customer.firstName}
            />
            <DashboardCell
              title="Last Name"
              value={paymentDetails.customer.lastName}
            />
            <DashboardCell
              title="ZIP"
              value={paymentDetails.customer?.zip || ""}
            />
            <DashboardCell
              title="Phone Number"
              value={paymentDetails.customer.phoneNo || ""}
            />
          </DashboardGrid>
        </div>
      </div>
    );
  }
  return <></>;
}
