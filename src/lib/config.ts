import { z } from 'zod'

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().url().optional(),
  VITE_SUPABASE_ANON_KEY: z.string().optional(),
  VITE_API_URL: z.string().url().default('http://localhost:8000'),
  VITE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  VITE_ENABLE_AI: z.string().transform((val) => val === 'true').default('false'),
  VITE_ENABLE_NOTION_SYNC: z.string().transform((val) => val === 'true').default('false'),
})

export const config = envSchema.parse({
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_ENV: import.meta.env.MODE,
  VITE_ENABLE_AI: import.meta.env.VITE_ENABLE_AI,
  VITE_ENABLE_NOTION_SYNC: import.meta.env.VITE_ENABLE_NOTION_SYNC,
})

export type Config = z.infer<typeof envSchema>