import React from "react";

function AppInp(props) {
  const { label, onChange, type, value, placeholder } = props;
  const inputStyle = {
    "::placeholder": {
      color: "red",
      opacity: 1 /* Firefox */,
    },
    "::-ms-input-placeholder": {
      /* Edge 12 - 18 */ color: "red",
    },
  };

  return (
    <div>
      <input
        className="p-3 my-3 text-red-700 border-2 focus:border-[#ec193f] w-full  outline-none rounded text-center text-lg bg-gray-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
        style={inputStyle}
      />
    </div>
  );
}

export default AppInp;
