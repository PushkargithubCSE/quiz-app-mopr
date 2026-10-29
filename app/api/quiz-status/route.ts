import { sql, initDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const ADMIN_PHONE = "9871291315";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await initDB();
    const rows = await sql`SELECT value FROM settings WHERE key = 'quiz_active'`;
    return NextResponse.json({ active: rows[0]?.value !== "false" });
  } catch (err) {
    console.error("quiz-status GET error:", err);
    return NextResponse.json({ active: true });
  }
}

export async function POST(req: NextRequest) {
  try {
    await initDB();
    const { phone, active } = await req.json();
    if (phone !== ADMIN_PHONE) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
    await sql`
      INSERT INTO settings (key, value) VALUES ('quiz_active', ${active ? "true" : "false"})
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value
    `;
    return NextResponse.json({ active: !!active });
  } catch (err) {
    console.error("quiz-status POST error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}