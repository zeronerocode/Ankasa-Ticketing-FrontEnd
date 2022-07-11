import React from 'react'

const Button = ({ name, className, onClick, title }) => {
  return (
    <>
        <button className={className} onClick={onClick} name={name}>{title}</button>
    </>
  )
}

export default Button