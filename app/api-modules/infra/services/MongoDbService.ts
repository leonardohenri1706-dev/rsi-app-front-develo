import type { Db } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

const { MONGODB_URI = "" } = process.env;

let client: MongoClient; // Lazy initialization

const dbName = "Cluster0";

export class MongoDbService {
  static async getDb(): Promise<Db> {
    if (!client) {
      if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables.");
      }
      client = new MongoClient(MONGODB_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect();
    }
    return client.db(dbName);
  }
}
