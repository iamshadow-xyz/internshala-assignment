import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import db from '@/db'
import { Feedback } from '@/db/schema'
import React from 'react'

export default async function page() {
   const Feedbacks = await db.select().from(Feedback)
  return (
    <div>
      <h1 className='text-lg font-medium'>All feedbacks</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    { Feedbacks.map((feedback) => (
        <Card className='mt-5' key={feedback.id}>
            <CardHeader className='border-b'>
                <CardTitle>
                    {feedback.fullName}
                </CardTitle>
                <CardDescription>
                    {feedback.email}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {feedback.feedback}
            </CardContent>
            <CardFooter className='border-t'>
                <CardDescription>
                    {feedback.createdAt?.toLocaleString()}
                </CardDescription>
            </CardFooter>
      </Card>
    ))
}
</div>
    </div>
  )
}
