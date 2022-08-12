// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHospital,
//   faTruckMedical,
//   faUserDoctor,
// } from "@fortawesome/free-solid-svg-icons";
import emergencia from "../../../../docs/assets/Emergencia.png";
import {} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavPrincipal } from "../component/NavPrincipal";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";
import logo from "../../../../docs/assets/Logotipo.png";
import { Navbar } from "../component/NavHome";
import Swal from "sweetalert2";

export const SegurosBonpland = () => {
  const navigate = useNavigate();
  const myswal = () => {
    Swal.fire({
      title:
        "llama a una ambulancia o solicita atención domiciliaria a través de",
      text: "02123445678/0424255031\n En ambos números por favor indentifiquese como cliente de Seguros BonPland",
    });
  };

  return (
    <div>
      <Navbar />
      <h1 align="center"> Bienvenidos! </h1>
      <div style={{ marginTop: "8%" }}>
        <div className="row py-3 m-4">
          <div className="col-4 d-flex justify-content-start g-0 ">
            <figure className="figure">
              <img
                className="aspect-ratio-1-1 "
                src={emergencia}
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </figure>
          </div>
          <div className="col-8 g-0">
            <button class="btn btn-danger btn-lg" onClick={() => myswal()}>
              Seleccione aquí si tiene alguna emergencia
            </button>
          </div>
          <div className="container" id="unete">
            <div
              className="m-4"
              style={{
                border: "1px solid gray",
                borderRadius: "40px",
                backgroundImage: `url("https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/03/color-degradado-fondos-degradados-multicolor-51200.jpg?fit=1920%2C1200&quality=50&strip=all&ssl=1923/740/gradient-wallpaper-preview.jpg")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
