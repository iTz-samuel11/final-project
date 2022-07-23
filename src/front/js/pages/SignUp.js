import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container d-flex">
      <div className="col-7 me-5">
        <h1 className="m-3"> SignUp</h1>
        <div className="row">
          <form>
            <h4 className="text-secondary">{" Email"}</h4>
            <input
              type="text"
              name="email"
              className="form-control m-1"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className="text-secondary"> {"Password"}</h4>
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
          <button type="button" className="btn btn-success m-4">
            {"sign up..."}
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
