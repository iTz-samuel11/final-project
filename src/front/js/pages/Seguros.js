// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHospital,
//   faTruckMedical,
//   faUserDoctor,
// } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavPrincipal } from "../component/NavPrincipal";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";

export const SegurosBonpland = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-danger me-4 btn-lg"
        onClick={(e) => {
          navigate("/verification");
        }}
      >
        {"Solicitar poliza"}
      </button>
      <p>
        <img
          style={{
            height: "500px",
            width: "200x",
            margin: "20%",
            marginTop: "2%",
            marginRight: "100%",
          }}
          src={poliza}
        />
      </p>
    </div>
  );
};
