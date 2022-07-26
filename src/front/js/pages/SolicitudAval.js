import React from "react";

export const SolicitudAval = () => {
  return (
    <React.Fragment>
      <nav className="nav justify-content-center nav-pills m-2">
        <a className="nav-link active" href="#usoPersonal" data-bs-toggle="tab">
          personal
        </a>
        <a className="nav-link " href="#externo" data-bs-toggle="tab">
          externa
        </a>
      </nav>
      <div className="tab-content py-5 justify-content-center">
        <div className="tab-pane active" id="usoPersonal">
          <form>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I."
              aria-required="true"
            />
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              aria-required="true"
            />
            <input
              type="text"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <input type="file" name="file" />
          </form>
        </div>
        <div className="tab-pane" id="externo">
          <form>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I. beneficiario"
              aria-required="true"
            />
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              aria-required="true"
            />
            <input
              type="text"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <input type="file" name="file" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
