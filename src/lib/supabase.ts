import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://juguwhtgmctgnjohnjkq.supabase.co"; // Pegue no painel do Supabase
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Z3V3aHRnbWN0Z25qb2huamtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTEyMDYsImV4cCI6MjA1NjA2NzIwNn0.n6COIlA6R7t_TdeKmEft03A2OqNSr8YulIxXUobGXCA" // Pegue no painel do Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
