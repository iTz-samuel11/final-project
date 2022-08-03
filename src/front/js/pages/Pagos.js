import React, { useState } from "react";

export const Pagos = () => {
  const plan1 = 2500;
  const plan2 = 5000;
  const plan3 = 10000;
  const [plan, setPlan] = useState(0);
  const [seguro, setSeguro] = useState("");
  return (
    <React.Fragment>
      <p className="fs-1">Tipo de pago</p>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan1);
          setSeguro("Plan salud básico");
        }}
      ></button>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan2);
          setSeguro("Plan salud intermedio");
        }}
      ></button>
      <button
        className=" col-3 btn btn-dark m-2"
        onClick={() => {
          setPlan(plan3);
          setSeguro("Plan salud gold");
        }}
      ></button>
      <button
        onClick={() => {
          console.log(plan);
        }}
      >
        {""}
      </button>
      <h1>{`Su plan es ${seguro}`}</h1>
    </React.Fragment>
  );
};
