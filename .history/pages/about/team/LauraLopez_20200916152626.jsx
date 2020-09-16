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
        p2="Siempre he dicho que la vida está llena de sacrificios para poder alcanzar los logros, 
        así todos piensen que es muy fácil, la fuerza la lleva cada uno y es por eso que la frase que me 
        representa es"
        i2="todos quieren ser una bestia hasta que ven que es tiempo de hacer lo que una bestia hace."
        p3="Soy una amante del rock viejito, estilo 80's, 90's, mi canción favorita es:"
        i3="Aún estás en mis sueños - Rata Blanca."
        p4="No soy muy amante de las películas ni series, pero si tuviera que elegir a algún actor, 
        tendría que ser a Will Smith, por todo lo que ha hecho para llegar hasta donde está."
      />


      <Footer />
    </div>
  )
}
