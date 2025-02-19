
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

let db: PostgresJsDatabase<Record<string, unknown>> | undefined;

async function connect(): Promise<void> {
  const connectionString = process.env.DATABASE_URL;
  // const schema = "dummy"; // for testing purposes
  try {
    const client = postgres(connectionString, { prepare: true});

    // for testing purposes: set search_path using a parameterized query
    // await client`SELECT set_config('search_path', ${schema + ',public'}, false)`;

    db = drizzle(client);
    console.info("Connected to client");
  } catch (error) {
    console.error("Could not connect to db", error);
    process.exit(1);
  }
}

function getDB(): PostgresJsDatabase<Record<string, unknown>> | undefined {
  return db;
}

export { connect, getDB };
