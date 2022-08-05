import PropTypes from "prop-types";
import React from "react";

export const AvalCard = ({ item }) => {
  return (
    <div className="card m-3 justify-content-center" style={{ width: "18rem" }}>
      <h1 className="card-img-top">{item.user_id} </h1>
      <div className="card-body">
        <h5 className="card-title">{item.motivo}</h5>
        <p className="card-text">{item.fecha}</p>
      </div>
    </div>
  );
};

AvalCard.propTypes = {
  item: PropTypes.object,
};
