import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wnjutcynvizkphbupqnn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduanV0Y3ludml6a3BoYnVwcW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwMjQ0MjgsImV4cCI6MTk5MTYwMDQyOH0.HQXBgpb9dwTRo5nLD4SLvQqWx_FpEwwOKK-mPtD2QSY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
