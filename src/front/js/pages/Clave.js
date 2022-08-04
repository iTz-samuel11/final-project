import { useContext, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const Clave = () => {
  const [poliza, setPoliza] = useState("");
  const [razon, setRazon] = useState("");
  const [lugar, setLugar] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <React.Fragment>
      <div className="tab-content py-5 justify-content-center">
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
          <input
            type="text"
            className="form-control m-2"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            placeholder="Clinica a la que se dirige"
          />
        </form>
        <button
          className="btn btn-dark"
          onClick={async () => {
            const clave = await actions.Clave({
              poliza: poliza,
              razon: razon,
              lugar: lugar,
            });
            if (clave) {
              alert("clave pedida");
              return;
            }
          }}
        />
      </div>
    </React.Fragment>
  );
};
