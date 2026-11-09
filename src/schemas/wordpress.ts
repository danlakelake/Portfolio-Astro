import { z } from 'zod';

// Media Schema
const WordPressMediaSchema = z.object({
  id: z.number(),
  source_url: z.string(),
  alt_text: z.string(),
  media_type: z.string(),
  mime_type: z.string(),
});

export type WordPressMedia = z.infer<typeof WordPressMediaSchema>;

// Profile Schema
export const ProfileSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  acf: z.object({
    profile_name: z.string(),
    professional_title: z.enum(['frontend', 'backend', 'fullstack']),
    profile_image: z.url(),
    linkedin_url: z.url(),
    github_url: z.url(),
    behance_url: z.url(),
    phone_number: z.string(),
  }),
});

export type Profile = z.infer<typeof ProfileSchema>;

// Projects Schema
export const ProjectSchema = z.object({
  id: z.number(),
  acf: z.object({
    project_url: z.string(),
    github_url: z.string(),
  }),
  _embedded: z.object({
    'wp:featuredmedia': z.array(WordPressMediaSchema),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;

// Experiences Schema
export const ExperienceSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  acf: z.object({
    company: z.string(),
    location: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    currently_working: z.boolean(),
    employment_type: z.string(),
    work_arrangement: z.string(),
  }),
});

export type Experience = z.infer<typeof ExperienceSchema>;
