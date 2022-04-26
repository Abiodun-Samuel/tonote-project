import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import hero from "../../images/hero.webp";
import hero1 from "../../images/hero1.svg";
import hero2 from "../../images/hero2.svg";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-3">
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
            <div className="col-lg-6 my-3">
              <div className="hero-img">
                {/* <img
                  src={hero1}
                  alt="heroimage"
                  className="shadow-lg hero_one"
                /> */}
                <img src={hero} alt="hero" className="hero_main" />
                {/* <img src={hero2} alt="hero" className="shadow-lg hero_two" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
