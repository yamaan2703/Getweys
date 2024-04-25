import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function AppFooter() {
  return (
    <>
    <div className='appFooter bg-[#0e0e0f]'>
       <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
        <div className='my-5 p-5'>
          <div className='my-2'>
            <img src='https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo-big.658eab30.webp&w=256&q=75'/>
          </div>
          <div className='icons'>
            <div className='text-white bg-gray-700 text-xl inline-block p-2 mx-1 rounded'>
            <FaFacebookF className=''/>
            </div>
            <div className='text-white bg-gray-700 text-xl inline-block p-2 mx-1 rounded'>
            <FaTwitter className=''/>
            </div>
            <div className='text-white bg-gray-700 text-xl inline-block p-2 mx-1 rounded'>
            <FaSquareInstagram className=''/>
            </div>
            <div className='text-white bg-gray-700 text-xl inline-block p-2 mx-1 rounded'>
            <FaLinkedinIn className=''/>
            </div>
            <div className='text-white bg-gray-700 text-xl inline-block p-2 mx-1 rounded'>
            <FaYoutube className=''/>
            </div>
          </div>
        </div>
        <div className='my-5 p-5 text-white'>
            <h1 className='text-2xl font-semibold'>Explore</h1>
            <p className='hover:text-[#ec193f] py-1 pt-4'>Home</p>
            <p className='hover:text-[#ec193f] py-1'>About</p>
            <p className='hover:text-[#ec193f] py-1'>Blogs</p>
            <br />
            <p className='hover:text-[#ec193f] py-1'>Contact</p>
            <p className='hover:text-[#ec193f] py-1'>Careers</p>
            <p className='hover:text-[#ec193f] py-1'>FAQs</p>
        </div>
        <div className='my-5 p-5 text-white'>
            <h1 className='text-2xl font-semibold'>Services</h1>
            <p className='hover:text-[#ec193f] py-1 pt-4'>Mobile App Development</p>
            <p className='hover:text-[#ec193f] py-1'>Web Development</p>
            <p className='hover:text-[#ec193f] py-1'>Social Media</p>
            <p className='hover:text-[#ec193f] py-1'>Graphics Designing</p>
            <p className='hover:text-[#ec193f] py-1'>Digitial Marketing</p>
            <p className='hover:text-[#ec193f] py-1'>2D & 3D Marketing</p>
            <p className='hover:text-[#ec193f] py-1'>SEO Service </p>
            <p className='hover:text-[#ec193f] py-1'>Content Writing</p>
            <p className='hover:text-[#ec193f] py-1'>Advertisment</p>
            <p className='hover:text-[#ec193f] py-1'>Getson AI Scanner</p>
        </div>
        <div className='my-5 p-5 text-white'>
            <h1 className='text-2xl font-semibold'>Services</h1>
            <div className='flex items-center'>
               <p className='flex items-center pt-5'>
                <div className='text-lg text-[#ec193f]'>
               <FaLocationDot /> 
                </div>
               <span className='text-sm px-1 hover:text-[#ec193f]'>37C Mezzanine Floor, 13th Commercial Street, D.H.A Phase II Extension, Pakistan</span>
               </p>
            </div>
            <div className='flex items-center'>
               <MdAddCall className='text-lg text-[#ec193f]'/>
               <p className='hover:text-[#ec193f] py-1 px-1'>+92(300)-0184999</p>
            </div>
            <div className='flex items-center'>
               <MdEmail className='text-lg text-[#ec193f]'/>
               <p className='hover:text-[#ec193f] py-1 px-1'>info@getweys.com</p>
            </div>
        </div>
       </div>
       <hr className='bg-gray-800 text-gray-800'/>
       <div className='flex items-center justify-between'>
           <div>
            <p className='text-white p-2'><span className='font-bold'>@ 2024 Getweys</span> All Right Reserved.</p>
           </div>
           <div>
            <p className='text-white p-2'>Privacy Policy || Terms Conditions</p>
           </div>
       </div>
    </div>
    </>
  )
}

export default AppFooter

