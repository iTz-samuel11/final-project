import React, { useContext, useRef, useState } from "react";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";
import emailjs from "emailjs-com";

export const SolicitudAval = () => {
  const form = useRef();
  const email = localStorage.getItem("user-email");
  const nombre = localStorage.getItem("user-nombre");
  const [poliza, setPoliza] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [usoPersonal, setUsoPersonal] = useState(true);
  const { store, actions } = useContext(Context);

  const sendEmail = async (e) => {
    e.preventDefault();
    const succes = await actions.solicitudAval({
      poliza: poliza,
      presupuesto: presupuesto,
      motivo: motivo,
      lugar: lugar,
      fecha: fecha,
      uso_personal: usoPersonal,
    });
    if (!succes) {
      alert("No se envió");
      return;
    } else {
      emailjs
        .sendForm(
          "service_by7xqfy",
          "template_012hifp",
          form.current,
          "5J8lZIQhkW1CEw8Up"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
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
          <form ref={form} onSubmit={sendEmail}>
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
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              aria-required="true"
            />
            <h3>{"Presupuesto a Solicitar"}</h3>
            <input
              type="text"
              className="form-control m-4"
              placeholder="Presupuesto"
              nombre="presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              aria-required="true"
            />
            <h3>{"Informe de la Solicitud"}</h3>
            <textarea
              type="text"
              className="form-control m-4"
              value={motivo}
              nombre="motivo"
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
            <input type="hidden" name="user_email" value={email} />
            <input type="hidden" name="nombre" value={nombre} />
            <button className="btn btn-dark" type="submit" value="send" />
          </form>
        </div>
        <div className="tab-pane" id="externo">
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="user_email" value={email} />
            <input type="hidden" name="nombre" value={nombre} />
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
              onChange={(e) => {
                setLugar(e.target.value);
                setUsoPersonal(false);
              }}
            />
            <h3>{"Informe del Doctor"}</h3>
            <input type="file" name="file" />
            <button className="btn btn-dark" type="submit" value="send" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
