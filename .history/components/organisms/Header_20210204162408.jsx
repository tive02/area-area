import MenuPublic from '../molecules/MenuPublic';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import ButtonHamburguer from '../atoms/ButtonHamburguer';



const Header = () => (
  <header className="fixed z-10 inset-x-0 top-0 w-full" >
    <nav>
      <div className="flex items-center justify-between flex-wrap bg-purple-700 border-gray-800" >
        <Logo />
        <ButtonHamburguer />
        <div>
          <MenuPublic />
        </div>
      </div>
    </nav>
  </header >

)



export default Header; 