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

import { useEffect, useState } from "react";
import useFilter from "@/hooks/useFilter";
import User from "../user/user";
import Modal from "../global/modal";

function filterFunction(data, filter) {
  return [...data].filter((employee) => {
    if (filter == "") return true;
    return (
      employee?.nombre?.toLowerCase()?.includes(filter?.toLowerCase()) ||
      employee?.email?.toLowerCase()?.includes(filter?.toLowerCase())
    );
  });
}

export default function Body() {
  const [filter, setFilter] = useState("");

  const [fetchData, data, loading, _] = useQuery("", "GET");

  const [user, setUser] = useState(null);

  const filterData = useFilter(data, filter, filterFunction);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {user != undefined && (
        <Modal onClick={() => setUser(null)}>
          <User {...user} />
        </Modal>
      )}
      <main className="min-h-[calc(100dvh-6.5rem)] w-full pt-10 max-w-[1100px] mx-auto">
        <aside>
          <input
            type="text"
            className="border border-gray-500 rounded-xl outline-none px-5 py-2 w-[clamp(200px,100%,300px)] mb-5"
            placeholder="Nombre o correo de la persona"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
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
              {filterData != undefined &&
                loading == false &&
                filterData.map((employee, index) => (
                  <TableRow key={index} onClick={() => setUser(employee)}>
                    <TableCell>{employee.imagen}</TableCell>
                    <TableCell>{employee.cedula}</TableCell>
                    <TableCell>{employee.nombre}</TableCell>
                    <TableCell className="text-center lowercase">
                      {employee.email}
                    </TableCell>
                    <TableCell>{employee.estado}</TableCell>
                  </TableRow>
                ))}
              {(data == undefined || loading == true) &&
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
                    <TableCell>
                      <p className="w-full h-5 bg-gray-400 rounded-xl animate-pulse"></p>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </aside>
      </main>
    </>
  );
}
