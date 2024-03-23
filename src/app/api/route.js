import { NextResponse } from "next/server";
import * as db from "./database";

export async function GET() {
  const empleados = await db.Empleado.findAll();
  return NextResponse.json(empleados);
}
