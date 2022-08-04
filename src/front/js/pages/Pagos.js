import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pagos = () => {
  const plan1 = 2500;
  const plan2 = 5000;
  const plan3 = 10000;
  const [cedula, setCedula] = useState("");
  const [plan, setPlan] = useState("");
  const [seguro, setSeguro] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <p className="fs-1">Tipo de pago</p>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan1);
          setSeguro("Plan salud básico");
        }}
      >
        {"plan basico '2500$'"}
      </button>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan2);
          setSeguro("Plan salud intermedio");
        }}
      >
        {"plan intermedio '5000$'"}
      </button>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan3);
          setSeguro("Plan salud gold");
        }}
      >
        {"plan gold '10000$'"}
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={async (e) => {
          if (plan === "") {
            alert("seleccione algun plan");
            return;
          }
          const success = await actions.addSaldo({
            cedula: store.user.cedula,
            saldo: plan,
          });
          if (success) {
            navigate("/log-in");
            console.log("listo, revisa la base de datos");
            return;
          }
        }}
      >
        {"comprar plan"}
      </button>
      <h1>{`Su plan es ${seguro}`}</h1>
    </React.Fragment>
  );
};
