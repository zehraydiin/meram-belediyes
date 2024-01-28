import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.tv42haber.com/files/uploads/news/default/20221231-baskan-kavus-meramimizi-turkiye-yuzyili-vizyonuna-hazirliyoruz-402689-ac5b271f7d913b7798de.jpg"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;