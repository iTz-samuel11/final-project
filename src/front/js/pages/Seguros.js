// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHospital,
//   faTruckMedical,
//   faUserDoctor,
// } from "@fortawesome/free-solid-svg-icons";
import emergencia from "../../../../docs/assets/Emergencia.png";
import {} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavPrincipal } from "../component/NavPrincipal";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";
import logo from "../../../../docs/assets/Logotipo.png";
import { Navbar } from "../component/NavHome";
import Swal from "sweetalert2";

export const SegurosBonpland = () => {
  const navigate = useNavigate();
  const myswal = () => {
    Swal.fire({
      title:
        "llama a una ambulancia o solicita atención domiciliaria a través de",
      text: "02123445678/0424255031\n En ambos números por favor indentifiquese como cliente de Seguros BonPland",
    });
  };

  return (
    <div>
      <NavPrincipal />
      <h1 align="center"> Bienvenidos! </h1>
      <div style={{ marginTop: "8%" }}>
        <div className="row py-3 m-4">
          <div className="col-4 d-flex justify-content-start g-0 ">
            <figure className="figure">
              <img
                className="aspect-ratio-1-1 "
                src={emergencia}
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </figure>
          </div>
          <div className="col-8 g-0">
            <button className="btn btn-danger btn-lg" onClick={() => myswal()}>
              Seleccione aquí si tiene alguna emergencia
            </button>
          </div>
          <div className="container">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade justify-content-center"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner m-4"
                style={{ borderRadius: "40px" }}
              >
                <div className="carousel-item active">
                  <img
                    src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1660265818/Post_Instagram_Salud_Medicina_Carrusel_lostso.png"
                    className="d-block w-100"
                    alt="loading..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1660266199/Post_Instagram_Salud_Medicina_Carrusel_1_g5najn.png"
                    className="d-block w-100"
                    alt="loading..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1660266412/Post_Instagram_Salud_Medicina_Carrusel_2_vpshur.png"
                    className="d-block w-100"
                    alt="loading..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1660270172/Post_Instagram_Salud_Medicina_Carrusel_3_ivhzcu.png"
                    className="d-block w-100"
                    alt="loading..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <div className="row py-3 m-4">
                <div className="col-4 d-flex justify-content-start g-0 ">
                  <figure className="figure">
                    <img
                      className="rounded-circle "
                      src="https://us.123rf.com/450wm/sanek13744/sanek137441607/sanek13744160700423/60163194-reloj-icono-dise%C3%B1o-plano-ilustraci%C3%B3n-vectorial-sobre-fondo-blanco.jpg?ver=6"
                      alt=""
                      style={{ width: "250px", height: "250px" }}
                    />
                  </figure>
                </div>
                <div className="col-8 g-0">
                  <h2>{"Cúal es nuestro horario?"}</h2>
                  <p className="lead">
                    {
                      "A partir del lunes 21 de marzo de 2022, regresamos a nuestro horario habitual de atención por oficina"
                    }
                  </p>
                  <p className="lead">
                    {
                      "Horario de atención al público Lunes a viernes 8:30 a.m. a 3:30 p.m."
                    }
                  </p>
                </div>
                <div style={{ marginTop: "5%" }} id="planes">
                  <div className="m-3 p-2">
                    <p className="fs-2">
                      <strong>{"Cómo solicitar tu carta Aval"}</strong>
                    </p>
                  </div>

                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="https://res.cloudinary.com/dn7fj8zhu/image/upload/v1660273075/Post_Instagram_Salud_Medicina_Carrusel_vllagu.jpg"
                        className="img-fluid rounded-start"
                        style={{ width: "432px", height: "287px" }}
                      />
                      <button
                        className="btn btn-danger me-4"
                        onClick={(e) => {
                          navigate("/solicitud-aval");
                        }}
                      >
                        {"Quiero solicitar mi carta aval"}
                      </button>
                      <p className="card-text fs-4">
                        {
                          "Seleccione el botón e ingrese todos los datos necesarios para pedir su carta aval"
                        }
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h2 className="card-title text-center">
                          {"Pasos para solicitar su Carta Aval"}
                        </h2>
                        <p className="card-text fs-4">
                          1.Necesita su número de póliza.
                        </p>{" "}
                        <p className="card-text fs-4">
                          2.Presupuesto de la clínica o centro médico donde se
                          realizará el procedimiento.
                        </p>{" "}
                        <p className="card-text fs-4"> 3.Informe médico.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
