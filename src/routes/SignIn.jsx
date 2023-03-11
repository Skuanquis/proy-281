import Navbar  from "../components/Navbar";
import Hero from "../components/Hero";
import SignInImage from "../assets/image5.jpg"

function SignIn(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero-mid"
                heroImage={SignInImage}
                title="Sign In"
                btnclass="hide"   
            />
            <h1>This is SignIn Page</h1>
        </>
    );
}

export default SignIn;