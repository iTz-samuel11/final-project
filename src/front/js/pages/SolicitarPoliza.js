import React, { useContext, useEffect } from "react";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";

export const SolicitudPoliza = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.poliza();
  }, [actions.poliza]);
  return (
    <React.Fragment>
      <Nav />
      <div>{`${store.poliza && store.poliza.poliza}`}</div>
    </React.Fragment>
  );
};
