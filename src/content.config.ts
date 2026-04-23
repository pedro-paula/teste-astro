import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const postsCollection = defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};