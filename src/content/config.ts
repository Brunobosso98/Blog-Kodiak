import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
      bio: z.string(),
    }),
    category: z.string(),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  posts,
};