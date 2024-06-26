import React from 'react'

function AppBtn(props) {
    const { onClick, label, icon } = props;
  return (
    <>
    <div>
    <button
      onClick={onClick}
      className="text-center font-semibold font-mono w-full rounded bg-white p-2 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
    </div>
    </>
  )
}

export default AppBtn