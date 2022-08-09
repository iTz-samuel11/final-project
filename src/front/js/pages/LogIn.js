import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { BasicNav } from "../component/BasicNav";

// export const LogIn = (props) => {
//   return <h1>login</h1>;
// };

export const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const notUser = () => {
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: "El usuario no está registrado, por favor registrese antes de iniciar sesión",
    });
  };

  return (
    <React.Fragment>
      <BasicNav />
      <p className="fs-1 text-center">{"¿Ya está registrado?"}</p>
      <p class="fw-light text-center">
        Introduzca sus datos para ingresar al portal
      </p>
      <div className="container">
        <div className="row">
          <form>
            <input
              type="email"
              name="email"
              className="form-control m-1"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control m-1"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-dark m-4"
            onClick={async (e) => {
              const success = await actions.logIn({
                email: email,
                password: password,
              });
              if (success) {
                navigate("/segurosBonpland");
                return;
              }
              notUser();
            }}
          >
            {" "}
            {"Ingresar"}{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
