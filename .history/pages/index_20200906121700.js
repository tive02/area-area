import Nav from '../components/nav'
import Footer from '../components/organisms/Footer'
import Banner from '../components/organisms/Banner'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
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
