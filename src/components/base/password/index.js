import React from 'react'

const PasswordInput = ({ id, name, type, className, style, placeholder, onChange, value, onClick}) => {

  return (
    <div style={{display: 'flex', width: '100%'}}>
        <input
        id={id}
        name={name}
        type={type}
        className={className}
        style={style}
        placeholder={placeholder}
        onChange={onChange} 
        value={value}
        />
        <button 
        type='button'
        style={{
          backgroundColor: 'transparent',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: '1.5px solid #D2C2FFA7'
        }}
        onClick={onClick}
        >
          { type==="password" ? <span>look</span> :  <span>unlook</span> }
        </button>
    </div>
  )
}

export default PasswordInput