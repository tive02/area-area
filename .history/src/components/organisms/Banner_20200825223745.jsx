import React from 'react';
import classnames from 'classnames'


const Banner = ({ bgColor, title, subtitle }) => (
  <div className={classnames(`bg-${bgColor} pb-4 flex-col flex-grow md:pb-0 border-gray-800`)}
  >
    <div>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fhotbook.com.mx%2Fwp-content%2Fuploads%2F2019%2F04%2Fhotbook-se-revela-la-primera-imagen-de-un-agujero-negro-portada.jpg&imgrefurl=https%3A%2F%2Fhotbook.com.mx%2Fse-revela-la-primera-imagen-de-un-agujero-negro%2F&tbnid=CaJw5J-VVBuzyM&vet=12ahUKEwiw3cTK-LfrAhVbZjABHdwDBbMQMygGegUIARDcAQ..i&docid=SHsS388S4aZ1EM&w=1024&h=656&q=imagen&ved=2ahUKEwiw3cTK-LfrAhVbZjABHdwDBbMQMygGegUIARDcAQ"
        alt="" />
    </div>
    <h1 className="text-center text-5xl font-back pt-6 pb-0  md:text-6xl ">
      {title}
    </h1>
    <h2 className="text-center text-lg  font-thin mr-2 hidden md:grid md:grid-row">
      {subtitle}
    </h2>
  </div >

)


export default Banner
