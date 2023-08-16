import React from 'react'
import { footerList } from '../../constants'

function FooterBot() {
  return (
    <div className='w-full bg-[#131A22] py-8'>
      <div className='xl:max-w-5xl  mx-auto'>
        <div className='w-full grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-3  gap-3 place-content-center text-gray-400'>
          {
            footerList.map((item)=>(
              <div key={item._id} >
                <h3 className='w-30 font-semibold text-[14px] group-hover: underline text-[#DDD] leading-2 mb-[1px] cursor-pointer'>{item.title}</h3>
                <p className=' w-33 tracking-tight text-[12px] text-[#999] 
                group-hover: underline leading-1 cursor-pointer'>{item.des}</p>
              </div>
            ))
          }
        </div>
        <div className='w-full place-content-center py-4 text-white'>
          <div className='w-full'>
          <ul className='xl:w-full flex items-center justify-center gap-3'>
            <li className='text-sm items-center justify-center py-1 hover:underline cursor-pointer'>Conditions of Use & Sale</li>
            <li className='text-sm items-center justify-center py-1 hover:underline cursor-pointer'>Privacy Notice</li>
            <li className='text-sm items-center justify-center py-1 hover:underline cursor-pointer'>Interest-Based Ads</li>
          </ul>
           </div>
          <p className='w-full flex gap-2 text-sm py-2 items-center justify-center '>1996-2023, <span>Amazon.com,</span>Inc, or its affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBot
