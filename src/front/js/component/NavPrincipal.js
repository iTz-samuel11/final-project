import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../docs/assets/Logotipo.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
export const NavPrincipal = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getUser();
  }, [actions.getUser]);
  const name = store.user && store.user.name;
  const lastname = store.user && store.user.lastname;
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#211224" }}
    >
      <div className="container-fluid ms-3">
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
            <li className="nav-item ms-3">
              <Link to="/solicitud-poliza">
                <p
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="#"
                >
                  {"Solicitar mi poliza"}
                </p>
              </Link>
            </li>
          </ul>

          <div className="btn-group mx-4">
            <button
              type="button"
              className="btn btn-light dropdown-toggle fs-6"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {"solicitudes"}
            </button>
            <ul className="dropdown-menu">
              <li className="m-1">
                <Link to="/solicitud-aval">
                  <p className="dropdown-item" href="#">
                    <FontAwesomeIcon icon={faCaretRight} />
                    {"  Solicite su Carta Aval"}
                  </p>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" style={{ color: "#211224" }} />
              </li>
              <li className="m-1">
                <Link to="/clave-acceso">
                  <p className="dropdown-item" href="#">
                    <FontAwesomeIcon icon={faCaretRight} />
                    {"  Solicite su Clave de Acceso"}
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="m-3 me-5"
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
            onClick={() => {
              navigate("/perfil");
            }}
          >
            <p className="text-light m-1 my-1 fs-5">{name}</p>
            <p className="text-light fs-5">{lastname}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
