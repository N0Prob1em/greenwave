import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://nwybeuabycyiazyoohqr.supabase.co',
  import.meta.env.VITE_SUPABASE_CONFIG_SECRET
  );