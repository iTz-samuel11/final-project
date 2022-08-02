import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
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
        <div className="alert alert-info">
          "Loading message from the backend (make sure your python backend is
          running)..."
        </div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
            Read documentation
          </a>
        </p>
      </div>
    </div>
  );
};
