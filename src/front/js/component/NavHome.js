import React from "react";
import logo from "../../../../docs/assets/Logotipo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#211224" }}
    >
      <div className="container-fluid">
        <img src={logo} style={{ height: "80px", width: "110px" }} />
        <p className="navbar-brand ms-3 fs-3" href="#">
          {"Seguros Bonpland"}
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ bSscrollHeight: "100px" }}
          >
            <li className="nav-item mx-2">
              <a className="nav-link fs-5" aria-current="page" href="#unete">
                {"Únete"}
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fs-5" href="#planes">
                {"Nuestros Planes"}
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fs-5" href="#aboutUs">
                {"Sobre Nosotros"}
              </a>
            </li>
          </ul>

          <Link to="/log-in">
            <button className="btn btn-light">{"logIn Here"}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
