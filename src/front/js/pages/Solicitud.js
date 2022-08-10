import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";

export const Solicitud = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.poliza();
  }, [actions.poliza]);
  return (
    <React.Fragment>
      <Nav />
      <div className="card text-center">
        <div className="card-body">
          <p className="card-title fs-3">
            {`su poliza ha sido enviada al correo`}{" "}
            <strong>{` "${store.poliza && store.poliza.email}"`}</strong>
          </p>
          <p className="card-text">
            {"si no le ha llegado nada, puede volver a intentarlo"}
          </p>
          <button
            onClick={(e) => {
              navigate("/solicitud-poliza");
            }}
            className="btn btn-primary"
          >
            {"volver"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
