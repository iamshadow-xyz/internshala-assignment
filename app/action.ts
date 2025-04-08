"use server"

import db from "@/db"
import { Feedback } from "@/db/schema"

export async function createFeedback(formData: FormData) {
    const fullName = formData.get("name") as string
    const email = formData.get("email") as string
    const feedback = formData.get("feedback") as string
    await db.insert(Feedback).values({fullName, email, feedback})
    console.log(email, fullName, feedback)
}