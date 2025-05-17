import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

// Convert postgresql:// to postgres:// if needed
const dbUrl = process.env.DATABASE_URL.replace(/^postgresql:\/\//, 'postgres://');

console.log('Connecting to database...');
let sql: NeonQueryFunction;
let db: NeonHttpDatabase<typeof schema>;

try {
  sql = neon(dbUrl);
  db = drizzle(sql, { schema });
  console.log('Database connection established successfully');
} catch (error) {
  console.error('Failed to connect to database:', error);
  throw error;
}

export { sql, db };
