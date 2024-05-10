import React from 'react'
import Navbar from './Navbar'
import AppInp from './AppInp'
import { FaSearch } from "react-icons/fa";
import AddUser from './AddUser';
import ChatList from './ChatList';

function Sidebar() {
  return (
    // SideBar
    <>
       <div className='sidebar bg-[rgba(0,0,0,0.5)] h-screen w-[350px] p-5'>
        <div>
            <Navbar />
        </div>
        <div className='mt-3 flex space-x-2 items-center'>
            <div className='w-[300px]'>
            <AppInp 
            label="Search"
            icon={FaSearch}
            />
            </div>
            {/* <div>
                <AddUser />
            </div> */}
            </div>
       <hr className='my-5'/>
       <div>
        <ChatList  /> 
        
       </div>
       </div>
    </>
  )
}

export default Sidebar

// ye choro yaha bs component show kraa hai mene bs or kuch nh
