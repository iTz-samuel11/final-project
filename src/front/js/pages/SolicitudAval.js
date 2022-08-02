import React from "react";
import { Nav } from "../component/Nav";

export const SolicitudAval = () => {
  return (
    <React.Fragment>
      <Nav />
      <nav className="nav justify-content-center nav-pills m-2">
        <a className="nav-link active" href="#usoPersonal" data-bs-toggle="tab">
          {"personal"}
        </a>
        <a className="nav-link" href="#externo" data-bs-toggle="tab">
          {"externa"}
        </a>
      </nav>
      <div className="tab-content py-5 justify-content-center">
        <div className="tab-pane active" id="usoPersonal">
          <form>
            <h3>{"Numero de Poliza"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Poliza"
              aria-required="true"
            />
            <h3>{"Cedula de Identidad"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I."
              aria-required="true"
            />
            <h3>{"Presupuesto a Solicitar"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              aria-required="true"
            />
            <h3>{"Informe de la Solicitud"}</h3>
            <textarea
              type="text"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <h3>{"Informe del Doctor"} </h3>
            <input type="file" name="file" />
          </form>
        </div>
        <div className="tab-pane" id="externo">
          <form>
            <h3>{"Numero de Poliza"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Poliza"
              aria-required="true"
            />
            <h3>{"Cedula de beneficario"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I. beneficiario"
              aria-required="true"
            />
            <h3>{"Presupuesto a Solicitar"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              aria-required="true"
            />
            <h3>{"Informe de Solicitud"}</h3>
            <input
              type="text"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <h3>{"Informe del Doctor"}</h3>
            <input type="file" name="file" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
