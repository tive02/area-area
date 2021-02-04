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
      <main >
        <div className="hidden md:block">
          <Banner
            title="Lo ultimo"
            subtitle="Podcast Flash Liga Betplay Femenina Fecha 2"
            img="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            Description=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:p-4 md:p-0">
          <article className="flex flex-col items-center justify-center bg-white p-4">
            <section>
              <Cards
                h="40"
                w="80"
                alignText="justify"
                alignTextSubtitle="right"
                img="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Podcast Flash Liga Betplay Femenina Fecha 2"
                subtitle="Nov-2020"
                description="Resumen y opiniones de los goles y las mejores jugadas de la Liga Betplay Femenina Fecha 2. Análisis de todos los partidos."
              />
            </section>
            <SocialNetworks
              Spotify= <IconSpotify
            link="https://open.spotify.com/episode/6eC1i6WI4bXPzPq7pFv4bm?si=1jdBecvuTbK0n8UZPjyveA"
            margin="2"
            />
            />
          </article>
          <article className="flex flex-col items-center justify-center bg-white p-4">
            <section>
              <Cards
                h="40"
                w="80"
                alignText="justify"
                alignTextSubtitle="right"
                img="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Podcast Flash Liga Betplay Femenina Fecha 2"
                subtitle="Nov-2020"
                description="Resumen y opiniones de los goles y las mejores jugadas de la Liga Betplay Femenina Fecha 2. Análisis de todos los partidos."
              />
            </section>
            <SocialNetworks
              Spotify= <IconSpotify
            link="https://open.spotify.com/episode/6eC1i6WI4bXPzPq7pFv4bm?si=1jdBecvuTbK0n8UZPjyveA"
            margin="2"
            />
            />
          </article>
          <article className="flex flex-col items-center justify-center bg-white p-4">
            <section>
              <Cards
                h="40"
                w="80"
                alignText="justify"
                alignTextSubtitle="right"
                img="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Podcast Flash Liga Betplay Femenina Fecha 2"
                subtitle="Nov-2020"
                description="Resumen y opiniones de los goles y las mejores jugadas de la Liga Betplay Femenina Fecha 2. Análisis de todos los partidos."
              />
            </section>
            <SocialNetworks
              Spotify= <IconSpotify
            link="https://open.spotify.com/episode/6eC1i6WI4bXPzPq7pFv4bm?si=1jdBecvuTbK0n8UZPjyveA"
            margin="2"
            />
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
