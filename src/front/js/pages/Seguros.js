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

export const SegurosBonpland = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavPrincipal />
      <div>
        <div>
          <div>
            <img
              style={{
                height: "500px",
                width: "200x",
                margin: "5%",
                marginTop: "2%",
                marginRight: "62%",
              }}
              src={emergencia}
            ></img>
            <img
              style={{
                height: "400px",
                width: "350x",
                margin: "30%",
                marginTop: "10%",
                borderRadius: "55px",
              }}
              src={logo}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
