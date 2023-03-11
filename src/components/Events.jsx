import "./EventsStyles.css";
import EventsData from "./EventsData";
import image1 from "../assets/image8.jpg";
import image2 from "../assets/image9.jpg";
import image3 from "../assets/image10.jpg";
import image4 from "../assets/image11.jpg";
import image5 from "../assets/image12.jpg";
import image6 from "../assets/image13.jpg";
import image7 from "../assets/image14.jpg";

function Events(){
    return(
        <div className="event">
            <h1>Up Comming Events</h1>
            <p>You can discover our recent events</p>
            <div className="eventcard">
                <EventsData
                    image = {image1}
                    heading = "Diferential Equations"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <EventsData
                    image = {image2}
                    heading = "Digital Systems"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <EventsData
                    image = {image3}
                    heading = "Artificial Intelligence"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
            <div className="eventcard">
                <EventsData
                    image = {image4}
                    heading = "FrontEnd Development"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <EventsData
                    image = {image5}
                    heading = "Networks"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <EventsData
                    image = {image6}
                    heading = "Mobile Development"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
            <div className="eventcard">
                <EventsData
                    image = {image7}
                    heading = "BackEnd Development"
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
        </div>
    );
}

export default Events;