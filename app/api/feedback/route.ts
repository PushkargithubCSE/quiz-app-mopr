import { sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT DEFAULT '',
        rating INTEGER NOT NULL,
        message TEXT NOT NULL,
        submitted_at TIMESTAMPTZ NOT NULL
      )
    `;

    const body = await req.json();
    await sql`
      INSERT INTO feedback (name, phone, rating, message, submitted_at)
      VALUES (
        ${body.name},
        ${body.phone || ''},
        ${body.rating},
        ${body.message},
        ${body.submittedAt}
      )
    `;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await sql`SELECT * FROM feedback ORDER BY submitted_at DESC`;
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}