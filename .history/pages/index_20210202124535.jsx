import Header from '../components/organisms/Header'
import Banner from '../components/organisms/Banner'
import Footer from '../components/organisms/Footer'
import Cards from '../components/molecules/Cards'
import SocialNetworks from '../components/molecules/SocialNetworks'
import IconSpotify from '../components/atoms/icons/IconSpotify'


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
              name="Podcast Flash Liga Betplay Femenina Fecha 2"
              title="Co-founder"
              description="Amante del fútbol y de la web, desarrollador junior y estudiante de contaduria pública y administración de empresas"
            />
          </section>
          <SocialNetworks
            Spotify= <IconSpotify
            link="https://open.spotify.com/episode/6eC1i6WI4bXPzPq7pFv4bm?si=1jdBecvuTbK0n8UZPjyveA"
            margin="2"
            />
            />
          </article>
      </main>
      <Footer />
    </>
  )
}
