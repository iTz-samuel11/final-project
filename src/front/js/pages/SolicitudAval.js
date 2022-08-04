import React, { useContext, useState } from "react";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";

export const SolicitudAval = () => {
  const [poliza, setPoliza] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [usoPersonal, setUsoPersonal] = useState(true);
  const { store, actions } = useContext(Context);
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
              type="text"
              className="form-control m-4"
              placeholder="Poliza"
              value={poliza}
              onChange={(e) => setPoliza(e.target.value)}
              aria-required="true"
            />
            <h3>{"fecha"}</h3>
            <input
              type="text"
              className="form-control m-4"
              placeholder="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              aria-required="true"
            />
            <h3>{"Presupuesto a Solicitar"}</h3>
            <input
              type="text"
              className="form-control m-4"
              placeholder="Presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              aria-required="true"
            />
            <h3>{"Informe de la Solicitud"}</h3>
            <textarea
              type="text"
              className="form-control m-4"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <h3>{"Lugar"}</h3>
            <textarea
              type="text"
              className="form-control m-4"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <h3>{"Informe del Doctor"} </h3>
            <input type="file" name="file" />
            <button
              className="btn btn-dark"
              onClick={async () => {
                const success = await actions.solicitudAval({
                  poliza: poliza,
                  presupuesto: presupuesto,
                  motivo: motivo,
                  lugar: lugar,
                  fecha: fecha,
                  uso_personal: usoPersonal,
                });
                if (success) {
                  alert("listo el mandao");
                  return;
                }
                // alert("no pude hacerlo");
              }}
            />
          </form>
        </div>
        <div className="tab-pane" id="externo">
          <form>
            <h3>{"Numero de Poliza"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Poliza"
              value={poliza}
              onChange={(e) => setPoliza(e.target.value)}
              aria-required="true"
            />
            <h3>{"Presupuesto a Solicitar"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I. beneficiario"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              aria-required="true"
            />
            <h3>{"Fecha"}</h3>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              aria-required="true"
            />
            <h3>{"Informe de Solicitud"}</h3>
            <input
              type="textarea"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            />
            <h3>{"Lugar"}</h3>
            <input
              type="text"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Lugar"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
            />
            <h3>{"Informe del Doctor"}</h3>
            <input type="file" name="file" />
            <button
              className="btn btn-dark"
              type="button"
              onClick={async () => {
                setUsoPersonal(false);
                const success = await actions.solicitudAval({
                  poliza: poliza,
                  presupuesto: presupuesto,
                  motivo: motivo,
                  lugar: lugar,
                  fecha: fecha,
                  uso_personal: usoPersonal,
                });
                if (success) {
                  alert("listo el mandao");
                  return;
                }
                // alert("no pude hacerlo");
              }}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
