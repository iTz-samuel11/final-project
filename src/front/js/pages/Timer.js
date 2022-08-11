import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Timer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const confirmacion = setTimeout(() => {
      const Toast = Swal.mixin({
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Pago Aprobado con Exito !!!",
      });
      const nav = setTimeout(() => {
        navigate("/log-in");
      }, [3000]);
    }, [7000]);
  }, []);

  return (
    <div className="container">
      <div
        className="d-Block col-12 justify-content-center m-5 p-4"
        style={{ border: "2px solid grey", borderRadius: "10px" }}
      >
        <p className="fs-1 text-center">
          {"Estamos confirmando el pago, Por Favor espere..."}
        </p>
        <div
          className="spinner-border"
          style={{
            width: "5rem",
            height: "5rem",
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "45%",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="fs-3 text-secondary p-3">
          {"esto puede demorar algunos segundos"}
        </p>
      </div>
    </div>
  );
};
