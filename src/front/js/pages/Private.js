import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Private = (props) => {
  const { store, actions } = useContext(Context);
  const token = localStorage.getItem("jwt-token");
  console.log(token);
  useEffect(() => {
    actions.private();
  }, [actions.private]);
  if (token === null) {
    return <h1> No tienes el token </h1>;
  }

  return <h1> {"Bienvenido!"} </h1>;
};
