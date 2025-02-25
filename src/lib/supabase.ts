import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// 🔹 Carregar variáveis de ambiente
dotenv.config();

const SUPABASE_URL = "https://juguwhtgmctgnjohnjkq.supabase.co";
const SUPABASE_KEY = import.meta.env.PUBLIC_SUPABASE_KEY;

if (!SUPABASE_KEY) {
  console.error("❌ Erro: SUPABASE_KEY não foi encontrada. Verifique seu arquivo .env.local");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
