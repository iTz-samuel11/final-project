import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Pagos = () => {
  const plan1 = 2500;
  const plan2 = 5000;
  const plan3 = 10000;
  const [cedula, setCedula] = useState("");
  const [plan, setPlan] = useState("");
  const [seguro, setSeguro] = useState("");
  const { store, actions } = useContext(Context);
  return (
    <React.Fragment>
      <p className="fs-1">Tipo de pago</p>
      <form>
        <h4>{"cedula"}</h4>
        <input
          type="text"
          name="fname"
          min="3"
          className="form-control m-1"
          value={cedula}
          placeholder="cedula"
          onChange={(e) => setCedula(e.target.value)}
          aria-required="true"
        />
      </form>
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
        onClick={async () => {
          if (plan === 0 || cedula === 0) {
            alert("seleccione algun plan");
          }
          const success = await actions.addSaldo({
            cedula: cedula,
            saldo: plan,
          });
          if (success) {
            console.log("listo, revisa la base de datos");
          }
        }}
      >
        {"comprar plan"}
      </button>
      <h1>{`Su plan es ${seguro}`}</h1>
    </React.Fragment>
  );
};
