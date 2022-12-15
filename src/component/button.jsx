import React from 'react';

export default function Button({ title, ...props}) {
    return (
      <React.Fragment>
        <button
         {...props}
          
         className="w-96 p-2 px-3 bg-green-500 border border-green-700 outline-none rounded-lg text-white font-bold text-lg"
        >
          {title}
        </button>
      </React.Fragment>
    );
  }