import PropTypes from "prop-types";
import React from "react";

export const AvalCard = ({ item, poliza }) => {
  return (
    <div
      className="card m-3 justify-content-center"
      style={{
        width: "18rem",
        backgroundImage: `url("https://st4.depositphotos.com/4337187/23999/i/600/depositphotos_239998584-stock-photo-abstract-aged-ancient-antique-background.jpg")`,
      }}
    >
      <p className="card-img-top fs-1 text-center">
        <strong>{poliza} *****</strong>
      </p>
      <div className="card-body">
        <div>
          <p className="card-title fs-4">
            {"Motivo: "}
            <strong>{item.motivo}</strong>
          </p>
        </div>
        <div>
          <p className="card-text fs-4">
            {"Fecha Solicitada: "}
            <strong>{item.fecha_solicitada.slice(0, -16)}</strong>
          </p>
        </div>
        <div>
          <p className="card-text fs-4">
            {"Fecha Pedida: "}
            <strong>{item.fecha_a_pedir}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

AvalCard.propTypes = {
  item: PropTypes.object,
  poliza: PropTypes.string,
};
