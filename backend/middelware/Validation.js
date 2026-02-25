import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(2, "Your name needs to be at least 2 characters!"),
    email: z.string().email("Oops! That doesn't look like a valid email!"),
    password: z.string().min(6, "Let's make that password a little stronger!")
});

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email!"),
    password: z.string().min(1, "Password cannot be empty!"),
});

export const createDocumentSchema = z.object({
    title: z.string().min(1, "Your document needs a lovely title!"),
});


export const validateData = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);

            next();
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.message,
            });
        }
    };
};