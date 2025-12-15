import type { Db } from "mongodb";
import { MongoClient } from "mongodb";

const { MONGODB_URI = "" } = process.env;
const client = new MongoClient(MONGODB_URI);

const dbName = "Cluster0";

export class MongoDbService {
  static async getDb(): Promise<Db> {
    await client.connect();
    return client.db(dbName);
  }
}
