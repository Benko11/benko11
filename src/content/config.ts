import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishedAt: z.number().optional(),
    description: z.string(),
  }),
});

const linksCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      icon: z.string(),
      link: z.string().default("#"),
      label: z.string(),
    })
  ),
});

export const collections = {
  blog: blogCollection,
  links: linksCollection,
};
