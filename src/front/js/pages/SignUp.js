import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cedula, setCedula] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container d-flex">
      <div className="col-7 me-5">
        <h1 className="m-3"> SignUp</h1>
        <div className="row">
          <form>
            <h4>{"Name"}</h4>
            <input
              type="text"
              name="fname"
              min="3"
              className="form-control m-1"
              value={nombre}
              placeholder="name"
              onChange={(e) => setNombre(e.target.value)}
              aria-required="true"
            />
            <h4>{"Last Name"}</h4>
            <input
              type="text"
              name="lname"
              min="3"
              className="form-control m-1"
              value={apellido}
              placeholder="Last name"
              onChange={(e) => setApellido(e.target.value)}
              aria-required="true"
            />
            <h4>{"Cedula"}</h4>
            <input
              type="text"
              name="fname"
              min="3"
              className="form-control m-1"
              value={cedula}
              placeholder="C.I."
              onChange={(e) => setCedula(e.target.value)}
              aria-required="true"
            />
            <h4 className="text-secondary">{" Email"}</h4>
            <input
              type="email"
              name="email"
              className="form-control m-1"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
            />
            <h4 className="text-secondary"> {"Password"}</h4>
            <input
              type="password"
              className="form-control m-1"
              name="password"
              min={"8"}
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
            />
          </form>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-dark m-4"
            onClick={async (e) => {
              if (
                password === "" ||
                email === "" ||
                nombre === "" ||
                apellido === "" ||
                cedula === ""
              ) {
                alert("llene todas las casillas por favor");
                return;
              }
              if (password.length <= 7) {
                alert("La contraseña debe tener minimo 8 caracteres");
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
                navigate("/log-in");
                return;
              }
              alert("no pude crear el usuario");
            }}
          >
            {"Registrese"}
          </button>
        </div>
      </div>
      <div className="col-5">
        <h1>Seguros Bonpland</h1>
        <img
          style={{
            height: "200px",
            width: "200px",
            margin: "30%",
            marginTop: "10%",
          }}
          src="https://verdeyazul.diarioinformacion.com/wp-content/uploads/2021/05/Falco-Pellegrino-Falco-peregrinus-copertina-1024x576.jpg"
        />
      </div>
    </div>
  );
};
