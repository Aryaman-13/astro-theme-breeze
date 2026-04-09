import { file, glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "zod";

function slug() {
  return z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, "Invalid slug");
}

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(128),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      category: z.string().optional(),
      tags: z.array(reference("tags")).optional().default([]),
      summary: z.string().optional().default(""),
      externalUrl: z.string().url().optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),
      new: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).optional().default([]),
    links: z
      .object({
        homepage: z.string().url().optional(),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
    status: z
      .enum(["planning", "in-progress", "completed", "archived"])
      .default("completed"),
    image: z.string().optional(),
  }),
});

const categories = defineCollection({
  loader: file("./src/content/miscs/categories.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string().max(32),
      slug: slug(),
      description: z
        .string()
        .max(512)
        .optional()
        .default("")
        .describe("In markdown format"),
      icon: z.string().optional().default("mdi:folder"),
    }),
});

const tags = defineCollection({
  loader: file("./src/content/miscs/tags.json"),
  schema: z.object({
    name: z.string().max(32),
    slug: slug(),
    description: z
      .string()
      .max(512)
      .optional()
      .default("")
      .describe("In markdown format"),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const educationTimeline = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/education/timeline",
  }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    gpa: z.string().optional(),
  }),
});

const educationCourses = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/education/courses",
  }),
  schema: z.object({
    name: z.string(),
    provider: z.string(),
    year: z.string(),
    link: z.string().url().optional(),
    icon: z.string().optional(),
  }),
});

const experienceWork = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/experience/work",
  }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    startDate: z.coerce.date(),
    location: z.string().optional(),
    type: z
      .enum(["full-time", "part-time", "internship", "contract", "freelance"])
      .optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const experienceInvolvement = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/experience/involvement",
  }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  posts,
  projects,
  categories,
  tags,
  pages,
  educationTimeline,
  educationCourses,
  experienceWork,
  experienceInvolvement,
};
