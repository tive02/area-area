import Link from 'next/link'
import Button from '../atoms/Button'

const MenuMobile = () => {
  return (
    <nav className="bg-purple-700 fixed inset-y-0 right-0 p-4 
    transition duration-1000 ease-in-out">

      <ul className="m-8 ">
        <Link href="/">
          <li className="mt-6 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 
        focus:bg-green-400 focus:outline-none focus:shadow">
            Inicio </li>
        </Link>
        <Link href="/tags/Tags" >
          <li className=" mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Temas</li></Link>
        <Link href="/about/About" >
          <li className="mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Nosotros</li></Link>
        <Link href="/contribution/Contribution">
          <li className="mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            ¿Como contribuir?</li></Link>
      </ul>
    </nav >
  )
}

export default MenuMobile
