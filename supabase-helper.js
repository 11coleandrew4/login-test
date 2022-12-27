import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://iwbvyvrwubszybgmzibu.supabase.com';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3YnZ5dnJ3dWJzenliZ216aWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxMDM0MTQsImV4cCI6MTk4NzY3OTQxNH0.1O6XDj9J8YoShLE0vfJYaO9qe0LVs97-62SZuY_UOyg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
