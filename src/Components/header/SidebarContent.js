import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header'
function SidebarContent() {

  return (
    <div  className='sidebar h-full '>
    <div className=' py-3 border-b-[2px] border-b-gray-300'>
        <h3 className='text-xl font-titleFont font-bold mb-1 mt-3 px-10'>Tranding</h3>
        <ul>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer' >Best Sellers </li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>New Releases </li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Movers and Shakers </li>
        </ul>
</div>
    <div className='py-3 border-b-[2px] border-b-gray-300 '>
        <h3 className='text-xl font-titleFont font-bold mb-1 mt-3 px-10'>Digital Content And Devices</h3>
        <ul>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer' >Amazon miniTV- FREE Entertainment </li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Echo & Alexa<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Fire TV <KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Kindle E-Reader & EBooks<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Audible Audiobooks<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Amazon Prime Video<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Amazon Prime Music<KeyboardArrowRightIcon/></li>
        </ul>
</div>
    <div className='py-3 border-b-[2px] border-b-gray-300 '>
        <h3 className='text-xl font-titleFont font-bold mb-1 mt-3 px-10'>Shop By Category</h3>
        <ul>
             <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Mobiles, Computers<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>TV, Appliances, Electronics<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Men's Fashion<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Women's Fashion<KeyboardArrowRightIcon/></li>
            <li className='flex items-center  hover:bg-zinc-200 px-10 py-2 cursor-pointer'>See All<KeyboardArrowDownIcon/></li>
         </ul>
</div>
    <div className='py-3 border-b-[2px] border-b-gray-300 '>
        <h3 className='text-xl font-titleFont font-bold mb-1 mt-3 px-10'>Programs & Features</h3>
        <ul>
             <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Gift Cards & Mobile Recharges<KeyboardArrowRightIcon/></li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Amazon Launchpad</li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Flight Tickets</li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Clearance Store</li>
          </ul>
</div>
    <div className='py-5 border-b-[2px] border-b-gray-300 '>
        <h3 className='text-xl font-titleFont font-bold mb-1 mt-3 px-10'>Help & Settings</h3>
        <ul>
             <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Your Account</li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Customer Service</li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-10 py-2 cursor-pointer'>Sign in</li>
           </ul>
</div>

</div>
  )
}

export default SidebarContent
