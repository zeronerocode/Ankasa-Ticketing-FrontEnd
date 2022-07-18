import React from 'react'

const Input = ({ type, className, placeholder, onChange }) => {
  return (
    <>
        <input type={type} className={className} placeholder={placeholder} onClick={onChange}  />
    </>
  )
}

export default Input