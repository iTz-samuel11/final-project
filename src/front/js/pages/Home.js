import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";
import emergencia from "../../../../docs/assets/Emergencia.png";
import Swal from "sweetalert2";

export const Home = () => {
  const { store, actions } = useContext(Context);
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
      <div>
        <button
          className="btn btn-danger me-4 btn-lg"
          onClick={(e) => {
            navigate("/sign-up");
          }}
        >
          {"Únete a nosotros!"}
        </button>
        <img
          style={{
            height: "500px",
            width: "200x",
            margin: "20%",
            marginTop: "2%",
            marginLeft: "62%",
          }}
          src={poliza}
        ></img>

        <button onClick={() => myswal()}>saludar</button>
      </div>
    </div>
  );
};
