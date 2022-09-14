// import React from 'react';

// export default function Button({
//     title, 
//     color = "red", 
//     onClick,
//     name,
//     id,
//     disable = false,
// }) {
//     return (
//         <React.Fragment>
//             <button
//                 onclick={onClick}
//                 name={name}
//                 id={id}
//                 disable={disable}
//                 style={{
//                     backgroundColor: color,
//                 }}
//                 className="button"
//             >
//                 {title} 
//             </button>
//         </React.Fragment>
//     )
// }

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