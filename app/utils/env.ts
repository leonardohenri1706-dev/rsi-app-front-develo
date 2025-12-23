const requiredEnvVars = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
] as const;

const env = {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};

// Validate environment variables
if (typeof window === "undefined") {
    // Only strict validation on server/build time to prevent runtime crashes on client if not needed immediately
    // But for Supabase, we need them everywhere.
    const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

    if (missingVars.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVars.join(", ")}`
        );
    }
} else {
    // Client-side check (optional, but good for debugging)
    const missingVars = requiredEnvVars.filter((key) => !process.env[key]);
    if (missingVars.length > 0) {
        console.error(`Missing required environment variables: ${missingVars.join(", ")}`);
    }
}

export default env;
