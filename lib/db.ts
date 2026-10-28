import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL!);

export async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS participants (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL UNIQUE,
        state TEXT NOT NULL DEFAULT '',
        district TEXT NOT NULL DEFAULT '',
        block TEXT DEFAULT '',
        gp TEXT DEFAULT '',
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers JSONB NOT NULL,
        completed_at TIMESTAMPTZ NOT NULL,
        time_taken INTEGER NOT NULL
      )
    `;
  } catch (err) {
    console.error("initDB CREATE TABLE error:", err);
  }

  // Run each ALTER separately with its own try-catch
  // so one failure doesn't block the rest
  const alters = [
    sql`ALTER TABLE participants ADD COLUMN IF NOT EXISTS state TEXT NOT NULL DEFAULT ''`,
    sql`ALTER TABLE participants ADD COLUMN IF NOT EXISTS district TEXT NOT NULL DEFAULT ''`,
    sql`ALTER TABLE participants ADD COLUMN IF NOT EXISTS block TEXT DEFAULT ''`,
    sql`ALTER TABLE participants ADD COLUMN IF NOT EXISTS gp TEXT DEFAULT ''`,
  ];

  for (const alter of alters) {
    try {
      await alter;
    } catch {
      // Column likely already exists — safe to ignore
    }
  }
}