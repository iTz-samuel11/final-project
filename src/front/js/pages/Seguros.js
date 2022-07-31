import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { NavPrincipal } from "../component/NavPrincipal";

export const SegurosBonpland = () => {
  return (
    <button
      className="btn btn-danger me-4"
      onClick={(e) => {
        navigate("/SolicitudPoliza");
      }}
    >
      {"Comprar poliza"}
    </button>
  );
};
