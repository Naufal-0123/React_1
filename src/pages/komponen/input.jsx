import React from 'react';

export default function Input({label, isError, textError, ...props}) {
    return(
        <div className="input grid">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input {...props} className="border rounded-md mt-5 w-4/5" id={label}/>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }

      </div>
    )
}