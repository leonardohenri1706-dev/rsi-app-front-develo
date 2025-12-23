import { supabase } from "../services";
import type { User } from "../../domain/entities/User";

export class UserRepository {
  constructor() { }

  private async withTimeout<T>(promise: PromiseLike<T>, ms: number = 5000): Promise<T> {
    const timeout = new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Supabase request timed out")), ms)
    );
    return Promise.race([Promise.resolve(promise), timeout]);
  }

  public async findByEmail(email: string): Promise<User | null> {
    try {
      const response = await this.withTimeout(
        supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single()
      );
      const { data, error } = response as any; // Cast to avoid generic complexity with Supabase types

      if (error || !data) return null;
      return data as User;
    } catch (err) {
      console.error("UserRepository.findByEmail error:", err);
      return null;
    }
  }

  public async create(data: Partial<User>) {
    try {
      const response = await this.withTimeout(
        supabase
          .from("users")
          .insert(data)
          .select()
          .single()
      );
      const { data: created, error } = response as any;

      if (error) throw new Error(error.message);
      return created;
    } catch (err) {
      console.error("UserRepository.create error:", err);
      throw err;
    }
  }

  public async update(id: string, data: Partial<User>) {
    try {
      const response = await this.withTimeout(
        supabase
          .from("users")
          .update(data)
          .eq("id", id)
          .select()
          .single()
      );
      const { data: updated, error } = response as any;

      if (error) throw new Error(error.message);
      return updated;
    } catch (err) {
      console.error("UserRepository.update error:", err);
      throw err;
    }
  }
}
