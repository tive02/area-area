import React from 'react'

const ButtonHamburguer = () => {
  return (
    <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
      <svg fill="currentColor" viewBox="0 0 20 20" className="w-12 h-12">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
        01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 
        110 2h-6a1 1 0 01-1-1z"></path>
      </svg>
    </button >
  )
}

export default ButtonHamburguer




