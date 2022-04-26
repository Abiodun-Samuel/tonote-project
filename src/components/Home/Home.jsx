import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import hero from "../../images/hero.webp";
import hero1 from "../../images/hero1.svg";
import hero2 from "../../images/hero2.svg";
import hero3 from "../../images/hero3.svg";
import "./home.css";

const Home = () => {
  const images = [hero1, hero2, hero3];

  return (
    <>
      <div id="home">
        <div className="container">
          {/* hero section  */}
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
                <img src={hero} alt="hero" className="hero_main" />
              </div>
            </div>
          </div>

          {/* card display section  */}
          <div className="row my-5">
            {images.map((img, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 my-3"
                key={img + index}
              >
                <div class="card shadow-lg border-0">
                  <img
                    src={img}
                    class="card-img-top p-1"
                    alt="images"
                    height="200"
                    width="auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lorem, ipsum dolor.</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
