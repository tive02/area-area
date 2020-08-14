import React from 'react'

export const ButtonHeader = () => {
  return (
    <>
      <button
        class="mr-8 bg-green-400 hover:bg-green-400 text-black font-bold py-2 px-4 border-b-4 
        border-green-400 hover:border-black rounded">
        <label for="">Ingresa</label>
      </button>
      <button
        class="mr-8 bg-green-400 hover:bg-green-400 text-black font-bold py-2 px-4 border-b-4 
        border-green-400 hover:border-black rounded">
        <label for="">Subscribete</label>
      </button>
    </>

  )
}

export default ButtonHeader
