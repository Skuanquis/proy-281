import "../components/TeamStyles.css";
import image from "../assets/image15.jpg"

function Team() {
  return (
    <section>
      <div >
        <h1 className="title">Our Team</h1>
      </div>
      <div class="row">
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={image} alt="img" />
            </div>
            <h3>Luna Turner</h3>
            <p>Founder</p>
            <div class="icons">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i class="fab fa-github"></i>
              </a>
              <a href="/">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={image} alt="img" />
            </div>
            <h3>Bryant Hall</h3>
            <p>Developer</p>
            <div class="icons">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i class="fab fa-github"></i>
              </a>
              <a href="/">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={image} alt="img" />
            </div>
            <h3>Hope Watkins</h3>
            <p>Designer</p>
            <div class="icons">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i class="fab fa-github"></i>
              </a>
              <a href="/">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={image} alt="img" />
            </div>
            <h3>Hope Watkins</h3>
            <p>Designer</p>
            <div class="icons">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i class="fab fa-github"></i>
              </a>
              <a href="/">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Team;
