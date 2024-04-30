import React from 'react';

function AppInp(props) {
    const { label, onChange, type, value, icon: Icon } = props;
    return (
        <div className="relative">
            <input 
                className="bg-[#EBF0F0] p-2 px-10 rounded-full" 
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
