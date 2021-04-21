import Header from '../components/organisms/Header'
import Banner from '../components/organisms/Banner'
import Footer from '../components/organisms/Footer'
import Cards from '../components/molecules/Cards'


export default function IndexPage() {
  return (
    <>
      <Header />
      <Banner
        title="De Área a Área"
        subtitle="Proyecto social para incentivar el Fútbol femenino"
        img=""
        Description=""
      />
      <main>
        <Cards
          name="USA vs Colombia"
          title="USA vs Colombia"
          description="Podra colombia avencer a la seleccion mas poderosa del mundo" />
      </main>
      <Footer />
    </>
  )
}