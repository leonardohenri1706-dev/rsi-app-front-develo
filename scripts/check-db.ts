import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase environment variables for build check.");
    // We don't exit with error here to allow build to proceed if strictly desired, 
    // but for Vercel integration we want to fail fast if keys are missing.
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkConnection() {
    console.log("Verifying Supabase connection...");
    try {
        const { data, error } = await supabase.from("users").select("count", { count: "exact", head: true });

        if (error) {
            console.error("❌ Failed to connect to Supabase:", error.message);
            process.exit(1);
        }

        console.log("✅ Supabase connection verified.");
    } catch (err) {
        console.error("❌ Unexpected error verifying Supabase connection:", err);
        process.exit(1);
    }
}

checkConnection();
