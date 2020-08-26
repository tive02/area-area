import React from 'react'
import Banner from '../organisms/Banner'
import Cards from '../molecules/Cards'


export const Copywriters = () => (
  <>
    <Banner
      bgColor="blue-400"
      title="Conoce nuestro equipo"
      subtitle="Dale click a cada uno y conoce mas acerca de ellos"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </>
)

export default Copywriters; 
