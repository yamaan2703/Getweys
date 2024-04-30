import React from 'react';
import AppInp from './AppInp';
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

function AppFooter() {
  return (
    <div className='footer '>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='p-4 md:p-0'>
            <div className='mb-4'>
              <p className='font-semibold py-2'>Subscribe for updates</p>
              <AppInp label="Enter Your Email" icon={MdOutlineEmail} />
            </div>
            <div>
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
          <div className='p-4'>
            <div>
              <h1 className='font-bold text-xl mb-4'>Marketplace</h1>
              <p className='py-1 text-gray-500'>Explore</p>
              <p className='py-1 text-gray-500'>Become a Partner</p>
              <p className='py-1 text-gray-500'>About Us</p>
            </div>
          </div>
          <div className='p-4'>
            <div>
              <h1 className='font-bold text-xl mb-4'>Community</h1>
              <p className='py-1 text-gray-500'>Profile</p>
              <p className='py-1 text-gray-500'>My Collections</p>
            </div>
          </div>
          <div className='p-4'>
            <div>
              <h1 className='font-bold text-xl mb-4'>Powered by Moon Studios</h1>
              <p className='py-1 text-gray-500'>Bridging the gap between the Real World and Web 3.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
