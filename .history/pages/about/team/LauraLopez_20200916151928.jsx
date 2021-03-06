import Header from '../../../components/organisms/Header'
import Banner from '../../../components/organisms/Banner'
import Footer from '../../../components/organisms/Footer'
import Biography from '../../../components/templates/Biography'


export default function LauraLopez() {
  return (
    <div>
      <Header />
      <Banner
        title="Soy Laura Juliana Lopez"
        subtitle=""
        img=""
        Description="Fotos proyectos de laura juliana" />
      <Biography
        title="Hola, Soy Laura Juliana Lopez"
        secondTitle="Actualmente soy estudiante de contaduría pública en la universidad nacional de Colombia"
        p1="Desde siempre he tenido el fútbol impregnado en mis cosas, puesto que desde chiquita mi papá 
        me llevaba al estadios y desde siempre sentí ese amor por este hermoso deporte.
        Ya después con el tiempo, empecé a jugar y a investigar más al respecto,  
        aunque hubo tiempos en donde no lo puse como mi prioridad siempre estaba ahí, muy dentro de mí."
      />


      <Footer />
    </div>
  )
}
