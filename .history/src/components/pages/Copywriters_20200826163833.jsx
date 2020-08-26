import React from 'react'
import Banner from '../organisms/Banner'
import Cards from '../molecules/Cards'
import IconTwitter from '../atoms/icons/IconTwitter'


export const Copywriters = () => (
  <>
    <Banner
      bgColor="blue-400"
      title="Conoce nuestro equipo"
      subtitle="Dale click a cada uno y conoce mas acerca de ellos"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container p-8">
      <Cards
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        Twitter= <IconTwitter link="https://twitter.com/tives02" />
        Linkedin= <IconLinkedin link="https://www.linkedin.com/in/jorge-steven-parra/" />
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />

    </div>
  </>
)

export default Copywriters; 
