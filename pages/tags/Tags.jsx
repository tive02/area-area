import Header from '../../components/organisms/Header'
import Banner from '../../components/organisms/Banner'
import Footer from '../../components/organisms/Footer'


export default function Tags() {
    return (
        <div>
            <Header />
            <Banner
                bgColor="orange-400"
                title="Temas de los articulos"
                subtitle="¿quieres aprender de un tema?"
            />
            <Footer />
        </div>
    )
}