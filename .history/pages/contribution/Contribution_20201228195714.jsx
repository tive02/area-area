import Header from '../../components/organisms/Header'
import Banner from '../../components/organisms/Banner'
import Button from '../../components/atoms/Button'
import Footer from '../../components/organisms/Footer'


export default function Contribution() {
  return (
    <div>
      <Header />
      <Banner
        title="¿Quieres contribuir al proyecto?"
        subtitle="Existen muchas formas de hacerlo"
        img=""
        Description=""
      />
      <main >
        <article>
          <p> Amamos los comentarios de nuestra Comunidad, por eso Hablanos acerca de lo que te
                  gusta tus pasiones, en fin acerca de tí</p>
          <Button label="Escribenos"
            bgColor="purple-300" />
        </article>
      </main>
      <Footer />
    </div>
  )
}
