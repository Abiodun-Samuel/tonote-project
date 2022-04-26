import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";
import { CgMenuGridR } from "react-icons/cg";
import { FaSignInAlt, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
        <div className="container">
          <Link className="m-0 p-0" to="/">
            <img src={logo} alt="logo" className="navbar-brand" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar--icon">
              <CgMenuGridR />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaHome className="mx-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <FaSignInAlt className="mx-2" /> Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
