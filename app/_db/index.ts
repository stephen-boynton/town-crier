import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode
export async function initializeDb() {
  const client = postgres(connectionString!, { prepare: false })
  const db = drizzle(client)
  return db
};
