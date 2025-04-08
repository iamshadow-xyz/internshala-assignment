import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Feedback = pgTable("feedback", {
  id: uuid("id").primaryKey().defaultRandom(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  feedback: text("feedback").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
