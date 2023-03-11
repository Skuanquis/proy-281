import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../assets/image4.jpg"
import Description from "../components/Description";
import Events from "../components/Events";
import Team  from "../components/Team";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero"
                heroImage={HeroImage}
                title="Academic events management system"
                text="Organizing wasn't easier ever"    
                btnclass="show"
                btntext="Register Now"
                url="/signin"
            />
            <Description/>
            <Events/>
            <Team/>
            <Footer/>
        </>
    )
}

export default Home;