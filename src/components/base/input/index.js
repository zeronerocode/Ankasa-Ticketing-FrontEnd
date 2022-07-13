import React from 'react'

const Input = ({ type, className, placeholder, onChange, value }) => {
  return (
    <>
        <input type={type} className={className} placeholder={placeholder} onClick={onChange} value={value} />
    </>
  )
}

export default Input