import { z } from 'zod';

export const zodPostSchema = z.object({
  caption: z.string().nonempty({ message: 'Caption is required' })
  
});