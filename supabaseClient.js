import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irprabvnaufzaakpyhic.supabase.co'
const supabaseAnonKey = 'sb_publishable_eRj2L3iFYpNhzBU14N0tfw_7UWiBHwJ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)