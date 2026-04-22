import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string().optional(),
    architect: z.string().optional(),
    interiors: z.string().optional(),
    description: z.string(),
    en: z
      .object({
        title: z.string().optional(),
        location: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
      })
      .optional(),
    cover: z.string(),
    images: z.array(z.string()),
    category: z.string().default("residencial"),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects };
