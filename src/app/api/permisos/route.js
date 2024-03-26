import { NextResponse } from "next/server";
import * as db from "../database";

export async function GET(req) {
  const url = req.nextUrl;

  const currentData = new Date();

  let day = +url.searchParams.get("day") || currentData.getDate();
  let month = +url.searchParams.get("month") || currentData.getMonth() + 1;
  let year = +url.searchParams.get("year") || currentData.getFullYear();

  console.log({ day, month, year });

  console.log(url);
  try {
    const permisos = await db.Permisos.findAll({
      include: { model: db.Empleado, as: "empleado" },
    });
    return NextResponse.json(permisos);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Base de datos caida" }, { status: 404 });
  }
}
