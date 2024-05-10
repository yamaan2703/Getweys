import React from 'react'
import AppBtn from './AppBtn'

function Navbar() {
  return (
    // Navbar
     <>
     <div className='navbar'>
        <div className='container'>
            <div className='flex space-x-5 items-center'>
                <div>
                    <img src='https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg'
                    className='w-[50px] h-[50px] object-cover rounded-full'
                    />
                </div>
                <div>
                    <p className='text-white text-lg font-mono'>William Micheal</p>
                </div>
                <div>
                    <AppBtn
                    label="Logout"
                    />
                </div>
            </div>
        </div>
     </div>
     </>
  )
}

export default Navbar