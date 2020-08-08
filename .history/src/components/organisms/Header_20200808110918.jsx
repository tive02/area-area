import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  < header >
    <div>
      <NavLink to="/about" className="bg-red-500">
        About
      
      </NavLink>
    </div>
  </header >

)



export default Header; 
