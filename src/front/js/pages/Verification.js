import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";

export const Verification = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Nav />
      <div>
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
      </div>
      <div>
        <button
          onClick={async (e) => {
            const success = await actions.verification({
              email: email,
              password: password,
            });
            if (success) {
              navigate("/solicitar-poliza");
              return;
            }
            alert("something happened while creating the user");
          }}
        ></button>
      </div>
    </React.Fragment>
  );
};
