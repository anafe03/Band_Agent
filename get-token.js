import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://alyezazlyelroabhrdak.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFseWV6YXpseWVscm9hYmhyZGFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDc3MzUxNCwiZXhwIjoyMDY2MzQ5NTE0fQ.P7h6b5HqWM0wBzryak2oCp602OR42yHauZQ-brl7gLA'
)

const { data, error } = await supabase.auth.signInWithPassword({
  email: 'austinnafe@aol.com',
  password: 'password123'
})

console.log('ACCESS TOKEN:', data?.session?.access_token)
