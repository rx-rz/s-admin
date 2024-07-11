import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  address: string | null;
  phoneNo: string | null;
  zip: string | null;
  createdAt: string | null;
};
export const LastFiveCustomers = ({
  lastFiveCustomers,
}: {
  lastFiveCustomers: Customer[] | undefined;
}) => {
  return (
    <>
      <div className="mb-2 flex justify-between px-3">
        <p className="text-lg font-medium opacity-80">Last Five Customers</p>
        <Link
          href={"/dashboard/customers"}
          className="underline underline-offset-4"
        >
          View All
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead>Joined Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lastFiveCustomers &&
            lastFiveCustomers.map((customer) => (
              <TableRow
                key={customer.id}
                className="font-medium text-base opacity-90"
              >
                <TableCell className="w-[250px]">
                  {customer.firstName} {customer.lastName}
                </TableCell>
                <TableCell className="w-[300px]">{customer.email}</TableCell>
                <TableCell className="w-[250px]">{customer.phoneNo}</TableCell>
                <TableCell className="w-[250px]">
                  {new Date(customer.createdAt || "").toDateString()}
                </TableCell>
                <TableCell className="w-[100px]">
                  <Link href={"/dashboard/customers/" + customer.email}>
                    <EyeIcon strokeWidth={2} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
