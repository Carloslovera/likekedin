import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    foto: z.string(),
    bio: z.string(),
    skills: z.array(z.string()).optional(),
    linkedin: z.string().url().optional(),
    email: z.string().email().optional(),
  }),
});

export const collections = { team };