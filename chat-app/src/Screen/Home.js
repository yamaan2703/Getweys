import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'

function Home() {
  return (
    <>
    <div className='background_page'>
      <div className='bg-[rgba(0,0,0,0.8)] h-screen'>
        <div className='container flex'>
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home