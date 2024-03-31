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
import User from "./user/user";
import Modal from "../global/modal";
import useSearchParams from "@/hooks/useSearchParams";
import TableSkeleton from "../global/table-skeleton";

import AddIcon from "../svg/add-icon";

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

  const [get, set] = useSearchParams();

  const [fetchData, data, loading, error] = useQuery("", "GET");

  const [user, setUser] = useState(null);

  const filterData = useFilter(data, filter, filterFunction);

  useEffect(() => {
    fetchData().then((data) => {
      const userParam = get("user");
      if (userParam == null) return;
      const userToShow = [...data].find(
        (employee) => employee.cedula == userParam
      );
      setUser(userToShow);
    });
  }, []);

  return (
    <>
      {user != undefined && (
        <Modal onClick={() => setUser(null)}>
          <User {...user} />
        </Modal>
      )}
      <main className="min-h-[calc(100dvh-6.5rem)] w-full pt-10 max-w-[1100px] mx-auto relative">
        <AddIcon
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setUser({})}
        />
        <aside>
          <article>
            <input
              type="text"
              className="border border-gray-500 rounded-xl outline-none px-5 py-2 w-[clamp(200px,100%,300px)] mb-5"
              placeholder="Nombre o correo de la persona"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
            <select name="" id="">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </article>

          <Table>
            <TableCaption>Lista de empleados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Imagen</TableHead>
                <TableHead>Cedula</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Movil</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filterData != null ? (
                filterData.map((employee, index) => (
                  <TableRow
                    key={index}
                    onClick={() => {
                      setUser(employee);
                      set("user", employee.cedula);
                    }}
                    className="cursor-pointer"
                  >
                    <TableCell>{employee.imagen}</TableCell>
                    <TableCell>{employee.cedula}</TableCell>
                    <TableCell>{employee.nombre}</TableCell>
                    <TableCell className="lowercase">
                      {employee.email}
                    </TableCell>
                    <TableCell>{employee.cargo}</TableCell>
                    <TableCell>{employee.area}</TableCell>
                    <TableCell>{employee.movil}</TableCell>
                    <TableCell>{employee.estado}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableSkeleton length={8} />
              )}
            </TableBody>
          </Table>
        </aside>
      </main>
    </>
  );
}
