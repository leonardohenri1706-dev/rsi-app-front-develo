import { createClient } from "@supabase/supabase-js";

import env from "@/app/utils/env";

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class SupabaseService {
  static getClient() {
    return supabase;
  }
}
