import React from 'react'

export const ButtonBurger = () => {
  return (
    <button className="md:hidden focus:outline-none focus:shadow-outline" >
      <svg className="w-10 h-10 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
        /></svg>
    </button>
  )
}

export default ButtonBurger
