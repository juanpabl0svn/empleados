import { NextResponse } from "next/server";
import * as db from "./database";

export async function GET() {
  try {
    const empleados = await db.Empleado.findAll();
    return NextResponse.json(empleados);
  } catch (error) {
    return NextResponse.json({ error: "Base de datos caida" }, { status: 404 });
  }
}
