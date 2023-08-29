import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://nwybeuabycyiazyoohqr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eWJldWFieWN5aWF6eW9vaHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NTE0MTEsImV4cCI6MjAwMjIyNzQxMX0.VEsMUtl2MJ4G807SKs7VquQJjOjSGpjhEJYajQLcFLk'
  );