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
import { getCustomers } from "../core/api";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Customers() {
  const { data, customersAreLoading } = getCustomers();
  return (
    <div>
      <div className="flex items-center gap-5">
        <BackButton />
        <div>
          <h1 className="text-xl font-medium">Customers</h1>
        </div>
      </div>
      {data?.customers && data.customers.length > 0 && (
        <Table className="mt-12">
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Zip</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.firstName}</TableCell>
                <TableCell>{customer.lastName}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  {new Date(customer.createdAt || "").toDateString()}
                </TableCell>
                <TableCell>{customer.phoneNo}</TableCell>
                <TableCell>{customer.zip}</TableCell>
                <TableCell>
                  <Link href={"/dashboard/customers/" + customer.email}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {customersAreLoading && <div>Loading...</div>}
    </div>
  );
}
