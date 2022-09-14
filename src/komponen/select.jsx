import React from 'react';

export default function Select({label, children, isError, textError, ...props}) {
    return(
        <div className="input grid">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <select {...props} className="border rounded-md mt-5 w-4/5" id={label}>
        {children}
        </select>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }

      </div>
    )
}
