import React from 'react'
import { midList } from '../../constants'
import FooterMidList from './FooterMidList'
import logo from '../../assets/logo.png'
import LanguageIcon from '@mui/icons-material/Language';

function FooterMid() {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 py-10'>
      <div className='max-w-7xl mx-auto text-gray-300'>
        <div className='w-full grid grid-cols-2 lgl:grid-cols-4 place-items-center items-start px-10 gap-10'>
          {
            midList.map((item)=>(
                <FooterMidList key={item._id} title={item.title} listItem={item.listItem}/>
            ))
          }  
        </div>
      </div>
      </div>
          <div className='w-full flex gap-6 items-center justify-center py-6'>
            <img className='w-20 pt-3 mr-10' src={logo} alt="logo" />
          <div className='flex gap-2'>
            <p className='flex gap-2 items-center ml-10  justify-center border border-gray-500 
            hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'><LanguageIcon/>English</p>
          </div>
          </div>
          <div className='w-full flex items-center justify-center py-2  '>
            <ul className='xl:flex gap-2 items-center sm:grid sm:grid-cols-4 sm:ml-5 md:grid-cols-6'>
              <li className='footerLink'>Australia</li>
              <li className='footerLink'>Brazil</li>
              <li className='footerLink'>Canada</li>
              <li className='footerLink'>France</li>
              <li className='footerLink'>Germany</li>
              <li className='footerLink'>Italy</li>
              <li className='footerLink'>Japan</li>
              <li className='footerLink'>Mexico</li>
              <li className='footerLink'>Netherlands</li>
              <li className='footerLink'>Poland</li>
              <li className='footerLink'>Singapore</li>
              <li className='footerLink'>Spain</li>
              
            </ul>
          </div>
    </div>
  )
}

export default FooterMid
