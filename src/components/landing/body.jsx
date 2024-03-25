"use client";
import useQuery from "@/hooks/useQuery";
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
import { useEffect } from "react";

export default function Body() {
  const { employees } = useAuthContext();

  const [fetchData, data, loading, error] = useQuery("", "GET");

  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-[calc(100dvh-6.5rem)] w-full pt-10 max-w-[1100px] mx-auto">
      <aside>
        <input
          type="text"
          className="border border-gray-500 rounded-xl outline-none px-5 py-2 w-[clamp(200px,100%,300px)] mb-5"
          placeholder="Nombre o correo de la persona"
        />
        <Table className="">
          <TableCaption>Lista de empleados</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[100px]">Imagen</TableHead>
              <TableHead>Cedula</TableHead>
              <TableHead className="min-w-[100px]">Nombre</TableHead>
              <TableHead className="text-center">Correo</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data != undefined &&
              data.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.imagen}</TableCell>
                  <TableCell>{employee.cedula}</TableCell>
                  <TableCell>{employee.nombre}</TableCell>
                  <TableCell className="text-center lowercase">
                    {employee.email}
                  </TableCell>
                  <TableCell>{employee.estado}</TableCell>
                </TableRow>
              ))}
            {employees == undefined &&
              data == undefined &&
              Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
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
      </aside>
    </main>
  );
}
