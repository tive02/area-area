import { useState } from 'react'
import MenuMobile from '../molecules/MenuMobile';

export default function ButtonHamburguer() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <button onClick={toggleNav}
        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline z-10 flex justify-end animate-pulse" >
        <svg fillRule="currentColor" viewBox="0 0 20 20" className="w-12 h-12">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
        01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 
        110 2h-6a1 1 0 01-1-1z"></path>
        </svg>
      </button >
      {!isNavVisible && (
        <MenuMobile />
      )}
    </>
  );
}






