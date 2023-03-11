import "../components/FooterStyles.css";

function Footer (){
    return(
        <footer>
            <div className="footer-info">
                <div className="footer-width about">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  </p>
                    <div className="social-media">
                    <ul className="ul">
                        <li className="li"><a href="/" className="fab fa-facebook"></a></li>
                        <li className="li"><a href="https://github.com/" className="fab fa-github"></a></li>
                        <li className="li"><a href="/" className="fas fa-envelope"></a></li>
                    </ul>
                </div>
                </div>
                
                <div className="footer-width link">
                    <h2>Quick Links</h2>
                    <ul className="ul">
                        <li className="li"><a href="/" >Home</a></li>
                        <li className="li"><a href="/about">About</a></li>
                        <li className="li"><a href="/events">Events</a></li>
                        <li className="li"><a href="/team">Team</a></li>
                        <li className="li"><a href="/signin">Sign In</a></li>
                    </ul>
                </div>
                <div className="footer-width contact">
                    <h2>Contact</h2>
                    <ul className="ul">
                        <li className="li">
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <p>Universidad Mayor de San Andres</p>
                        </li>
                        <li className="li">
                            <span><i className="far fa-envelope"></i></span>
                            <a href="#">Skuanquis@gmail.com</a>
                        </li>
                        <li className="li">
                            <span><i className="fas fa-phone-volume"></i></span>
                            <a href="#">64103444</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;