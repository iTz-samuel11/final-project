import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Nav } from "../component/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/Footer";

export const SolicitudPoliza = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useRef();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.poliza();
  }, [actions.poliza]);
  const poliza = store.poliza && store.poliza.poliza;
  const sendEmail = async (e) => {
    e.preventDefault();
    const success = await actions.verification({
      email: email,
      password: password,
    });
    if (!success) {
      alert("verifique los datos");
      return;
    } else {
      emailjs
        .sendForm(
          "service_by7xqfy",
          "template_4y4rxba",
          form.current,
          "5J8lZIQhkW1CEw8Up"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/solicitud");
    }
  };
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <div>
          <p className="fs-1 m-3 p-3">
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "#211224" }} />
            {"         "}
            {"llena este formulario para que te llegue tu poliza al correo"}
            {"         "}
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "#211224" }} />
          </p>
        </div>
        <div
          className="d-block m-3 p-4"
          style={{
            border: "2px solid #211224",
            borderRadius: "10px",
            backgroundImage: `url("https://img.freepik.com/vector-premium/fondo-seguridad-cibernetica-elementos-futuristas_23-2148534479.jpg")`,
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <input name="poliza" type="hidden" value={poliza} />
            <div className="w-100">
              <p className="fs-2 text-light">{"Nombre y Apellido"}</p>
              <input
                type="text"
                name="name"
                placeholder="nombre y apellido"
                className="form-control"
              />
            </div>
            <div>
              <p className="fs-2 text-light">{"Email"}</p>
              <input
                placeholder="email"
                className="form-control "
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p className="fs-2 text-light">{"Password"}</p>
              <input
                className="form-control"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="m-3 p-3">
              <input
                className="col-6 btn btn-light"
                style={{ marginLeft: "50%" }}
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
