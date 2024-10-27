import {serial,pgTable,text,timestamp} from "drizzle-orm/pg-core";

import {users} from "./users";

export const posts = pgTable("posts",{
    id:serial("id").primaryKey(),
    userId:text("userId").notNull().references(()=>users.id),
    content:text("content").notNull(),
    createdAt:timestamp("createdAt").notNull().defaultNow(), 
})