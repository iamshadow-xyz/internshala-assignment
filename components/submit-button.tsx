"use client"

import React from 'react'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

export default function SubmitButton({text}: {text: string}) {
    const {pending} = useFormStatus()
  return (
    <div>
      <Button className='cursor-pointer' disabled={pending} >
        {
            pending ?? <Loader2 className='animate-spin'/>
        }
        {text}
      </Button>
    </div>
  )
}
