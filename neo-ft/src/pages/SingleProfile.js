import React, { useEffect } from 'react'
import art from "../images/Art.png"
import img1 from "../images/img - 1.png"
import img2 from "../images/img - 2.png"
import AppBtn from '../components/AppBtn'

import AOS from "aos";
import "aos/dist/aos.css";


function SingleProfile() {
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
    <>
    <div className='singleProfile mt-20'>
        <div className='section_1'>
            <div className='container p-2 md:p-2 lg:p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5'>
                    <div className='text-center' data-aos="zoom-in" data-aos-duration="2000">
                        <div className='flex justify-center'>
                            <img src={art} className='shadow-lg shadow-gray-500'/>
                        </div>
                        
                            <div className='mx-10 my-5'>
                                <AppBtn label="Buy Now 1000 XRP"/>
                            </div>
                       
                    </div>

                    <div className='' data-aos="zoom-in" data-aos-duration="2000">
                        <h1 className='text-5xl font-bold py-1'>#304</h1>
                        <p className='text-[#7A52F4] font-bold py-1'>Celestial Spirits</p>
                        <div className='flex space-x-8 items-center my-5'>
                            <div className=''>
                            <p className='font-bold py-1'>Creator 10% royalties</p>
                            <div className='flex items-center space-x-3'>
                                <img src={img1}/>
                                <p>0x330cd8fec...8b7c</p>
                            </div>
                            </div>
                            <div>
                            <p className='font-bold py-1'>Owner</p>
                            <div className='flex items-center space-x-3'>
                                <img src={img2}/>
                                <p>0x330cd8fec...8b7c</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProfile