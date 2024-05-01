import React from 'react';

function AppCheckbox({ label, isChecked, onChange, id }) {
  return (
    <>
      <style>
        {`
          .checkbox-input {
            width: 20px; 
            height: 20px;    
          }

          
          .checkbox-input[type="checkbox"] {
            // appearance: none;
            // -webkit-appearance: none;
            -moz-appearance: none;
            border: 2px solid #7A52F4; 
            border-radius: 4px; 
            background-color: white; 
          }

          
          .checkbox-input[type="checkbox"]:checked {
            background-color: #7A52F4; 
            color: white
          }
        `}
      </style>
      
      <div>
        <label className='checkbox-label'>
          <input
            className='checkbox-input'
            type="checkbox"
            checked={isChecked}
            onChange={() => onChange(id)}
          />
          {label}
        </label>
      </div>
    </>
  );
}

export default AppCheckbox;
