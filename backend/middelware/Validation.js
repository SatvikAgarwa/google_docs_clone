import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, "Your name needs to be at least 2 characters!"), [cite: 125]
  email: z.string().email("Oops! That doesn't look like a valid email!"), [cite: 126]
  password: z.string().min(6, "Let's make that password a little stronger!"), [cite: 127]
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email!"), [cite: 165]
  password: z.string().min(1, "Password cannot be empty!"), [cite: 165]
});

export const createDocumentSchema = z.object({
  title: z.string().min(1, "Your document needs a lovely title!"), [cite: 138]
});


export const validateData = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      
      next(); 
    } catch (error) {
      return res.status(400).json({
        success: false, [cite: 306]
        error: error.errors.map(err => err.message), [cite: 308]
      });
    }
  };
};