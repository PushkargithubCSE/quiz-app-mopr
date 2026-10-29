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
      // column already exists
    }
  }

  try {
    await sql`CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)`;
    await sql`INSERT INTO settings (key, value) VALUES ('quiz_active', 'true') ON CONFLICT (key) DO NOTHING`;
  } catch (err) {
    console.error("settings init error:", err);
  }
}