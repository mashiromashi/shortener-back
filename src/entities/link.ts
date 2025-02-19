import { sql } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const link = pgTable('link', {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  shortCode: text("short_code").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})