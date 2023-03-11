import "./EventsStyles.css";

function EventsData(props){
    return(
        <div className="e-card">
            <div className="e-image">
                <img src={props.image} alt="img" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <button>Show More</button>
        </div>
    );
}

export default EventsData;