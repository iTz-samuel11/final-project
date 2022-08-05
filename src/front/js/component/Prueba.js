import PropTypes from "prop-types";
import React from "react";

export const Prueba = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h1 className="card-img-top">{item.user_id} </h1>
      <div className="card-body">
        <h5 className="card-title">{item.motivo}</h5>
        <p className="card-text">{item.fecha}</p>
        <a href="#" className="btn btn-warning">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Prueba.propTypes = {
  item: PropTypes.object,
};
