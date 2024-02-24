import { Schema, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const validateSchema = (schema: Schema, data: unknown) => {
    try {
        schema.parse(data);
    } catch (error) {
        if (error instanceof ZodError) {
            const validationError = fromZodError(error);
            throw new Error(validationError.toString());
        }
        throw error;
    }
};
