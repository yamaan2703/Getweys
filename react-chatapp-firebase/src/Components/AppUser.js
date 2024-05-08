import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from "react-icons/io";
import AppInp from './AppInp';
import AppBtn from './AppBtn';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { app } from '../Config/FirebaseConfig';
import { getFirestore } from 'firebase/firestore';

function AppUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  const closeToggleInput = () => {
    setIsOpen(false);
  }

  const db = getFirestore(app); 

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where("userName", "==", searchValue));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='add_user' onClick={toggleInput}>
        <div className='bg-gray-800 rounded p-2 text-white text-xl font-bold'>
          <IoIosAdd />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-70 backdrop-blur-sm"></div>
          <div className="bg-black w-[500px] rounded-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-mono text-white font-semibold">Add User</h2>
              <button onClick={closeToggleInput}>
                <IoIosClose className="text-red-500 text-4xl" />
              </button>
            </div>
            <form className='flex justify-between items-center space-x-2' onSubmit={handleSearch}>
              <div className='my-2 w-[400px]'>
                <AppInp label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              </div>
              <div className='my-2'>
                <AppBtn label="Search"/>
              </div>
            </form>
            {user &&    
              <div className='flex space-x-9 justify-between items-center my-1'>
                <div className='flex justify-center items-center space-x-4'>
                  <img src={user.avatar || "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className='w-[50px] h-[50px] rounded-full object-cover'/>
                  <p className='font-mono text-lg text-white'>{user.userName || "Empty"}</p>
                </div>
                <div>
                  <AppBtn label="Add User"/>
                </div>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default AppUser;
