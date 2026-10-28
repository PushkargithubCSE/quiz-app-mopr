import { sql, initDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await initDB();
    const phone = req.nextUrl.searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ error: "missing phone" }, { status: 400 });
    }

    const rows = await sql`
      SELECT id FROM participants WHERE phone = ${phone} LIMIT 1
    `;
    return NextResponse.json({ attempted: rows.length > 0 });

  } catch (err) {
    console.error("check-phone error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}