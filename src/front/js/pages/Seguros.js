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

export const SegurosBonpland = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-danger me-4"
        onClick={(e) => {
          navigate("/solicitar-poliza");
        }}
      >
        {"Comprar poliza"}
      </button>
      <img
        style={{
          height: "400px",
          width: "350x",
          margin: "30%",
          marginTop: "10%",
          borderRadius: "10px",
        }}
        src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1659057236/Red_Emergency_Ambulance_Instagram_Post_efnfrl.png"
      />
      <img
        style={{
          height: "400px",
          width: "350x",
          margin: "30%",
          marginTop: "10%",
          borderRadius: "10px",
        }}
        src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1659056618/1_vuqord.jpg"
      />
      <img
        style={{
          height: "100px",
          width: "100x",
          margin: "50%",
          marginTop: "15%",
          borderRadius: "10px",
        }}
        src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1659056618/1_vuqord.jpg"
      />
      <img
        style={{
          height: "100px",
          width: "50x",
          margin: "25%",
          marginTop: "5%",
          borderRadius: "10px",
        }}
        src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1659392688/Red_Emergency_Ambulance_Instagram_Post_1_qh0u33.png"
      />
    </div>
  );
};
