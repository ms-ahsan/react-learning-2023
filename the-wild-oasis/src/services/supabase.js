import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://lkjpoqiuihkfxczuzjjq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxranBvcWl1aWhrZnhjenV6ampxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNDY5ODIsImV4cCI6MjAxNDgyMjk4Mn0.HobHCeJAhuk89bOiU6zIdGMu8mGQFaMtvt-KrtWdr1c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
