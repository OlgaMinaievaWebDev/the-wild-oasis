import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://punnveahdocrnzlaapya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bm52ZWFoZG9jcm56bGFhcHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NTkxOTIsImV4cCI6MjA0MzEzNTE5Mn0.adcTzFFe_rVEhKPoQnIDXdI0WZvMo0ZqR5vPy6rAR7Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
