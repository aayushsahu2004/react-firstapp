import React from 'react'
import Link from 'next/link'

const Header = (props) =>{
  return(
    <div className='h-14 px-5 bg-green-600 flex items-center justify-between'>
        <h2>Logo</h2>
        <div className='flex items-center gap-6'>
          <Link href='/About'>About</Link>  
          <Link href='/Product'>Product</Link>  
          <Link href='/Blog'>Blog</Link>
        </div>
    </div>
  )
}
export default Header