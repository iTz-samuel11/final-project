import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const BasicNav = () => {
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
    </nav>
  );
};
