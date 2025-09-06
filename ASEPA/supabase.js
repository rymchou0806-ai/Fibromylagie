// supabase.js
// --------------------------------------
// Remplace par tes infos Supabase
const SUPABASE_URL = 'https://kzqscdqsrivasnqnqjrq.supabase.co'; // URL de ton projet Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cXNjZHFzcml2YXNucW5xanJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NjUyNTgsImV4cCI6MjA3MTU0MTI1OH0.pbyVtlMnsL_x_G_iiSDySeWypi2hpWgx8c2WrAa6iF0'; // Clé publique anonyme

// Importer Supabase depuis CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------------------------
// Fonction pour ajouter un score
export async function addScore(playerName, score) {
  const { data, error } = await supabase
    .from('scores') // Nom de ta table dans Supabase
    .insert([{ player_name: playerName, score: score }]);
  if (error) throw error;
  return data;
}

// ---------------------------
// Fonction pour récupérer tous les scores
export async function getScores() {
  const { data, error } = await supabase
    .from('scores')
    .select('*')
    .order('score', { ascending: false });
  if (error) throw error;
  return data;
}
