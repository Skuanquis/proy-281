import Navbar  from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/image1.jpg";
import Footer from "../components/Footer";


function About(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero-mid"
                heroImage={AboutImage}
                title="About"
                btnclass="hide"   
            />
            <h1>This is About Page</h1>
            <Footer/>
        </>
    );
}

export default About;