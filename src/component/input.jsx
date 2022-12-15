import React from 'react';

export default function Input({label, isError, textError, ...props}) {
    return(
        <div className="input grid">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input {...props}  className="w-96 p-2 px-3 bg-transparent border border-green-500 outline-none rounded-lg text-white font-bold" id={label}/>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }

      </div>
    )
}