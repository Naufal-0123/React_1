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

export default function Button({title, color = "blue, red", disabled, ...props}) {
    return (
        <React.Fragment>
            <button
                disabled={disabled}
               {...props}
                style={{
                    backgroundColor: color,
                    opacity: disabled ? 0.1 : 1
                }}
                className="button"
            >
                {title}
            </button>
        </React.Fragment>
    )
}