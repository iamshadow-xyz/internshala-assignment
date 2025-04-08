import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='border-t fixed bottom-0 w-full'>
      <footer className='max-w-3xl mx-auto p-5'>
        <p>&copy;{" "}Built by Pandit Pawar – April 2025, <Link target='blank' className='text-red-400' href="https://github.com/iamshadow-xyz">Github</Link></p>
      </footer>
    </div>
  )
}
