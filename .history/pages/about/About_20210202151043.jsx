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
import SocialNetworks from '../../components/molecules/SocialNetworks'

export default function About() {
  return (
    <div>
      <Header />
      <Banner
        title="De Área a Área"
        subtitle="Proyecto social para incentivar el Fútbol femenino"
        img=""
        Description=""
      />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container p-8">
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <Link href="team/RafaRoman">
            <section>
              <Cards
                round="full"
                h="40"
                w="40"
                alignText="center"
                img="https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/101305146_10159839709056102_5671161451423727616_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=tgW1FuUU3AYAX8eWakn&_nc_ht=scontent.fbog2-2.fna&oh=3571c83ca3961df59a1ed73d05a6fb62&oe=5F72FD96"
                title="Rafa Roman"
                subtitle="Co-founder"
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
                round="full"
                h="40"
                w="40"
                alignText="center"
                img="https://www.instagram.com/p/B9b_2Han51P/?utm_source=ig_web_copy_link"
                title="lala lopez"
                subtitle="Co-founder"
                description="Santandereana y amor infinito al Bucaramanga y actualmente estudiante de Contaduría Pública de la Universidad Nacional de Colombia"
              />
            </section>
          </Link>
          <SocialNetworks
            TikTok= <IconTikTok link="https://vm.tiktok.com/ZSPLXWp6/" margin="2"/>
              Instagram= <IconInstagram link="https://instagram.com/lala_lopez3?igshid=1bmw1mdn6ukcp" margin="2" />
      />
      </article>
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <Link href="team/NataliaMoreno">
            <section>
              <Cards
                round="full"
                h="40"
                w="40"
                alignText="center"
                img="https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/92800396_1521927927971929_5894266323638157312_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=asEf2dN6vT4AX8DQsrJ&_nc_ht=scontent.fbog2-1.fna&oh=ff0d8421110591c0d74ebf59f398f750&oe=5F7350BB"
                title="Nata Moreno"
                subtitle="Co-founder"
                description="Mis pasiones en la vida el fútbol y la música y soy estudiante de Contaduría Pública."
              />
            </section>
          </Link>
          <SocialNetworks
            Instagram= <IconInstagram
              link="https://instagram.com/namona.4?igshid=8j99u9frxj6l"
              margin="2" />
              Facebook= <IconFacebook
            link="https://www.facebook.com/natalia.morenonavarro.9"
            margin="2" />
          />
        </article>
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <Link href="team/StevenParra">
            <section>
              <Cards
                round="full"
                h="40"
                w="40"
                alignText="center"
                alignTextSubtitle="right"
                img="https://pbs.twimg.com/profile_images/1282554706095681536/drB2au6Q_400x400.jpg"
                title="Steven Moreno"
                subtitle="Co-founder"
                description="Amante del fútbol y de la web, desarrollador junior y estudiante de contaduria pública y administración de empresas"
              />
            </section>
          </Link>
          <SocialNetworks
            Twitter= <IconTwitter
            link="https://twitter.com/tives02"
            margin="2" />
              Linkedin= <IconLinkedin
            link="https://www.linkedin.com/in/jorge-steven-parra/"
            margin="2" />
            />
            </article>
      </main>
      <Footer />
    </div >
  )
}
