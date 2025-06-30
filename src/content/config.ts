import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Fayaz Ahmed'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };