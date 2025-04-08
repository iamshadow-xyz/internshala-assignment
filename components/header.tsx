import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='border-b fixed top-0 w-full backdrop-blur-lg'>
        <div className='flex items-center justify-between max-w-3xl mx-auto p-5'>
      <Link href={"/"} className='font- text-xl'>Feedback</Link>
      <nav>
        <Link href={"/admin"} >Admin</Link>
      </nav>
      </div>
    </div>
  )
}
