import Navbar  from "../components/Navbar";
import TeamImage from "../assets/image3.jpg"
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Team(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero-mid"
                heroImage={TeamImage}
                title="Team"
                btnclass="hide"       
            />
            <h1>This is Team Page</h1>
            <Footer/>
        </>
    );
}

export default Team;