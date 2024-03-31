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

  // const [get, set] = useSearchParams();

  // const [fetchData, data, loading, error] = useQuery("", "GET");

  // const [user, setUser] = useState(null);

  // const filterData = useFilter(data, filter, filterFunction);

  // useEffect(() => {
  //   fetchData().then((data) => {
  //     const userParam = get("user");
  //     if (userParam == null) return;
  //     const userToShow = [...data].find(
  //       (employee) => employee.cedula == userParam
  //     );
  //     setUser(userToShow);
  //   });
  // }, []);

  return (
    <>
      {/* {user != undefined && (
        <Modal onClick={() => setUser(null)}>
          <User {...user} />
        </Modal>
      )} */}
      <main className="min-h-[calc(100dvh-6.5rem)] w-full pt-10 max-w-[1100px] mx-auto">
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

          <table className="w-[clamp(800px, 80vw,1200px)] border border-black h-[500px]"> 
            <caption>Lista de empleados</caption>
            <thead className="w-full">
              <tr>
                <th>Imagen</th>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Cargo</th>
                <th>Area</th>
                <th>Movil</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          {/* <Table>
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
              {!error &&
                filterData != undefined &&
                loading == false &&
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
                    <TableCell>{employee.movil}</TableCell>
                    <TableCell>{employee.area}</TableCell>
                    <TableCell>{employee.estado}</TableCell>
                  </TableRow>
                ))}
              {(data == undefined || loading == true || error) &&
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
          </Table> */}
        </aside>
      </main>
    </>
  );
}
