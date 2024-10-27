import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema  from "./schemas/users";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql, schema });