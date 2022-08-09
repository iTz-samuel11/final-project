import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BasicNav } from "../component/BasicNav";
import { Context } from "../store/appContext";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export const Pagos = () => {
  const plan1 = 2500;
  const plan2 = 5000;
  const plan3 = 10000;
  const [cedula, setCedula] = useState("");
  const [plan, setPlan] = useState("");
  const [seguro, setSeguro] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const processPayment = () => {
    console.log("number => ", state.number);
    console.log("name => ", state.name);
    console.log("expiry => ", state.expiry);
    console.log("cvc => ", state.cvc);
    console.log(JSON.stringify(state));
  };

  const missing = () => {
    Swal.fire({
      icon: "warning",
      title: "seleccione algun plan",
    });
  };
  return (
    <React.Fragment>
      <BasicNav />
      <div className="col-10 m-5">
        <p className="fs-1">{"Que Plan Desea?"}</p>
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
        <p className="fs-1">{"Datos de Pago"}</p>
        <div className="card">
          <div className="card-body">
            <Cards
              number={state.number}
              name={state.name}
              expiry={state.expiry}
              cvc={state.cvc}
              focused={state.focus}
            />
            <form>
              <div className="form-group">
                <label htmlFor="number">Número de la tarjeta</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  maxLength="16"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength="30"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-row d-flex">
                <div className="form-group col-5 ms-5">
                  <label htmlFor="expiry">Fecha de expiración</label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    maxLength="4"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-5 ms-4">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="4"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={async (e) => {
                  if (plan === "") {
                    missing();
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
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
{
  /* <h1>{`Su plan es ${seguro}`}</h1> */
}
{
  /* <button
          type="button"
          className="btn btn-light"
          onClick={async (e) => {
            if (plan === "") {
              missing();
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
        </button> */
}
