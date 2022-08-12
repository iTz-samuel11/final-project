import PropTypes from "prop-types";
import React from "react";

export const AvalCard = ({ item, poliza }) => {
  return (
    <div className="card m-3 justify-content-center" style={{ width: "18rem" }}>
      <h1 className="card-img-top">{poliza} *****</h1>
      <div className="card-body">
        <h5 className="card-title">{item.motivo}</h5>
        <p className="card-text">{item.lugar}</p>
        {/* <p className="card-text">{item.fecha_solicitada.slice(0, -16)}</p> */}
        <p className="card-text">{item.fecha_a_pedir}</p>
      </div>
    </div>
  );
};

AvalCard.propTypes = {
  item: PropTypes.object,
  poliza: PropTypes.string,
};
