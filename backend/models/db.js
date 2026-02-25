import { Pool } from "pg";
import { configDotenv } from "dotenv";

configDotenv();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect()
.then(() => console.log("Connected to PostgreSQL database"))
.catch(err => console.error("Failed to connect to PostgreSQL database:", err));

export default pool;