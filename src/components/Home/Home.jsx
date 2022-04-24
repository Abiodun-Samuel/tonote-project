import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="hero text-center">
                <h1>ToNote Technologies</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, commodi eos. Reiciendis eum non quasi, in a sint
                  harum pariatur corporis fugit consequatur magni aut id illo
                  voluptatum vel? Fugit.
                </p>
                <Link to="/register" className="btn btn-primary my-2">
                  <span className="d-flex align-items-center">
                    <FaSignInAlt className="mx-2" /> Register Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
