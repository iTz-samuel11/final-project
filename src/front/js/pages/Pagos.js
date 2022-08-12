import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BasicNav } from "../component/BasicNav";
import { Context } from "../store/appContext";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { Footer } from "../component/Footer";

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
  const erro = () => {
    Swal.fire({
      icon: "error",
      title: "fallo en agregar un plan",
    });
  };
  return (
    <React.Fragment>
      <BasicNav />
      <div className="m-5">
        <p className="fs-1">{"Que Plan Desea?"}</p>
        <div className="d-flex">
          <div
            className="col m-3"
            style={{
              border: "2px solid #9fd5d1",
              borderRadius: "10px",
              backgroundImage: `url("https://i.pinimg.com/736x/8c/9a/66/8c9a66a939a7e985e34fd0b1ff306f4b.jpg")`,
            }}
          >
            <h2 className="m-3">{" Plan Grandidierite "}</h2>
            <p className="fs-4" style={{ marginLeft: "30%" }}>
              <FontAwesomeIcon icon={faArrowDown} />
              {"     "}
              {"Te incluye"}
              {"     "}
              <FontAwesomeIcon icon={faArrowDown} />
            </p>
            <div className="m-4">
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Atención las 24 Horas"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Cobertura de Hasta 2.500$"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Multiples solicitudes desde la misma Poliza"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Sin pago por Afiliarte con Nosotros"}
              </p>
            </div>
            <div style={{ marginTop: "4%", marginLeft: "30%" }}>
              <p className="fs-4 text-secondary">{"630$ Trimestral"}</p>
            </div>
            <div>
              <button
                style={{ width: "90%" }}
                className="btn btn-dark m-4"
                onClick={() => {
                  setPlan(plan1);
                  setSeguro(" Salud Grandidierite");
                }}
              >
                {"Seleccionar Plan"}
              </button>
            </div>
          </div>
          <div
            className="col m-3"
            style={{
              border: "2px solid #572364",
              borderRadius: "10px",
              backgroundImage: `url("https://i.pinimg.com/736x/8c/9a/66/8c9a66a939a7e985e34fd0b1ff306f4b.jpg")`,
            }}
          >
            <h2 className="m-3">{" Taaffeite "}</h2>
            <p className="fs-4" style={{ marginLeft: "30%" }}>
              <FontAwesomeIcon icon={faArrowDown} />
              {"     "}
              {"Te incluye"}
              {"     "}
              <FontAwesomeIcon icon={faArrowDown} />
            </p>
            <div className="m-4">
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Atención las 24 Horas"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Cobertura de Hasta 5.000$"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Multiples solicitudes desde la misma Poliza"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Sin pago por Afiliarte con Nosotros"}
              </p>
            </div>
            <div style={{ marginTop: "4%", marginLeft: "30%" }}>
              <p className="fs-4 text-secondary">{"1.221$ Trimestral"}</p>
            </div>
            <div>
              <button
                style={{ width: "90%" }}
                className="btn btn-dark m-4"
                onClick={() => {
                  setPlan(plan2);
                  setSeguro(" Salud Taaffeite");
                }}
              >
                {"Seleccionar Plan"}
              </button>
            </div>
          </div>
          <div
            className="col m-3"
            style={{
              border: "2px solid #CB2400",
              borderRadius: "10px",
              backgroundImage: `url("https://i.pinimg.com/736x/8c/9a/66/8c9a66a939a7e985e34fd0b1ff306f4b.jpg")`,
            }}
          >
            <h2 className="m-3">{" Diamante Rojo "}</h2>
            <p className="fs-4" style={{ marginLeft: "30%" }}>
              <FontAwesomeIcon icon={faArrowDown} />
              {"     "}
              {"Te incluye"}
              {"     "}
              <FontAwesomeIcon icon={faArrowDown} />
            </p>
            <div className="m-4">
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Atención las 24 Horas"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Cobertura de Hasta 10.000$"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Multiples solicitudes desde la misma Poliza"}
              </p>
              <p className="fs-5">
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                {" Sin pago por Afiliarte con Nosotros"}
              </p>
            </div>
            <div style={{ marginTop: "4%", marginLeft: "30%" }}>
              <p className="fs-4 text-secondary">{"2.511$ Trimestral"}</p>
            </div>
            <div>
              <button
                style={{ width: "90%" }}
                className="btn btn-dark m-4"
                onClick={() => {
                  setPlan(plan3);
                  setSeguro(" Salud Diamante Rojo");
                }}
              >
                {"Seleccionar Plan"}
              </button>
            </div>
          </div>
        </div>
        <p className="fs-1">{"Datos de Pago"}</p>
        <div
          className="card"
          style={{
            backgroundImage: `url("https://st.depositphotos.com/2475357/3803/i/450/depositphotos_38032161-stock-photo-abstract-white-geometric-neutral-background.jpg")`,
          }}
        >
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
                <div className="form-group col-6">
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
                <div className="form-group col-4 ms-5">
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
            </form>
          </div>
        </div>
        <div className="container m-5" style={{ width: "100%" }}>
          <h1 className="m-5">{`Su plan es ${seguro}`}</h1>
          <button
            type="button"
            style={{ width: "100%", height: "50px", marginLeft: "15%" }}
            className="btn btn-dark justify-content-center"
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
                navigate("/pagopoliza/confirmacion");
                console.log("listo, revisa la base de datos");
                return;
              } else {
                erro();
                return;
              }
            }}
          >
            {"comprar plan"}
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
