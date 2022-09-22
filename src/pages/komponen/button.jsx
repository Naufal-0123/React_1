import React from 'react';

export default function Button({ title, color = "red",...props}) {
    return (
      <React.Fragment>
        <button
         {...props}
          style={{
            backgroundColor: color,

          }}
          className="h-10 w-24 text-white rounded"
        >
          {title}
        </button>
      </React.Fragment>
    );
  }