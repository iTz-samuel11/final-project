import React, { useContext, useEffect } from "react";
import { AvalCard } from "../component/AvalCard";
import { Nav } from "../component/Nav";
import { Context } from "../store/appContext";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getUser();
  }, []);
  useEffect(() => {
    actions.getAval();
  }, []);

  const nombre = store.user && store.user.name;
  const apellido = store.user && store.user.lastname;
  const cedula = localStorage.getItem("user-cedula");
  const poliza = store.user && store.user.poliza;
  // const _poliza = poliza.slice(0, -5);
  const _poliza = "123";

  return (
    <React.Fragment>
      <Nav />
      <div className="container d-flex m-2" style={{ margin: "0%" }}>
        <div className="bg-dark col-6" style={{ width: "60%" }}>
          <div className="card mb-3 bg-dark m-1" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="img-fluid rounded-circle"
                  style={{ marginTop: "3%" }}
                  alt="foto de perfil"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ms-4">
                  <h2 className="card-title text-light">{nombre}</h2>
                  <h2 className="card-title text-light">{apellido}</h2>
                  <h4 className="card-text text-light">{`C.I.: ${cedula}`}</h4>
                </div>
              </div>
            </div>
          </div>
          <nav className="nav d-block bg-dark nav-pills mt-5">
            <a
              className="list-group-item nav-link text-light m-4"
              href="#aval"
              data-bs-toggle="tab"
            >
              {"historial de aval"}
            </a>
            <a
              className="list-group-item nav-link text-light m-4"
              href="#clave"
              data-bs-toggle="tab"
            >
              {"historial de clave"}
            </a>
          </nav>
        </div>
        <div className="bg-success col-6 tab-content" style={{ width: "60%" }}>
          <div className="tab-pane active">
            <h1>seguros bonpland</h1>
          </div>
          <div className="tab-pane" id="aval">
            <div className="d-block justify-content-center m-2 w-100">
              {store.avals.map((aval, index) => {
                return <AvalCard key={index} item={aval} poliza={_poliza} />;
              })}
            </div>
          </div>

          <div className="tab-pane" id="clave">
            <h1>2do</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
