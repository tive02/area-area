import Link from 'next/link'
import Header from '../../components/organisms/Header'
import Banner from '../../components/organisms/Banner'
import Footer from '../../components/organisms/Footer'
import Cards from '../../components/molecules/Cards'
import IconFacebook from '../../components/atoms/icons/IconFacebook'
import IconInstagram from '../../components/atoms/icons/IconInstagram'
import IconLinkedin from '../../components/atoms/icons/IconLinkedin'
import IconTikTok from '../../components/atoms/icons/IconTikTok'
import IconTwitter from '../../components/atoms/icons/IconTwitter'
import SocialNetworks from '../../components/molecules/ SocialNetworks'

export default function About() {
  return (
    <div>
      <Header />
      <Banner
        title="Conoce nuestro equipo"
        subtitle="Dale click a cada uno y conoce mas acerca de ellos"
        img="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/118010825_10160133396276102_4404504646712132106_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=kJe-bOWuArsAX9oTHBn&_nc_ht=scontent-bog1-1.xx&oh=41dd3bd158c1e411ba2088d150f0b87f&oe=5F72ED1A"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container p-8">
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <Link href="team/RafaRoman">
            <section>
              <Cards
                img="https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/101305146_10159839709056102_5671161451423727616_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=tgW1FuUU3AYAX8eWakn&_nc_ht=scontent.fbog2-2.fna&oh=3571c83ca3961df59a1ed73d05a6fb62&oe=5F72FD96"
                name="Rafa Roman"
                title="Co-founder"
                description="Soy Rafael Román entrenador deportivo y administrador de empresas, amante fiel del fútbol ... Que busca a través de la práctica cambiar vidas y darle la visibilidad que necesita la mujer"
              />
            </section>
          </Link>
          <SocialNetworks
            Instagram= <IconInstagram
          link="https://www.instagram.com/rafaromaan/?hl=es"
          margin="2" />
              Facebook= <IconFacebook
            link="https://www.facebook.com/rafa.roman.90"
            margin="2" />
              />
          </article>
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <Link href="team/LauraLopez" >
            <section>
              <Cards
                img="https://scontent.fbga3-1.fna.fbcdn.net/v/t1.0-9/95589260_3249111905108634_1872009221638193152_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=HbMAtjmOH88AX-JsxHr&_nc_ht=scontent.fbga3-1.fna&oh=0b3599c4320e5b3542d38c49d4456a71&oe=5F76205C"
                name="lala lopez"
                title="Co-founder"
                description="Santandereana y amor infinito al Bucaramanga y actualmente estudiante de Contaduría Pública de la Universidad Nacional de Colombia"
              />
            </section>
          </Link>
          <SocialNetworks
            TikTok= <IconTikTok link="https://vm.tiktok.com/ZSPLXWp6/" margin="2"/>
              Instagram= <IconInstagram link="https://instagram.com/lala_lopez3?igshid=1bmw1mdn6ukcp" margin="2" />
       />
       </article>
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"></article>
        <Link href="team/NataliaMoreno">
          <section>
            <Cards
              img="https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/92800396_1521927927971929_5894266323638157312_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=asEf2dN6vT4AX8DQsrJ&_nc_ht=scontent.fbog2-1.fna&oh=ff0d8421110591c0d74ebf59f398f750&oe=5F7350BB"
              name="Nata Moreno"
              title="Co-founder"
              description="Mis pasiones en la vida el fútbol y la música y soy estudiante de Contaduría Pública."
            />
          </section>
        </Link>
        <SocialNetworks
          Instagram= <IconInstagram
              link="https://instagram.com/namona.4?igshid=8j99u9frxj6l"
              margin="2"
              Facebook= <IconFacebook
          link="https://www.facebook.com/natalia.morenonavarro.9"
          margin="2" />
                </article>
      <Link href="team/StevenParra">
        <section>
          <Cards
            img="https://media-exp1.licdn.com/dms/image/C4D03AQF00yWQs5GKug/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=0PX7XMBN_ivW9WiWtEGSL5iutcMY_iJ1r4bsySPb_M8"
            name="Steven Moreno"
            title="Co-founder"
            description="Amante del fútbol y de la web, desarrollador junior y estudiante de contaduria pública y administración de empresas"
            Twitter= <IconTwitter
              link="https://twitter.com/tives02"
              margin="2"/>
              Linkedin= <IconLinkedin
            link="https://www.linkedin.com/in/jorge-steven-parra/"
            margin="2" />
            />
      </section>
      </Link>
    </div>
    <Footer />
    </div >
  )
}
