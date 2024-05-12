import React from 'react'
import Chat from '../Components/Chat'
import Slidebar from "../Components/Sidebar"

function Home() {
  return (
    <>
    <div className='background_page'>
      <div className='bg-[rgba(0,0,0,0.8)] h-screen'>
        <div className='container flex'>
          <div className=''>
          <Slidebar />
          </div>
          <div>
          <Chat />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home