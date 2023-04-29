import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3cG9ieXhlcnZ5dWV6d2VvYWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3ODE5ODIsImV4cCI6MTk5ODM1Nzk4Mn0.hn7hsLRfSzPZRoBUymttyBkTmIcqtrZePbwPvfTHsFQ"
);

export default supabase;
