import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import hero from "../../images/hero.webp";
import hero4 from "../../images/hero4.webp";
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
            <div className="col-lg-6 my-4">
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
            <div className="col-lg-6 my-4">
              <div className="hero-img d-flex justify-content-center">
                <img src={hero4} alt="hero" className="hero_four shadow" />
                <img src={hero} alt="hero" className="hero_main shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white">
        <div className="text-center my-5">
          <h3 className="font-weight-bold h1 text-danger">Upcoming Events</h3>
          <p className="h6 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            pariatur, consectetur doloribus veritatis quam eius iste quis alias
            magnam aut.
          </p>
        </div>

        {/* card display section  */}
        <div className="row my-5 py-5">
          {images.map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 my-3" key={img + index}>
              <div className="card shadow-lg border-0 rounded">
                <img
                  src={img}
                  className="card-img-top p-1"
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

        <div className="text-center my-5 py-2">
          <p className="h6 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            pariatur, consectetur doloribus veritatis quam eius iste quis alias
            magnam aut.
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
    </>
  );
};

export default Home;
