import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

// Convert postgresql:// to postgres:// if needed
const dbUrl = process.env.DATABASE_URL.replace(/^postgresql:\/\//, 'postgres://');

console.log('Connecting to database...');
let sql;
let db;

try {
  sql = neon(dbUrl);
  db = drizzle(sql);
  console.log('Database connection established successfully');
} catch (error) {
  console.error('Failed to connect to database:', error);
  throw error;
}

export { sql, db };
