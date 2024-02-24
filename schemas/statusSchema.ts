import { z } from 'zod';

export const statusSchema = z.object({
    updated_at: z.string().datetime(),
    dependencies: z.object({
        database: z.object({
            version: z.string(),
            max_connections: z.number(),
            opened_connections: z.number(),
        }),
    }),
}).strict();

export type StatusResponse = z.infer<typeof statusSchema>;
