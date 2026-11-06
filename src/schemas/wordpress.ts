import { z } from 'zod';

const WordPressMediaSchema = z.object({
  id: z.number(),
  source_url: z.string(),
  alt_text: z.string(),
  media_type: z.string(),
  mime_type: z.string(),
});

export type WordPressMedia = z.infer<typeof WordPressMediaSchema>;

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

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
