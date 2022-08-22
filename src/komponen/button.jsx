import React from "react";

function Button({ title, color = "light gray", disabled, ...props }) {
  return (
    <div className="center-flex">
      <button
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: color,
        }}
        className="button"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;