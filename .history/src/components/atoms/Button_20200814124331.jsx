import React from 'react'
import classnames from 'classnames'

export const Button = (bgColor) => {
  return (
    <button
      className={classnames(`mr-8 bg-${bgColor} hover:bg-green-400 
      text-black font-bold py-2 px-4 border-b-4 
        border-green-400 hover:border-black rounded`)}>
      <label for="">Ingresa</label>
    </button>


  )
}

export default Button
