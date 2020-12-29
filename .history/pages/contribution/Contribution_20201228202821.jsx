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
          <section>
            <p> Amamos los comentarios y als reacciones de nuestra Comunidad, por eso Hablanos acerca de lo que te
                  gusta tus pasiones, en fin acerca de tí</p>
            <Button label="Escribenos"
              bgColor="purple-600"
            />
          </section>
          <section>
            <p> Si quieres ayudarnos aun mas comparte Nuestro contenido para que cada dia llegue a mas personas que
            Amen el futbl Femenino Tanto como nosotros
            </p>
          </section>
          <section>
            <p> Al ser un equipo tan pequeño tambien necesitamos gente que quiera ser parte y crear contenido
            para que cada dia la comunidad amante del futbol femenino sea mas grande.
            </p>
          </section>
          <section>
            <p> Por ultimo puedes donarnos a nuestro Patreon para mantener este proyecto, de amor al futbol femenino en español
            y ingles.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
