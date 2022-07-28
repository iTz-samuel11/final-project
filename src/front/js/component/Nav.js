import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#211224" }}
    >
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{ marginLeft: "5%" }} href="#">
          {"Seguros Bonpland"}
        </h1>
      </div>
      <div>
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
