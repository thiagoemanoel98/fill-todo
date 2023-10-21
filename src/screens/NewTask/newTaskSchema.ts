import { z } from 'zod';

export const newTaskSchema = z.object({
  text: z.string().min(3, 'Text must be longer than 3 characters')
});

export type NewTaskSchema = z.infer<typeof newTaskSchema>;
