import React, {useState,useRef,useEffect}from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion'
import './Header.css'
import SidebarContent from './SidebarContent';
 
function HeaderBottom() {
    const [Sidebar,setSidebar] = useState(false);
    const ref =useRef();
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if( e.target.contains(ref.current)){
                setSidebar(false)
            }
        })
  },[ref,Sidebar])
  return (
    <div className='w-full px-2  h-[42px] items-center bg-amazon_light text-white '>
      <ul className='h-10 flex  gap-2 items-center text-sm tracking-wide '>
        <li onClick={()=>setSidebar(true)} className='headerHover p-2'><MenuOutlinedIcon/>All</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Amazon miniTV</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Sell</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Best Sellers</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Mobiles</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Today's Deals</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Customer Service</li>
        <li className='headerHover p-2 hidden md:inline-flex'>New Release</li>
        <li className='headerHover p-2 hidden md:inline-flex'>Prime<ArrowDropDownOutlinedIcon/></li>
      </ul>
      {
        Sidebar && (
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                <div className='w-full h-full relative'>
                    <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}}
                     className='  w-[70%] sm:w-[300px] h-full bg-white  border-black'>
                    <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-3 '>
                        <AccountCircleIcon/>
                        <h3 className='font-titleFont font-bold text-xl tracking-wide '>Hello, sign in</h3>
                    </div>
                    <SidebarContent 
                    />
                    <span onClick={()=>setSidebar()} className='cursor-pointer absolute top-1 left-[70%] md:left-[300px] sm:left-[300px] w-10 h-10 text-white flex items-center justify-center  
                    hover:bg-red-500 hover:text-white duration-300'><CloseIcon/></span>
                    </motion.div>
                </div>
            </div>
        )}
      
    </div>
  )
}

export default HeaderBottom
