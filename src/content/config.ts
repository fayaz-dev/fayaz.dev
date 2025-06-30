import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
    author: z.string().default('Fayaz Ahmed'),
    relatedPosts: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog,
};