import Activity from "../components/Activity";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://www.meram.bel.tr/upload/medya/berlika2.jpg"
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass=""
        />
        <Activity/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;