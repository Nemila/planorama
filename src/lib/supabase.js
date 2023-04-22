import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://heluvngkkydwiankayff.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV2bmdra3lkd2lhbmtheWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNzUwMzksImV4cCI6MTk5NTc1MTAzOX0.wq5QjE1GE8KJVuq6Q2Y5PfvL_lwOKTer_lfU_B9f1U0"
);

export default supabase;
