import "./HeroStyles.css";

function Hero(props){
    return(
    <>  
        <div className={props.cName}>
            <img className="heroimage" src={props.heroImage} alt="img de muestra"></img>            
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1> 
            <p>{props.text}</p>
            
            <a href={props.url} className={props.btnclass}>{props.btntext}</a>
        </div>
    </>
    )
}

export default Hero;