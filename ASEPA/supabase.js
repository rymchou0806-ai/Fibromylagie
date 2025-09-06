// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ⚠️ Mets ici tes propres infos Supabase
const SUPABASE_URL = "https://kzqscdqsrivasnqnqjrq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cXNjZHFzcml2YXNucW5xanJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NjUyNTgsImV4cCI6MjA3MTU0MTI1OH0.pbyVtlMnsL_x_G_iiSDySeWypi2hpWgx8c2WrAa6iF0"; // clé anonyme (public)

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fonction : enregistrer un score
export async function addScore(player, score) {
  const { error } = await supabase.from("scores").insert([{ player, score }]);
  if (error) {
    console.error("❌ Erreur insertion :", error);
  } else {
    console.log("✅ Score ajouté :", player, score);
  }
}


