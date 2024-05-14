import React from 'react';


function AppInp(props) {
    const { label, onChange, type, value, icon: Icon } = props;

    return (
        <div className="relative">
            <input
                className="w-full p-2 outline-none text-center bg-transparent text-white border"
                placeholder={label}
                value={value}
                onChange={onChange}
                type={type ?? "text"}
            />
           
            {Icon && (
                <span className="absolute right-4 top-3 text-white">
                    <Icon />
                </span>
            )}
        </div>
    );
}

export default AppInp;