import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon } from "lucide-react";

import Link from "next/link";
type Payment = {
  id: string;
  paymentReference: string;
  amount: string;
  customerEmail: string;
  createdAt: string | null;
  bookingId: string;
  status: string;
  payedAt: string;
};
export const LastFivePayments = ({
  lastFivePayments,
}: {
  lastFivePayments: Payment[] | undefined;
}) => {
  return (
    <>
      <div className="mb-2 flex justify-between px-3">
        <p className="text-lg font-medium opacity-80">Last Five Payments</p>
        <Link
          href={"/dashboard/payment"}
          className="underline underline-offset-4"
        >
          View All
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment Reference</TableHead>
            <TableHead>Customer Email</TableHead>
            <TableHead>Amount</TableHead>

            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lastFivePayments &&
            lastFivePayments.map((payment) => (
              <TableRow
                key={payment.id}
                className="font-medium text-base opacity-90"
              >
                <TableCell className="w-[250px] uppercase">
                  {payment.paymentReference}
                </TableCell>
                <TableCell className="w-[300px]">
                  {payment.customerEmail}
                </TableCell>
                <TableCell className="w-[250px] font-bold">
                  ${payment.amount}
                </TableCell>
                <TableCell className="w-[250px]">{payment.status}</TableCell>
                <TableCell className="w-[100px]">
                  <Link href={"/dashboard/payments/" + payment.id}>
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
