"use client";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "../ui/table";

import { useAuthContext } from "@/context/auth.context";

export default function Body() {
  const { employees } = useAuthContext();

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees == undefined &&
          Array.from({ length: 10 }).map((_, index) => (
            <TableRow>
              <TableCell className="font-medium">
                <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
              </TableCell>
              <TableCell>
                <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
              </TableCell>
              <TableCell>
                <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
              </TableCell>
              <TableCell className="text-right">
                <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
