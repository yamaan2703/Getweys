import React from 'react'
import AppInp from './AppInp'
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";


function AppFooter() {
  return (
    <div className='footer'>
      <div className='container p-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-2'>
          <div className='mx-0 md:mx-0 lg:mx-auto p-5'>
            <div className='p-0 md:p-0 lg:p-5 mx-1'>
              <p className='font-semibold py-2'>Subscribe for updates</p>
              <div>
                <AppInp label="Enter Your Email" icon={MdOutlineEmail}/>
              </div>
            </div>
            <div className='p-0 md:p-0 lg:p-5 mx-1'>
              <p className='font-semibold py-2'>Follow us</p>
              <div className='flex'>
                 <div className='bg-black text-white p-2 rounded-lg text-xl mx-1'>
                  <FaDiscord />
                 </div>
                 <div className='bg-black text-white p-2 rounded-lg text-xl mx-1'>
                  <FaTwitter />
                 </div>
                 <div className='bg-black text-white p-2 rounded-lg text-xl mx-1'>
                  <TbWorld />
                 </div>
              </div>
            </div>
          </div>
          <div className='mx-0 md:mx-0 lg:mx-auto p-5'>
            <h1 className='font-bold text-xl'>Marketplace</h1>
            <p className='py-1 text-gray-500'>Explore</p>
            <p className='py-1 text-gray-500'>Become a Partner</p>
            <p className='py-1 text-gray-500'>About Us</p>
          </div>
          <div className='mx-0 md:mx-0 lg:mx-auto p-5'>
            <h1 className='font-bold text-xl'>Community</h1>
            <p className='py-1 text-gray-500'>Profile</p>
            <p className='py-1 text-gray-500'>My Collections</p>
          </div>
          <div className='mx-0 md:mx-0 lg:mx-auto p-5'>
            <h1 className='font-bold text-xl'>Powered by Moon Studios</h1>
            <p className='py-1 text-gray-500'>Bridging the gap between the Real World and Web 3.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppFooter
