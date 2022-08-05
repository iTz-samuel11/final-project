import React, { useContext } from "react";
import { Prueba } from "../component/Prueba";
import { Context } from "../store/appContext";

export const Prueba2 = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="d-flex flex-wrap w-100">
        {store.avals.map((aval, index) => {
          return <Prueba key={aval.id} item={aval} />;
        })}
      </div>
    </div>
  );
};
