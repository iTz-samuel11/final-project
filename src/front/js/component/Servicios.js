import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Swal from "sweetalert2";
import "animate.css";

export const Servicios = () => {
  const ambulancia = () => {
    Swal.fire({
      icon: "info",
      title: "⬇️ Llama a una Ambulancia ⬇️",
      html: "<b> 0212-3445678 </b>",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const cita = () => {
    Swal.fire({
      icon: "info",
      title: "⬇️ Programa una Cita ⬇️",
      html: "<b> 0424-2550319 </b>",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const consulta = () => {
    Swal.fire({
      icon: "info",
      title: "⬇️ Programa tu Consulta ⬇️",
      html: "<b> 0424-5268965 </b>",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const asesor = () => {
    Swal.fire({
      icon: "info",
      title: "⬇️ Comunicate con Nuestro Asesor ⬇️",
      html: "<b> 0424-3144684 </b>",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <React.Fragment>
      <div className="d-block">
        <div className="d-flex">
          <div
            className="col m-3"
            onClick={() => {
              ambulancia();
            }}
            style={{
              height: "430px",
              borderRadius: "22px",
              backgroundImage: `url("https://media.istockphoto.com/vectors/forefinger-pushing-on-red-button-vector-id1219245901?k=20&m=1219245901&s=612x612&w=0&h=0qMjlp-U2neBx6N4DWoOpL80-CJsJZKxaU5RSmz_sLM=")`,
            }}
          >
            <p className="fs-2 text-center">{"Tienes alguna emergencia?"}</p>
            <p className="fs-2 text-center" style={{ marginTop: "50%" }}>
              <FontAwesomeIcon icon={faArrowUp} />
              <strong>{"      Llama a una Ambulancia      "} </strong>
              <FontAwesomeIcon icon={faArrowUp} />
            </p>
          </div>
          <div
            className="col m-3"
            onClick={() => {
              consulta();
            }}
            style={{
              height: "430px",
              borderRadius: "22px",
              backgroundImage: `url("https://img.freepik.com/fotos-premium/diseno-simplemente-minimalista-estetoscopio-equipo-medicina-corazon-rojo-aislado-sobre-fondo-azul-pastel-moda_80942-4687.jpg")`,
            }}
          >
            <p className="fs-2 text-center">
              {"Necesitas Programar alguna consulta médica"}
            </p>
            <p className="fs-2 text-center" style={{ marginTop: "42%" }}>
              <FontAwesomeIcon icon={faArrowUp} />
              <strong>{"     Programa una cita de manera rápida     "}</strong>
              <FontAwesomeIcon icon={faArrowUp} />
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="col m-3"
            onClick={() => {
              cita();
            }}
            style={{
              height: "430px",
              borderRadius: "22px",
              backgroundImage: `url("https://img.freepik.com/vector-premium/medico-linea-aplicacion-telefonos-inteligentes-clinica-medica-linea-telemedicina-atencion-medica-linea-concepto-consulta-medica-ilustracion-personajes-personas-vectoriales-3d-estilo-minimalista-dibujos-animados_365941-847.jpg?size=338&ext=jpg")`,
            }}
          >
            <p className="fs-2 text-center">
              {"Necesitas alguna consulta online?"}
            </p>
            <p className="fs-2 text-center" style={{ marginTop: "50%" }}>
              <FontAwesomeIcon icon={faArrowUp} />
              <strong>{"      Programa una consulta online      "}</strong>
              <FontAwesomeIcon icon={faArrowUp} />
            </p>
          </div>
          <div
            className="col m-3"
            onClick={() => {
              asesor();
            }}
            style={{
              height: "430px",
              borderRadius: "22px",
              backgroundImage: `url("https://st3.depositphotos.com/10376142/35848/i/600/depositphotos_358485912-stock-photo-pink-man-with-a-headset.jpg")`,
            }}
          >
            <p className="fs-2 text-center">{"Necesitas alguna aseroria?"}</p>
            <p className="fs-2 text-center" style={{ marginTop: "50%" }}>
              <FontAwesomeIcon icon={faArrowUp} />
              <strong>
                {"      Contacta a uno de nuestros asesores      "}
              </strong>
              <FontAwesomeIcon icon={faArrowUp} />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
