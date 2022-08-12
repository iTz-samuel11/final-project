import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { MapView } from "../component/MapView";
import { Footer } from "../component/Footer";
import { useNavigate } from "react-router-dom";

export const SolicitudAval = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.getUser();
  }, []);

  const form = useRef();
  const email = store.user && store.user.email;
  const nombre = store.user && store.user.name;
  const [poliza, setPoliza] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [usoPersonal, setUsoPersonal] = useState(true);

  const notSend = () => {
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: "No he podido enviar la solicitud",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const succes = await actions.solicitudAval({
      poliza: poliza,
      presupuesto: presupuesto,
      motivo: motivo,
      fecha_a_pedir: fecha,
      uso_personal: usoPersonal,
    });
    if (!succes) {
      notSend();
      return;
    } else {
      const Toast = Swal.mixin({
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "success",
        title: "Su Aval ya ha sido enviada al Correo !!!",
      });
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

      setTimeout(() => {
        navigate("/segurosBonpland");
      }, [3000]);
    }
  };
  return (
    <React.Fragment>
      <Nav />
      <nav className="nav nav-dark justify-content-center nav-pills m-2">
        <a
          className="nav-link active fs-5"
          href="#usoPersonal"
          data-bs-toggle="tab"
        >
          {"personal"}
        </a>
        <a className="nav-link fs-5" href="#externo" data-bs-toggle="tab">
          {"externa"}
        </a>
      </nav>
      <div className="tab-content py-5 justify-content-center">
        <div className="tab-pane active" id="usoPersonal">
          <form ref={form} onSubmit={sendEmail}>
            <p className="fs-2">
              <strong>{"Numero de Poliza"}</strong>
            </p>
            <input
              type="text"
              className="form-control m-4"
              placeholder="Poliza"
              value={poliza}
              onChange={(e) => setPoliza(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"fecha"}</strong>
            </p>
            <input
              type="text"
              className="form-control m-4"
              placeholder="fecha"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"Presupuesto a Solicitar"}</strong>
            </p>
            <input
              type="text"
              className="form-control m-4"
              placeholder="Presupuesto"
              nombre="presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"Informe de la Solicitud"}</strong>
            </p>
            <textarea
              type="text"
              className="form-control m-4"
              value={motivo}
              nombre="motivo"
              onChange={(e) => setMotivo(e.target.value)}
              style={{ height: "80px" }}
              placeholder="Informe"
            />
            <p className="fs-2">
              <strong>{"Lugar"}</strong>
            </p>
            <div>
              <MapView />
            </div>
            <input type="hidden" name="user_email" value={email} />
            <input type="hidden" name="nombre" value={nombre} />
            <div className="m-4">
              <button
                className="btn btn-dark m-4 p-4 fs-4 col-11"
                type="submit"
                value="send"
                style={{ marginLeft: "60%" }}
              >
                {"Enviar Petición"}
              </button>
            </div>
          </form>
        </div>
        <div className="tab-pane" id="externo">
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="user_email" value={email} />
            <input type="hidden" name="nombre" value={nombre} />
            <p className="fs-2">
              <strong>{"Numero de Poliza"}</strong>
            </p>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Poliza"
              value={poliza}
              onChange={(e) => setPoliza(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"Presupuesto a Solicitar"}</strong>
            </p>
            <input
              type="number"
              className="form-control m-4"
              placeholder="C.I. beneficiario"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"Fecha"}</strong>
            </p>
            <input
              type="number"
              className="form-control m-4"
              placeholder="Presupuesto"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              aria-required="true"
            />
            <p className="fs-2">
              <strong>{"Informe de Solicitud"}</strong>
            </p>
            <input
              type="textarea"
              className="form-control m-4"
              style={{ height: "80px" }}
              placeholder="Informe"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            />
            <p className="fs-2">
              <strong>{"Lugar"}</strong>
            </p>
            <div>
              <MapView />
            </div>
            <div className="m-4">
              <button
                className="btn btn-dark m-4 p-4 fs-4 col-11"
                type="submit"
                value="send"
                style={{ marginLeft: "60%" }}
              >
                {"Enviar Petición"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
