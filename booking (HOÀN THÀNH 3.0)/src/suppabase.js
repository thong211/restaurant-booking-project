
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://knskwuachpekzbanpalj.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtuc2t3dWFjaHBla3piYW5wYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MDczODIsImV4cCI6MjAzMTQ4MzM4Mn0.C8lWVDNvjXF-Bh8gJPBdzkeyvYImENhwLDpu7JmLSKA
export const supabase = createClient(supabaseUrl, supabaseKey)
