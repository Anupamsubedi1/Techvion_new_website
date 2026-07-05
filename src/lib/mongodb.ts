import { MongoClient, type Db } from "mongodb";

/**
 * Shared MongoDB Atlas client.
 *
 * The connected client promise is cached on `globalThis` so that Next.js does
 * not open a new connection pool on every request (in production) or on every
 * hot-reload (in development). Reads `MONGODB_URI` / `MONGODB_DB` from the env.
 */
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set (add it to .env.local)");
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(process.env.MONGODB_DB ?? "techvion");
}
