import React, { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import AccounrDetails from '../pages/AccounrDetails';


function AppDashboard() {
  const [selectedOption, setSelectedOption] = useState("accountdetails");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderPage = () => {
    switch (selectedOption) {
      case "accountdetails":
        return <AccounrDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex flex-grow mt-16 p-5">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-1/5 p-4 rounded-md">
          <h2 className="text-sm text-gray-300">
            Profile Setting
          </h2>
          <ul className='my-5'>
            <li className={`flex items-center px-2 py-1 mb-4 rounded-lg font-semibold text-xl hover:bg-[#7A52F4] focus:bg-[#7A52F4] transition duration-300 ease-in-out  ${selectedOption === "accountdetails" && ""}`} onClick={() => handleOptionClick("accountdetails")}>
              <IoIosNotifications className="mr-3" />
              Account Details
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <section className="flex-grow rounded-md p-8 ml-4">
          {renderPage()}
        </section>
      </main>
    </div>
  );
}

export default AppDashboard;
