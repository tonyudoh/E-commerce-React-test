import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666616500/logo.png"></img>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discovery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-5">
                <Link to="/Productlist" className="nav-link active fw-bold">
                  Product
                </Link>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link active fw-bold" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* icons */}
            <div className="d-flex">
              <a href="#" className="mx-4">
                <img
                  src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Profile.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Cart.png"
                  alt=""
                />
              </a>
            </div>
            {/* icons ends*/}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
