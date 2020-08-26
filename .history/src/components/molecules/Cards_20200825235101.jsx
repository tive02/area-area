import React from 'react'

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div
        className="inline-flex shadow-lg border border-gray-200 rounded-full
        overflow-hidden h-40 w-40">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
          alt=""
          className="h-full w-full" />
      </div>


      <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
      <h6 className="mt-2 text-sm font-medium">Founder</h6>

      <p className="text-xs text-gray-500 text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
    </p>

      <ul className="flex flex-row mt-4 space-x-2">
        <li>
          <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full
          text-gray-800 border-gray-800">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Cards
