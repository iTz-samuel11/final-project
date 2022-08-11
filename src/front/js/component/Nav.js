import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../docs/assets/Logotipo.png";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#211224" }}
    >
      <div className="container-fluid">
        <img src={logo} style={{ height: "80px", width: "110px" }} />
        <p className="navbar-brand ms-3 fs-3 justify-content-start" href="#">
          {"Seguros Bonpland"}
        </p>
        <button
          className="btn btn-danger me-4"
          onClick={(e) => {
            navigate("/segurosBonpland");
          }}
        >
          {"volver"}
        </button>
      </div>
    </nav>
  );
};
