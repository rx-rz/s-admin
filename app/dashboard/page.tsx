import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAdminDashboardDetails } from "./core/actions";

import { LastFiveCustomers } from "./components/last-five-customers";
import { LastFivePayments } from "./components/last-five-payments";

export default async function Dashboard() {
  const { response: dashboardDetails } = await getAdminDashboardDetails();

  return (
    <div>
      <h1 className="text-2xl font-bold opacity-80">Dashboard</h1>
      <div className="grid grid-cols-3 gap-2 mt-8">
        <Card className="bg-accent_one text-white">
          <CardHeader>
            <CardTitle>${dashboardDetails?.totalProfit}</CardTitle>
            <CardDescription>Total Profit</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-accent_one">
          <CardHeader>
            <CardTitle className="text-accent_one">
              {" "}
              {dashboardDetails?.noOfAvailableRooms}
            </CardTitle>
            <CardDescription>Total No. Of Available Rooms</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="mt-4">
        <LastFiveCustomers
          lastFiveCustomers={dashboardDetails?.lastFiveCustomers}
        />
      </div>
      <div className="mt-4">
        <LastFivePayments
          lastFivePayments={dashboardDetails?.lastFivePayments}
        />
      </div>
    </div>
  );
}
