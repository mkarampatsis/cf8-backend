import { z } from 'zod';

export const createRoleSchema = z.object({
  role: z.string().min(4),
  description: z.string().optional(),
  active: z.boolean().optional()
})

export const updateRoleSchema = createRoleSchema.partial();