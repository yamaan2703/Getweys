import React, { useState } from 'react';

const AppAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="">
          <div
            className={`flex items-center p-4 cursor-pointer  ${
              activeIndex === index ? 'bg-white' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="text-white text-xl font-extrabold bg-[#28235c] px-3 py-1 rounded">
              {activeIndex === index ? '-' : '+'}
            </div>
            <div className='font-bold text-gray-700 text-xl px-5'>{item.title}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AppAccordion;
