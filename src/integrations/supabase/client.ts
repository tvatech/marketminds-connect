// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fhaaqjohgljuyqamnqbx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYWFxam9oZ2xqdXlxYW1ucWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNzkyMDksImV4cCI6MjA0OTc1NTIwOX0.e7R5tEQtHmzmwovJLxoskv8l4g4Io3gt5tfGcJJx2kc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);