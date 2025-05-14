import { Loader2Icon } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
        <Loader2Icon className='animate-spin h-10 w-10 text-primary' />
    </div>
  )
}

export default loading