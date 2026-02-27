import pool from "../models/db.js";

export const createnewDocument = async (title, content, ownerId) => {
    const query = "INSERT INTO documents (title, content, owner_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [title, content, ownerId];
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error("Failed to create document: " + error.message);
    }
}