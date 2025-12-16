import type { Db } from "mongodb";
import { MongoClient } from "mongodb";

const { MONGODB_URI = "" } = process.env;

let client: MongoClient; // Lazy initialization

const dbName = "Cluster0";

export class MongoDbService {
  static async getDb(): Promise<Db> {
    if (!client) {
      if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables.");
      }
      client = new MongoClient(MONGODB_URI);
      await client.connect();
    }
    return client.db(dbName);
  }
}
