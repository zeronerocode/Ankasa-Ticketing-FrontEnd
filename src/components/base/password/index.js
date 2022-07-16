import React, { useState } from 'react'
import { VscEyeClosed, VscEye } from "react-icons/vsc";

const PasswordInput = ({ id, name, type, className, style, placeholder, onChange, value, onClick}) => {
 const [visibel, setVisible] = useState(false);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <input
        id={id}
        name={name}
        className={className}
        style={style}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={visibel ? "text" : "password"}
      />
      <button
        type="button"
        style={{
          backgroundColor: "transparent",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1.5px solid #D2C2FFA7",
        }}
        onClick={onClick}
      >
        {visibel ? (
          <VscEye
            className="absolute top-7 right-1.5 text-lg cursor-pointer"
            onClick={() => setVisible(false)}
          />
        ) : (
          <VscEyeClosed
            className="absolute top-7 right-1.5 text-lg cursor-pointer"
            onClick={() => setVisible(true)}
          />
        )}
      </button>
    </div>
  );
}

export default PasswordInput