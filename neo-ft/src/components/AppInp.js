import React from 'react';

function AppInp(props) {
    const { label, onChange, type, value, icon: Icon } = props;
    return (
        <div className="relative">
            <input 
                className="bg-[#EBF0F0] py-2 px-12 rounded-full w-[300px] md:w-[300px] lg:w-[500px]" 
                placeholder={label}
                value={value}
                onChange={onChange}
                type={type ?? "text"}
            />
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />} 
        </div>
    );
}

export default AppInp;
