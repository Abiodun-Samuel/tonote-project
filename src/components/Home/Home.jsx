import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import hero from "../../images/hero.webp";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero">
                <h1>ToNote Technologies</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, commodi eos. Reiciendis eum non quasi, in a sint
                  harum pariatur corporis fugit consequatur magni aut id illo
                  voluptatum vel? Fugit.
                </p>
                <Link
                  to="/register"
                  className="btn btn-primary btn_one shadow-lg my-2"
                >
                  <span className="d-flex align-items-center">
                    <FaSignInAlt className="mx-2" /> Register Now
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img src={hero} alt="hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
