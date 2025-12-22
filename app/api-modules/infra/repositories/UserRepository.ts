import { supabase } from "../services";
import type { User } from "../../domain/entities/User";

export class UserRepository {
  constructor() { }

  public async findByEmail(email: string): Promise<User | null> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) return null;
    return data as User;
  }

  public async create(data: Partial<User>) {
    const { data: created, error } = await supabase
      .from("users")
      .insert(data)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return created;
  }

  public async update(id: string, data: Partial<User>) {
    const { data: updated, error } = await supabase
      .from("users")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return updated;
  }
}
