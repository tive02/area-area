import Nav from '../components/nav'
import Header from '../components/organisms/Header'
import Banner from '../components/organisms/Banner'
import Footer from '../components/organisms/Footer'


export default function IndexPage() {
  return (
    <div>
      <Header />
      <Nav />
      <Banner
        title="De Área a Área"
        subtitle="Proyecto social para incentivar el Fútbol femenino"
        img=""
        Description=""
      />
      <Footer />
    </div>
  )
}
