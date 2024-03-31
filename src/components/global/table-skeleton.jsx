import { TableCell, TableRow } from "../ui/table";

export default function TableSkeleton({ length }) {
  return Array.from({ length: 9 }).map((_, index) => (
    <TableRow key={index}>
      {Array.from({ length: +length }).map((_, index) => (
        <TableCell key={index}>
          <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
        </TableCell>
      ))}
    </TableRow>
  ));
}
