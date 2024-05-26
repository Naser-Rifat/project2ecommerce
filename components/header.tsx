"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router =useRouter()
    const pathname=usePathname()
    const pathnameSegment = pathname.split('/').filter(Boolean)[0];
    console.log(pathnameSegment)
  return (
    <div className=' h-16 w-full bg-sky-800 flex items-center'>
      <h1 className= ' container text-white text-xl '>
        Shop : {pathname === '/' ? "Home":pathnameSegment}
      </h1>
<div>
{  pathnameSegment === "product" && <button
        onClick={() => router.push('/')}
        className="mx-2 px-4 py-2 bg-orange-500 text-white rounded"
      >
        Back to Home Page
      </button>}
</div>
    
    </div>
  )
}

export default Header
