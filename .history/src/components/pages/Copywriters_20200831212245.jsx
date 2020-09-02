import React from 'react'
import Banner from '../organisms/Banner'
import Cards from '../molecules/Cards'
import IconTwitter from '../atoms/icons/IconTwitter'
import IconLinkedin from '../atoms/icons/IconLinkedin'
import IconInstagram from '../atoms/icons/IconInstagram'
import IconTok from '../atoms/icons/IconTikTok'


export const Copywriters = () => (
  <>
    <Banner
      bgColor="blue-400"
      title="Conoce nuestro equipo"
      subtitle="Dale click a cada uno y conoce mas acerca de ellos"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container p-8">
      <Cards
        Instagram= <IconInstagram
        link="https://www.instagram.com/rafaromaan/?hl=es"
        margin="2"/>

        img="https://www.facebook.com/photo?fbid=10160133396266102&set=a.10150093253371102"
        name="Rafa Roman"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        Twitter= <IconTwitter
        link="https://twitter.com/tives02"
        margin="2"/>

        Linkedin= <IconLinkedin
        link="https://www.linkedin.com/in/jorge-steven-parra/"
        margin="2" />

        img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
        name="Steven Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        TikTok= <IconTikTok
        link="https://vm.tiktok.com/ZSPLXWp6/"
        margin="2"/>

        Instagram= <IconInstagram
        link="https://instagram.com/lala_lopez3?igshid=1bmw1mdn6ukcp"
        margin="2" />

        img="https://m.facebook.com/story.php?story_fbid=3249111931775298&substory_index=0&id=100000295695891"
        name="lala lopez"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
      <Cards
        Instagram= <IconInstagram
        link="https://instagram.com/namona.4?igshid=8j99u9frxj6l"
        margin="2" />

        img="https://www.instagram.com/p/CEk1plFg1aTZt1n8kM545vE-1M8u8RjKyI9lDQ0/?igshid=re8n5lopmyjd"
        name="Nata Moreno"
        title="Co-funder"
        description="Soy estudiante de contaduria publica y administracion de empresas"
      />
    </div>
  </>
)

export default Copywriters; 
