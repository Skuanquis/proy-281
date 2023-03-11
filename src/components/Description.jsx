import "./DescriptionStyles.css";
import Image1 from "../assets/image6.jpg";
import Image2 from "../assets/image7.jpg";
import DescriptionData from "./DescriptionData";


const Description = () =>{
    return( 
        <div className="description">
            <h1>About Us</h1>
            <p>A reliable solution when we're taking up an event!</p>

            <DescriptionData
                heading="Let's Go"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
                img1={Image1}
                img2={Image2}
            />
        </div>
    );
}

export default Description;