import React, { useState } from 'react'
import AppInp from './AppInp'
import AppDropdown from './AppDropdown'
import AppBtn from './AppBtn'

function AppForm() {
  return (
    <>
    <div className='flex justify-center items-center'>
        <div className='p-5 rounded shadow-2xl my-5'>
        <div className='flex space-x-8'>
            <div><AppInp placeholder="Yor Name"/></div>
            <div><AppInp placeholder="Email Address"/></div>
        </div>
           <div>
            <AppInp placeholder="Your Phone Number"/>
            <AppInp placeholder="Interested In"/>
            <AppInp placeholder="How can I help you ?"/>
           </div>
           <div>
            <AppBtn label="Send Message"/>
           </div>
        </div>
    </div>
    </>
  )
}

export default AppForm