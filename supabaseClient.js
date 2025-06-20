import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zdpmhlqjrfnoixtkvnvy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkcG1obHFqcmZub2l4dGt2bnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNjU4MjMsImV4cCI6MjA2NTk0MTgyM30.VYRzzm3OhAx7BdMuofWXTF91uuX9yu3rxFGm-IO_Few";

export const supabase = createClient(supabaseUrl, supabaseKey);
