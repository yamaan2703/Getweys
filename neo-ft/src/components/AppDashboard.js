import React, { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import Notification from '../pages/Notification'; // Added import for Notification component
import AccounrDetails from '../pages/AccounrDetails';
import OwProfile from '../pages/OwProfile';

function AppDashboard() {
  const [selectedOption, setSelectedOption] = useState("accountdetails");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderPage = () => {
    switch (selectedOption) {
      case "accountdetails":
        return <AccounrDetails />;
      case "notification":
        return <Notification />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex flex-grow  p-5">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-1/4 p-4 rounded-md">
          <h2 className="text-sm text-gray-300">Profile Setting</h2>
          <ul className='my-5'>
            <li className={`flex items-center px-2 py-1 mb-4 rounded-lg font-semibold text-xl hover:bg-[#7A52F4] focus:bg-[#7A52F4] transition duration-300 ease-in-out ${selectedOption === "notification" && "bg-[#7A52F4]"}`} onClick={() => handleOptionClick("notification")}>
              <IoIosNotifications className="mr-3" />
              Notifications
            </li>
            <li className={`flex items-center px-2 py-1 mb-4 rounded-lg font-semibold text-xl hover:bg-[#7A52F4] focus:bg-[#7A52F4] transition duration-300 ease-in-out ${selectedOption === "accountdetails" && "bg-[#7A52F4]"}`} onClick={() => handleOptionClick("accountdetails")}>
              Account Details
            </li>
           
          </ul>
        </aside>

        {/* Main Content Area */}
        <section className="flex-grow rounded-md ml-4">
          {renderPage()}
        </section>
      </main>
    </div>
  );
}

export default AppDashboard;
