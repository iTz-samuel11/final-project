import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../../../docs/assets/Logotipo.png";
import Swal from "sweetalert2";
import { Footer } from "../component/Footer";
import { NavSign } from "../component/NavSign";

export const SignUp = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cedula, setCedula] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const notUser = () => {
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: "No pude crear al usuario, Por favor inténtelo más tarde",
    });
  };
  const pass = () => {
    Swal.fire({
      icon: "warning",
      title: "La contraseña debe contener 8 caracteres",
    });
  };
  const missing = () => {
    Swal.fire({
      icon: "warning",
      title: "Por Favor, llene todas las casillas",
    });
  };

  return (
    <React.Fragment>
      <NavSign />
      <div className="container d-flex">
        <div className="col-7 me-5">
          <div className="row" style={{ marginTop: "5%" }}>
            <form>
              <p className="fs-2">
                <strong>{"Nombre"}</strong>
              </p>
              <input
                type="text"
                name="fname"
                min="3"
                className="form-control m-1"
                value={nombre}
                placeholder="nombre"
                onChange={(e) => setNombre(e.target.value)}
                aria-required="true"
              />
              <p className="fs-2">
                <strong>{"Apellido"}</strong>
              </p>
              <input
                type="text"
                name="lname"
                min="3"
                className="form-control m-1"
                value={apellido}
                placeholder="apellido"
                onChange={(e) => setApellido(e.target.value)}
                aria-required="true"
              />
              <p className="fs-2">
                <strong>{"Cedula"}</strong>
              </p>
              <input
                type="text"
                name="fname"
                min="3"
                className="form-control m-1"
                value={cedula}
                placeholder="V-"
                onChange={(e) => setCedula(e.target.value)}
                aria-required="true"
              />
              <p className="fs-2">
                <strong>{" Email"}</strong>
              </p>
              <input
                type="email"
                name="email"
                className="form-control m-1"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true"
              />
              <p className="fs-2">
                <strong>{"Contraseña"}</strong>
              </p>
              <input
                type="password"
                className="form-control m-1"
                name="password"
                min={"8"}
                value={password}
                placeholder="contraseña"
                onChange={(e) => setPassword(e.target.value)}
                aria-required="true"
              />
            </form>
          </div>
          <div className="row" style={{ marginLeft: "60%" }}>
            <button
              type="button"
              className="btn btn-dark m-4 col-8"
              onClick={async (e) => {
                if (
                  password === "" ||
                  email === "" ||
                  nombre === "" ||
                  apellido === "" ||
                  cedula === ""
                ) {
                  missing();
                  return;
                }
                if (password.length <= 7) {
                  pass();
                  return;
                }
                const success = await actions.signUpUser({
                  nombre: nombre,
                  apellido: apellido,
                  email: email,
                  password: password,
                  cedula: cedula,
                });
                if (success) {
                  navigate("/pagopoliza");
                  return;
                }
                notUser();
              }}
            >
              {"Registrese"}
            </button>
          </div>
        </div>
        <div className="col-5">
          <img
            style={{
              height: "400px",
              width: "auto",
              margin: "30%",
              marginTop: "10%",
              borderRadius: "55px",
            }}
            src={logo}
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
