import { NextResponse } from "next/server";
import menu from "@/data/menu.js";
import { delay } from "@/utils";

export async function GET() {
await delay(2000);
  return NextResponse.json({data: menu});
}