import React from 'react'
import {Link} from 'react-router-dom';

function FooterTop() {
  return (
    <div className='w-full bg-white '>
      <div className='w-full  border-b-[1px] py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-1'>
            <p className='text-sm'>See Personalized Recommendations</p>
           <Link to='/login'> <button className='w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700'>Sign in</button></Link>
            <p className='text-xs mt-1'>New Customer?{" "}<Link to='/Register'><span className='text-blue-600 ml-1 cursor-pointer'>Start here</span></Link></p>
            
        </div>
      </div>
    </div>
  )
}

export default FooterTop
