import Navbar  from "../components/Navbar";
import Hero from "../components/Hero";
import EventsImage from "../assets/image2.jpg"
import Footer from "../components/Footer";

function Events(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero-mid"
                heroImage={EventsImage}
                title="Events"
                btnclass="hide"      
            />
            <h1>This is Events Page</h1>
            <Footer/>
        </>
    );
}

export default Events;