import { useContext, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Footer } from "../component/Footer";
import { Nav } from "../component/Nav";
import { MapView } from "../component/MapView";

export const Clave = () => {
  const [poliza, setPoliza] = useState("");
  const [lugar, setLugar] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <div className="tab-content py-5 justify-content-center d-block">
          <form>
            <h1>{"Ingrese su número de poliza"}</h1>
            <input
              type="text"
              className="form-control m-2"
              placeholder="Poliza"
              value={poliza}
              onChange={(e) => setPoliza(e.target.value)}
            />
            <h1>{"Clínica a la que se va a dirigir"}</h1>
            <MapView />
          </form>
          <div className="m-4">
            <button
              className="btn btn-dark m-4 p-4 fs-4 col-11"
              onClick={async () => {
                const clave = await actions.solicitudClave({
                  poliza: poliza,
                  lugar: lugar,
                });
                if (clave) {
                  alert("clave pedida");
                  return;
                }
              }}
            >
              {"Solicitar Clave"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};
