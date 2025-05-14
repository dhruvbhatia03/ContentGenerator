import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header({onSearchInput}:any) {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between items-center bg-gray-900 text-white'>
      {/* <div className='flex gap-2 items-center
       p-2 border rounded-md max-w-lg bg-gray-800 text-white'>
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-none bg-gray-800 text-white' onChange={(event)=>onSearchInput(event.target.value)}
        />
      </div> */}
      <h2 className='text-3xl font-bold ms-10'>Welcome to NeuraWrite</h2>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-sm text-white px-2'>
        🔥 Join Membership just for Rs. 499/Month</h2>
      <UserButton/>
      </div>
    </div>
  )
}

export default Header