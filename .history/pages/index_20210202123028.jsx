import Header from '../components/organisms/Header'
import Banner from '../components/organisms/Banner'
import Footer from '../components/organisms/Footer'
import Cards from '../components/molecules/Cards'


export default function IndexPage() {
  return (
    <>
      <Header />
      <Banner
        title="Ultimo articulo"
        subtitle="Descripción"
        img=""
        Description=""
      />
      <main>
        <article className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">

          <section>
            <Cards
              img="https://pbs.twimg.com/profile_images/1282554706095681536/drB2au6Q_400x400.jpg"
              name="Steven Moreno"
              title="Co-founder"
              description="Amante del fútbol y de la web, desarrollador junior y estudiante de contaduria pública y administración de empresas"
            />
          </section>

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
    </>
  )
}
